// api/env.js
export default function handler(req, res) {
  // Add all allowed origins here
  const allowedOrigins = [
    'https://truth-or-dare-bit.vercel.app',
    'https://truthordarezone.vercel.app/'
    // If you want to test locally, you can temporarily add:
    // 'http://127.0.0.1:5500', 'http://localhost:5500'
    // Remove local origins before final production deploy.
  ];

  const requestOrigin = req.headers.origin || '';
  const referer = req.headers.referer || '';

  // Handle preflight CORS first
  if (req.method === 'OPTIONS') {
    // If origin present and allowed, echo it back
    if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
      res.setHeader('Access-Control-Allow-Origin', requestOrigin);
    }
    // Allow the methods/headers we expect
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  // If origin is present, require it to be allowed
  if (requestOrigin) {
    if (!allowedOrigins.includes(requestOrigin)) {
      return res.status(403).json({ error: 'Forbidden (origin)' });
    }
    // allowed -> echo it back
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
  } else {
    // No Origin header (some requests/local tests). Try referer-based check:
    const allowedByReferer = allowedOrigins.find((o) => referer.startsWith(o));
    if (!allowedByReferer) {
      return res.status(403).json({ error: 'Forbidden (referer)' });
    }
    // set CORS header to the matching allowed origin
    res.setHeader('Access-Control-Allow-Origin', allowedByReferer);
  }

  // Accept only POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Success: return credentials (anon key is public by design; ensure RLS)
  return res.status(200).json({
    SUPABASE_URL: process.env.SUPABASE_URL || null,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || null,
  });
}
