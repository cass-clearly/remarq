/**
 * WebSocket client for real-time comment updates.
 *
 * Connects to the Remarq server's /ws endpoint and subscribes to a document.
 * Automatically reconnects with exponential backoff on disconnection.
 */

let _ws = null;
let _url = null;
let _documentId = null;
let _onEvent = null;
let _reconnectTimer = null;
let _attempt = 0;
let _intentionallyClosed = false;

const BASE_DELAY = 1000;
const MAX_DELAY = 30000;
const MAX_ATTEMPTS = Infinity;

export function getReconnectDelay(attempt) {
  const delay = Math.min(BASE_DELAY * Math.pow(2, attempt), MAX_DELAY);
  // Add jitter: 0.5x–1.5x
  return Math.round(delay * (0.5 + Math.random()));
}

/**
 * Build the WebSocket URL from an HTTP API URL.
 * http://host:port → ws://host:port/ws
 * https://host:port → wss://host:port/ws
 */
export function buildWsUrl(apiUrl) {
  const base = apiUrl.replace(/\/+$/, "");
  const wsBase = base.replace(/^http/, "ws");
  return `${wsBase}/ws`;
}

/**
 * Connect to the WebSocket server and subscribe to a document.
 * @param {string} apiUrl - The HTTP API base URL (e.g. "http://localhost:3333")
 * @param {string} documentId - Document ID to subscribe to
 * @param {function} onEvent - Callback receiving { type, comment } events
 */
export function connectWebSocket(apiUrl, documentId, onEvent) {
  if (!apiUrl || !documentId) return;

  _url = buildWsUrl(apiUrl);
  _documentId = documentId;
  _onEvent = onEvent;
  _intentionallyClosed = false;
  _attempt = 0;

  _connect();
}

function _connect() {
  if (_intentionallyClosed) return;

  try {
    _ws = new WebSocket(_url);
  } catch {
    _scheduleReconnect();
    return;
  }

  _ws.onopen = () => {
    _attempt = 0;
    _ws.send(JSON.stringify({ type: "subscribe", document: _documentId }));
  };

  _ws.onmessage = (event) => {
    let msg;
    try {
      msg = JSON.parse(event.data);
    } catch {
      return;
    }

    // Ignore the subscription acknowledgement
    if (msg.type === "subscribed") return;

    if (_onEvent && (msg.type === "comment.created" || msg.type === "comment.updated" || msg.type === "comment.deleted")) {
      _onEvent(msg);
    }
  };

  _ws.onclose = () => {
    _ws = null;
    if (!_intentionallyClosed) {
      _scheduleReconnect();
    }
  };

  _ws.onerror = () => {
    // onclose will fire after onerror, triggering reconnect
  };
}

function _scheduleReconnect() {
  if (_intentionallyClosed || _attempt >= MAX_ATTEMPTS) return;
  const delay = getReconnectDelay(_attempt);
  _attempt++;
  _reconnectTimer = setTimeout(_connect, delay);
}

/**
 * Disconnect from the WebSocket server.
 */
export function disconnectWebSocket() {
  _intentionallyClosed = true;
  if (_reconnectTimer) {
    clearTimeout(_reconnectTimer);
    _reconnectTimer = null;
  }
  if (_ws) {
    _ws.close();
    _ws = null;
  }
}
