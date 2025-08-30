// api/env.js
export default function handler(req, res) {
  // list allowed origins WITHOUT trailing slashes
  const allowedOrigins = [
    'https://truth-or-dare-bit.vercel.app',
    'https://truth-or-dare-rcbit.vercel.app',
    'https://truthordarezone.vercel.app'
    // add more domains here if needed (no trailing slash)
  ];

  // helper to normalize incoming header values
  const normalize = (u) => {
    if (!u) return '';
    try {
      return u.trim().replace(/\/+$/, '').toLowerCase();
    } catch {
      return u;
    }
  };

  const requestOrigin = normalize(req.headers.origin || '');
  const referer = normalize(req.headers.referer || '');

  // Handle preflight (CORS)
  if (req.method === 'OPTIONS') {
    if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
      res.setHeader('Access-Control-Allow-Origin', requestOrigin);
    } else {
      // echo first allowed origin as fallback (optional)
      res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    // echo requested headers or allow common headers
    const acrh = req.headers['access-control-request-headers'] || 'Content-Type';
    res.setHeader('Access-Control-Allow-Headers', acrh);
    return res.status(204).end();
  }

  // Require POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // If Origin header present, require it to be in allowedOrigins
  if (requestOrigin) {
    if (!allowedOrigins.includes(requestOrigin)) {
      return res.status(403).json({
        error: 'Forbidden (origin)',
        details: { requestOrigin, allowedOrigins }
      });
    }
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
  } else {
    // No origin header: fall back to referer check
    const matching = allowedOrigins.find(o => referer.startsWith(o));
    if (!matching) {
      return res.status(403).json({
        error: 'Forbidden (referer)',
        details: { referer, allowedOrigins }
      });
    }
    res.setHeader('Access-Control-Allow-Origin', matching);
  }

  // If we reached here, origin/referer OK -> return credentials
  return res.status(200).json({
    SUPABASE_URL: process.env.SUPABASE_URL || null,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || null
  });
}
