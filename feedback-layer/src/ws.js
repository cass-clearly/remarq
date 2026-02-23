/**
 * WebSocket client for real-time comment updates.
 *
 * Connects to the Remarq server's /ws endpoint, subscribes to a document,
 * and invokes a callback on incoming events. Reconnects automatically with
 * exponential backoff when the connection drops.
 */

const MAX_BACKOFF_MS = 30000;

/**
 * Derive a WebSocket URL from the HTTP API base URL.
 * http://host → ws://host/ws, https://host → wss://host/ws
 */
function wsUrlFromApi(apiBaseUrl) {
  const url = apiBaseUrl.replace(/\/+$/, "");
  return url.replace(/^http/, "ws") + "/ws";
}

/**
 * Connect to the WebSocket server and subscribe to a document.
 *
 * @param {object} opts
 * @param {string} opts.apiBaseUrl - HTTP base URL of the Remarq API
 * @param {string} opts.documentId - Document ID to subscribe to
 * @param {(event: object) => void} opts.onEvent - Callback for incoming events
 * @returns {{ close: () => void }} Handle to tear down the connection
 */
export function connectWs({ apiBaseUrl, documentId, onEvent }) {
  const wsUrl = wsUrlFromApi(apiBaseUrl);
  let ws = null;
  let backoff = 1000;
  let timer = null;
  let closed = false;

  function connect() {
    if (closed) return;

    try {
      ws = new WebSocket(wsUrl);
    } catch {
      scheduleReconnect();
      return;
    }

    ws.onopen = () => {
      backoff = 1000; // reset on successful connect
      ws.send(JSON.stringify({ type: "subscribe", documentId }));
    };

    ws.onmessage = (e) => {
      try {
        const event = JSON.parse(e.data);
        onEvent(event);
      } catch {
        // ignore malformed messages
      }
    };

    ws.onclose = () => {
      if (!closed) scheduleReconnect();
    };

    ws.onerror = () => {
      // onclose will fire after onerror — reconnect handled there
    };
  }

  function scheduleReconnect() {
    if (closed) return;
    timer = setTimeout(() => {
      connect();
    }, backoff);
    backoff = Math.min(backoff * 2, MAX_BACKOFF_MS);
  }

  connect();

  return {
    close() {
      closed = true;
      clearTimeout(timer);
      if (ws) {
        ws.onclose = null; // prevent reconnect on intentional close
        ws.close();
      }
    },
  };
}
