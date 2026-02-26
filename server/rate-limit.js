const rateLimit = require("express-rate-limit");

const rateLimitHandler = (_req, res) => {
  res.status(429).json({ error: { message: "Too many requests, please try again later" } });
};

const readLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
});

const writeLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
});

function rateLimitMiddleware(req, res, next) {
  if (req.method === "GET") return readLimiter(req, res, next);
  writeLimiter(req, res, next);
}

module.exports = { rateLimitMiddleware, readLimiter, writeLimiter };
