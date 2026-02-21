/**
 * Multi-tenant middleware.
 *
 * When MULTI_TENANT=true, validates Bearer token from the Authorization header
 * against the api_keys table and attaches req.apiKey.
 *
 * When MULTI_TENANT is not set (self-hosted), sets req.apiKey = null and skips.
 */

function createTenantMiddleware(pool) {
  return async (req, res, next) => {
    if (process.env.MULTI_TENANT !== "true") {
      req.apiKey = null;
      return next();
    }

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: { message: "API key required" } });
    }

    const key = authHeader.slice(7);
    if (!key) {
      return res.status(401).json({ error: { message: "API key required" } });
    }

    try {
      const { rows } = await pool.query(
        "SELECT key FROM api_keys WHERE key = $1",
        [key]
      );
      if (rows.length === 0) {
        return res.status(401).json({ error: { message: "Invalid API key" } });
      }
      req.apiKey = key;
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = { createTenantMiddleware };
