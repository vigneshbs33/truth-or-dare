export default function handler(req, res) {
  // Only allow server-side (no GET requests in browser)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Optional: restrict to same-origin (Vercel domain)
  const origin = req.headers.origin || "";
  if (!origin.includes("truth-or-dare-bit.vercel.app")) {
    return res.status(403).json({ error: "Forbidden" });
  }

  // Return env only if safe
  res.status(200).json({
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  });
}
