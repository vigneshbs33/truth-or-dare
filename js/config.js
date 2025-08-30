// Global supabase client used by app.js
let supabase = null;

// Internal storage for the credentials (will be populated)
let SUPABASE_URL = null;
let SUPABASE_ANON_KEY = null;

/**
 * Try to load env from multiple sources (in priority order):
 * 1. window.ENV (for local static dev via config.local.js)
 * 2. process.env (when built by Next/Vite)
 * 3. fetch('/api/env') — a small serverless endpoint you can add on Vercel
 */
// ---------- loadEnv (replace your existing function) ----------
async function loadEnv() {
  // 1) window.ENV (local static config)
  if (typeof window !== 'undefined' && window.ENV && window.ENV.SUPABASE_URL && window.ENV.SUPABASE_ANON_KEY) {
    console.log('config.js: using window.ENV for supabase creds');
    SUPABASE_URL = window.ENV.SUPABASE_URL;
    SUPABASE_ANON_KEY = window.ENV.SUPABASE_ANON_KEY;
    return;
  }

  // 2) process.env (works when using Next/Vite/other bundlers)
  if (typeof process !== 'undefined' && process && process.env) {
    SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || null;
    SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || null;
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
      console.log('config.js: using process.env for supabase creds');
      return;
    }
  }

  // 3) Try to fetch from /api/env using POST (your api/env.js requires POST + same-origin)
  try {
    const resp = await fetch('/api/env', {
      method: 'POST',
      credentials: 'same-origin', // send cookies/origin info if needed
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
      // no body required
    });

    if (!resp.ok) {
      // helpful debugging output: status + text
      const text = await resp.text().catch(() => '');
      console.log('config.js: /api/env returned', resp.status, text);
    } else {
      // parse JSON only when ok
      const data = await resp.json();
      if (data.SUPABASE_URL && data.SUPABASE_ANON_KEY) {
        console.log('config.js: loaded supabase creds from /api/env');
        SUPABASE_URL = data.SUPABASE_URL;
        SUPABASE_ANON_KEY = data.SUPABASE_ANON_KEY;
        return;
      } else {
        console.log('config.js: /api/env returned JSON but missing keys', data);
      }
    }
  } catch (e) {
    console.log('config.js: /api/env fetch failed (probably not present)', e && e.message ? e.message : e);
  }

  console.warn('config.js: No Supabase credentials found. Add window.ENV (local), set env vars for your build (NEXT_PUBLIC_ or VITE_), or create /api/env on your host.');
}


/**
 * Wait until window.supabase SDK is loaded (if used via CDN)
 * and the credentials are available, then create client.
 */
async function initializeSupabase() {
  await loadEnv();

  // if credentials are missing, bail out (app will handle gracefully)
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('config.js: Supabase credentials missing — supabase will not be initialized yet.');
    return;
  }

  // Wait for the Supabase JS SDK to be available on window.supabase (if using CDN)
  const maxWaitMs = 5000;
  const intervalMs = 100;
  let waited = 0;

  while (typeof window.supabase === 'undefined' && waited < maxWaitMs) {
    await new Promise(r => setTimeout(r, intervalMs));
    waited += intervalMs;
  }

  if (typeof window.supabase !== 'undefined') {
    try {
      supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('🎉 Supabase initialized successfully (config.js)');
      // keep a global reference (optional — app.js expects global supabase variable)
      window._SUPABASE_CLIENT = supabase;
    } catch (err) {
      console.error('config.js: error creating supabase client', err);
    }
  } else {
    // If SDK not present, warn — but app may load SDK later and call initializeSupabase again
    console.warn('config.js: Supabase JS SDK not found on window (if you are using CDN, ensure <script src="...supabase-js"> is loaded before config.js).');
  }
}

// Try to initialize immediately (non-blocking)
initializeSupabase();


// ABSOLUTELY BRAIN-ROTTING TRUTH QUESTIONS 💀
const TRUTH_QUESTIONS = [
    "What's the most embarrassing thing you've ever done while sleepwalking?",
    "If you had to marry one of your teachers, who would it be and why?",
    "What's the weirdest thing you've ever eaten?",
    "Have you ever pretended to be sick to skip something important?",
    "What's the most embarrassing thing in your search history?",
    "If you could swap lives with anyone for a day, who would it be?",
    "What's the weirdest dream you've ever had?",
    "Have you ever had a crush on a cartoon character?",
    "What's the most embarrassing thing you've ever said to someone you liked?",
    "If you had to live in one video game world forever, which would you choose?",
    "What's the weirdest thing you've ever done to impress someone?",
    "Have you ever talked to yourself in the mirror?",
    "What's the most embarrassing thing you've ever worn?",
    "If you could have any superpower, what would it be and how would you use it?",
    "What's the weirdest thing you've ever done when you were alone?",
    "Have you ever had a crush on a fictional character?",
    "What's the most embarrassing thing you've ever done in public?",
    "If you could time travel, what's the first thing you'd do?",
    "What's the weirdest thing you've ever done to avoid doing homework?",
    "Have you ever pretended to understand something when you didn't?",
    "What's the most embarrassing thing you've ever done to get attention?",
    "If you could be any animal for a day, what would you be?",
    "What's the weirdest thing you've ever done to make someone laugh?",
    "Have you ever had a crush on someone way older than you?",
    "What's the most embarrassing thing you've ever done to impress your crush?",
    "If you could have dinner with anyone dead or alive, who would it be?",
    "What's the weirdest thing you've ever done to avoid talking to someone?",
    "Have you ever pretended to be someone else online?",
    "What's the most embarrassing thing you've ever done to get out of trouble?",
    "If you could only eat one food for the rest of your life, what would it be?",
    "What's the weirdest thing you've ever done to stay awake?",
    "Have you ever had a crush on someone you shouldn't have?",
    "What's the most embarrassing thing you've ever done to get a date?",
    "If you could be invisible for a day, what would you do?",
    "What's the weirdest thing you've ever done to avoid going to school?",
    "Have you ever pretended to be sick to get out of something?",
    "What's the most embarrassing thing you've ever done to get popular?",
    "If you could have any job in the world, what would it be?",
    "What's the weirdest thing you've ever done to avoid doing chores?",
    "Have you ever had a crush on someone way younger than you?",
    "What's the most embarrassing thing you've ever done to get likes on social media?",
    "If you could have any pet in the world, what would it be?",
    "What's the weirdest thing you've ever done to avoid going to bed?",
    "Have you ever pretended to be someone else to impress someone?",
    "What's the most embarrassing thing you've ever done to get money?",
    "If you could have any talent in the world, what would it be?",
    "What's the weirdest thing you've ever done to avoid doing homework?",
    "Have you ever had a crush on someone you met online?",
    "What's the most embarrassing thing you've ever done to get famous?",
    "If you could have any car in the world, what would it be?",
    "What's the weirdest thing you've ever done to avoid going to the doctor?",
    "Have you ever pretended to be rich to impress someone?",
    "What's the most embarrassing thing you've ever done to get a job?"
];

// ABSOLUTELY CHAOTIC DARE CHALLENGES 🔥
const DARE_CHALLENGES = [
    "Take a selfie with your most embarrassing face and post it on your story for 1 hour",
    "Call your mom/dad and tell them you're getting married (to someone they've never met)",
    "Go to a random person and ask them to be your best friend",
    "Dance like a chicken in the middle of your room for 2 minutes",
    "Text your crush with only emojis for the next 10 messages",
    "Wear your clothes backwards for the next hour",
    "Go to a mirror and tell yourself 10 compliments out loud",
    "Call a random number and sing 'Happy Birthday' to them",
    "Take a photo of yourself doing the most ridiculous pose possible",
    "Go to a stranger and ask them to rate your outfit from 1-10",
    "Dance to your favorite song while recording yourself",
    "Call your best friend and tell them you're moving to Antarctica",
    "Take a selfie with your most serious face and caption it 'Just vibing'",
    "Go to a random person and ask them what their favorite color is",
    "Record yourself doing your best impression of a famous person",
    "Call your sibling and tell them you're their long-lost twin",
    "Take a photo of yourself looking as confused as possible",
    "Go to a stranger and ask them to teach you something in 30 seconds",
    "Dance like nobody's watching (but record it)",
    "Call your friend and tell them you're starting a cult",
    "Take a selfie with your most dramatic face and caption it 'Living my best life'",
    "Go to a random person and ask them what their spirit animal is",
    "Record yourself doing your best robot dance",
    "Call your parent and tell them you're becoming a professional clown",
    "Take a photo of yourself looking as surprised as possible",
    "Go to a stranger and ask them to give you life advice",
    "Dance to classical music while recording yourself",
    "Call your friend and tell them you're joining the circus",
    "Take a selfie with your most determined face and caption it 'Grinding'",
    "Go to a random person and ask them what their favorite food is",
    "Record yourself doing your best animal impression",
    "Call your sibling and tell them you're their secret admirer",
    "Take a photo of yourself looking as confused as possible",
    "Go to a stranger and ask them to tell you a joke",
    "Dance like you're in a music video while recording",
    "Call your friend and tell them you're becoming a professional dancer",
    "Take a selfie with your most serious face and caption it 'No cap'",
    "Go to a random person and ask them what their dream job is",
    "Record yourself doing your best superhero pose",
    "Call your parent and tell them you're becoming a professional gamer",
    "Take a photo of yourself looking as excited as possible",
    "Go to a stranger and ask them what their favorite movie is",
    "Dance like you're at a party while recording yourself",
    "Call your friend and tell them you're becoming a professional chef",
    "Take a selfie with your most dramatic face and caption it 'Living legend'",
    "Go to a random person and ask them what their favorite hobby is",
    "Record yourself doing your best ninja moves",
    "Call your sibling and tell them you're their biggest fan",
    "Take a photo of yourself looking as mysterious as possible",
    "Go to a stranger and ask them what their favorite season is",
    "Dance like you're in a TikTok video while recording",
    "Call your friend and tell them you're becoming a professional artist",
    "Take a selfie with your most confident face and caption it 'Built different'",
    "Go to a random person and ask them what their favorite book is",
    "Record yourself doing your best martial arts moves",
    "Call your parent and tell them you're becoming a professional athlete",
    "Take a photo of yourself looking as powerful as possible",
    "Go to a stranger and ask them what their favorite music is",
    "Dance like you're in a dance battle while recording yourself",
    "Call your friend and tell them you're becoming a professional singer",
    "🌟 CONTRIBUTE TO THE PROJECT: Go to https://github.com/vigneshbs33/truth-or-dare and star the repository, then take a screenshot and share it! 🌟"
];

// Club promotion links
const CLUB_LINKS = {
    truth: "https://www.instagram.com/rotaract.bit/",
    dare: "https://www.instagram.com/rotaract.bit/"
};

// Now log the data after it's defined
console.log('🔥💀 Config.js loaded successfully!');
console.log('📊 TRUTH_QUESTIONS count:', TRUTH_QUESTIONS ? TRUTH_QUESTIONS.length : 'UNDEFINED');
console.log('📊 DARE_CHALLENGES count:', DARE_CHALLENGES ? DARE_CHALLENGES.length : 'UNDEFINED');
console.log('🎯 Config.js initialization complete!');
console.log('📊 Final TRUTH_QUESTIONS count:', TRUTH_QUESTIONS.length);
console.log('📊 Final DARE_CHALLENGES count:', DARE_CHALLENGES.length);
