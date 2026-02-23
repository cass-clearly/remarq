const { WebSocketServer } = require("ws");

// Map<documentId, Set<WebSocket>>
const _subscriptions = new Map();

let _wss = null;

const HEARTBEAT_INTERVAL = 30000;

/**
 * Attach a WebSocket server to an existing HTTP server.
 * Clients connect on the `/ws` path and send:
 *   { "type": "subscribe", "document": "<documentId>" }
 * to receive real-time events for that document.
 */
function attachWebSocket(httpServer) {
  _wss = new WebSocketServer({ noServer: true });

  httpServer.on("upgrade", (req, socket, head) => {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);
    if (pathname !== "/ws") {
      socket.destroy();
      return;
    }
    _wss.handleUpgrade(req, socket, head, (ws) => {
      _wss.emit("connection", ws, req);
    });
  });

  _wss.on("connection", (ws) => {
    ws.isAlive = true;
    ws._subscribedDoc = null;

    ws.on("pong", () => { ws.isAlive = true; });

    ws.on("message", (raw) => {
      let msg;
      try {
        msg = JSON.parse(raw);
      } catch {
        return;
      }

      if (msg.type === "subscribe" && typeof msg.document === "string") {
        // Unsubscribe from previous document
        if (ws._subscribedDoc) {
          const prev = _subscriptions.get(ws._subscribedDoc);
          if (prev) {
            prev.delete(ws);
            if (prev.size === 0) _subscriptions.delete(ws._subscribedDoc);
          }
        }

        ws._subscribedDoc = msg.document;
        if (!_subscriptions.has(msg.document)) {
          _subscriptions.set(msg.document, new Set());
        }
        _subscriptions.get(msg.document).add(ws);

        ws.send(JSON.stringify({ type: "subscribed", document: msg.document }));
      }
    });

    ws.on("close", () => {
      if (ws._subscribedDoc) {
        const subs = _subscriptions.get(ws._subscribedDoc);
        if (subs) {
          subs.delete(ws);
          if (subs.size === 0) _subscriptions.delete(ws._subscribedDoc);
        }
      }
    });
  });

  // Heartbeat: detect stale connections
  const interval = setInterval(() => {
    if (!_wss) { clearInterval(interval); return; }
    for (const ws of _wss.clients) {
      if (!ws.isAlive) { ws.terminate(); continue; }
      ws.isAlive = false;
      ws.ping();
    }
  }, HEARTBEAT_INTERVAL);

  _wss.on("close", () => clearInterval(interval));

  return _wss;
}

/**
 * Broadcast an event to all clients subscribed to a given document.
 * @param {string} documentId
 * @param {object} event - { type: "comment.created"|"comment.updated"|"comment.deleted", comment: {...} }
 */
function broadcast(documentId, event) {
  const subs = _subscriptions.get(documentId);
  if (!subs || subs.size === 0) return;

  const payload = JSON.stringify(event);
  for (const ws of subs) {
    if (ws.readyState === ws.OPEN) {
      ws.send(payload);
    }
  }
}

/**
 * Close the WebSocket server and clean up subscriptions.
 */
function closeWebSocket() {
  _subscriptions.clear();
  if (_wss) {
    _wss.close();
    _wss = null;
  }
}

/** Visible for testing. */
function getSubscriptions() {
  return _subscriptions;
}

module.exports = { attachWebSocket, broadcast, closeWebSocket, getSubscriptions };
