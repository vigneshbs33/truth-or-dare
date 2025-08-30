// api/env.js
export default function handler(req, res) {
  const allowedOrigin = 'https://truth-or-dare-bit.vercel.app';

  // CORS headers for preflight and POSTs from your site
  const requestOrigin = req.headers.origin || '';
  if (requestOrigin && requestOrigin === allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Respond to preflight immediately
  if (req.method === 'OPTIONS') return res.status(204).end();

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Basic same-site check: allow if origin matches or referer startsWith allowedOrigin
  const referer = req.headers.referer || '';
  if (requestOrigin && requestOrigin !== allowedOrigin) {
    return res.status(403).json({ error: 'Forbidden (origin)' });
  }
  if (!requestOrigin && referer && !referer.startsWith(allowedOrigin)) {
    return res.status(403).json({ error: 'Forbidden (referer)' });
  }

  // Return anon key (still public by design — ensure RLS)
  return res.status(200).json({
    SUPABASE_URL: process.env.SUPABASE_URL || null,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || null,
  });
}
