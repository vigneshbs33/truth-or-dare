# 🔥💀 Truth or Dare - Absolute Chaos Mode 💀🔥

A brain-rottingly chaotic Truth or Dare game built with HTML, CSS, JavaScript, and Supabase for maximum entertainment and club promotion!

## 🌟 Features

- **50 Brain-Melting Truth Questions** - From sleepwalking confessions to cartoon character crushes
- **50 Chaotic Dare Challenges** - From fake marriages to asking strangers to be best friends
- **Maximum Chaos Effects** - Emoji storms, screen shakes, rainbow text, and more!
- **Supabase Integration** - Stores truth answers and dare images
- **Club Promotion** - Instagram links after every challenge
- **Responsive Design** - Works on all devices
- **File Upload** - Users can submit dare completion photos

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Fork/Clone this repository** to your GitHub account
2. **Go to [Vercel](https://vercel.com)** and sign in with GitHub
3. **Click "New Project"**
4. **Import your repository**
5. **Configure environment variables:**
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_ANON_KEY`: Your Supabase anonymous key
6. **Click "Deploy"**

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## 🛠️ Local Development

### Prerequisites
- Node.js (optional, for local server)
- Modern web browser

### Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/truth-or-dare.git
   cd truth-or-dare
   ```

2. **Open in browser:**
   - Double-click `index.html`, or
   - Use a local server: `python -m http.server 8000`

3. **Start developing!**

## 🗄️ Supabase Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

### 2. Run Database Setup
1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `database/setup.sql`
4. Run the script

### 3. Update Configuration
Update `js/config.js` with your Supabase credentials:
```javascript
const SUPABASE_URL = 'your-project-url';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

## 📁 Project Structure

```
truth-or-dare/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All CSS styles
├── js/
│   ├── config.js          # Supabase config & game data
│   └── app.js             # Game logic & chaos functions
├── database/
│   └── setup.sql          # Database schema
├── vercel.json            # Vercel deployment config
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🔧 Configuration

### Environment Variables
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anonymous key

### Customization
- **Club Links**: Update `CLUB_LINKS` in `js/config.js`
- **Questions**: Modify `TRUTH_QUESTIONS` and `DARE_CHALLENGES` arrays
- **Styling**: Edit `styles/main.css`
- **Chaos Level**: Adjust chaos functions in `js/app.js`

## 🎮 How to Play

1. **Choose Truth or Dare**
2. **Answer truth questions** honestly in the text area
3. **Complete dare challenges** and upload proof photos
4. **Follow the club** on Instagram after each challenge
5. **Enjoy the chaos!** 🔥💀

## 🌐 Deployment

### Vercel (Recommended)
- Automatic deployments from GitHub
- Global CDN
- Free tier available
- Easy environment variable management

### Other Platforms
- **Netlify**: Drag and drop `index.html`
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: Use Firebase CLI

## 🐛 Troubleshooting

### Common Issues

1. **"Loading challenges" never loads**
   - Check browser console for errors
   - Verify Supabase credentials
   - Ensure all scripts are loading

2. **Database errors**
   - Run the SQL setup script
   - Check Supabase RLS policies
   - Verify table structure

3. **File upload fails**
   - Check Supabase storage bucket
   - Verify storage policies
   - Check file size limits

### Debug Mode
Open browser console (F12) to see detailed logs and error messages.

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ❌ Internet Explorer

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- **GitHub Issues**: Report bugs and request features
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)

## 🎉 Credits

- **Game Design**: Maximum chaos and brain rot
- **Club Promotion**: Rotaract BIT
- **Technologies**: HTML5, CSS3, JavaScript, Supabase
- **Deployment**: Vercel

---

**🔥 CHAOS MODE: ACTIVATED! BRAIN ROT: MAXIMUM! 💀**

*Ready for deployment and maximum entertainment!*
