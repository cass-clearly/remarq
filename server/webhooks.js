const crypto = require("crypto");

// ── HMAC Signing ────────────────────────────────────────────────────

function signPayload(secret, body) {
  return crypto.createHmac("sha256", secret).update(body).digest("hex");
}

// ── Delivery with retries ───────────────────────────────────────────

async function deliverWebhook(url, secret, payload) {
  const body = JSON.stringify(payload);
  const signature = signPayload(secret, body);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Remarq-Signature": signature,
    },
    body,
    signal: AbortSignal.timeout(10000),
  });

  if (!res.ok) {
    throw new Error(`Webhook delivery failed: ${res.status}`);
  }
  return res;
}

async function retryWithBackoff(fn, { maxAttempts = 3, baseDelay = 1000 } = {}) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === maxAttempts) throw err;
      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

// ── Slack / Discord formatting ──────────────────────────────────────

function formatSlackPayload(event, data) {
  const comment = data.comment;
  const action = event === "comment.created" ? "New comment"
    : event === "comment.resolved" ? "Comment resolved"
    : "Comment deleted";

  return {
    text: `${action} by ${comment.author}`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*${action}* by *${comment.author}*\n>${comment.body}`,
        },
      },
    ],
  };
}

function formatDiscordPayload(event, data) {
  const comment = data.comment;
  const action = event === "comment.created" ? "New comment"
    : event === "comment.resolved" ? "Comment resolved"
    : "Comment deleted";

  return {
    embeds: [
      {
        title: action,
        description: comment.body,
        fields: [
          { name: "Author", value: comment.author, inline: true },
          { name: "Document", value: comment.document, inline: true },
        ],
      },
    ],
  };
}

// ── Event trigger ───────────────────────────────────────────────────

function triggerEvent(pool, eventType, data) {
  // Fire and forget — do not await, do not block the response
  _dispatchWebhooks(pool, eventType, data).catch((err) => {
    console.error(`Webhook dispatch error for ${eventType}:`, err.message);
  });
}

async function _dispatchWebhooks(pool, eventType, data) {
  const { rows: webhooks } = await pool.query(
    "SELECT * FROM webhooks WHERE active = true AND $1 = ANY(events)",
    [eventType]
  );

  const payload = {
    event: eventType,
    created_at: new Date().toISOString(),
    data,
  };

  const deliveries = webhooks.map((webhook) => {
    let finalPayload = payload;
    if (webhook.url.includes("hooks.slack.com")) {
      finalPayload = formatSlackPayload(eventType, data);
    } else if (webhook.url.includes("discord.com/api/webhooks")) {
      finalPayload = formatDiscordPayload(eventType, data);
    }

    return retryWithBackoff(() => deliverWebhook(webhook.url, webhook.secret, finalPayload));
  });

  await Promise.allSettled(deliveries);
}

module.exports = {
  signPayload,
  deliverWebhook,
  retryWithBackoff,
  formatSlackPayload,
  formatDiscordPayload,
  triggerEvent,
  _dispatchWebhooks,
};
