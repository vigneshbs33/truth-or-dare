# 🔥💀 Truth or Dare - Absolute Chaos Mode 💀🔥

A chaotic and fun Truth or Dare web game with maximum brain rot and entertainment! Built with pure HTML, CSS, and JavaScript for maximum compatibility and fun. Features 50+ truth questions and 50+ dare challenges with chaotic animations and effects.

![Truth or Dare Game](https://img.shields.io/badge/Game-Truth%20or%20Dare-red)
![Version](https://img.shields.io/badge/Version-5.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen)

[**TRY NOW 🔥**](https://truthordarezone.vercel.app)

## 🌟 What's New in v5.0

- **🎭 Enhanced Chaos Mode**: More floating emojis and random effects
- **📱 Improved Mobile Experience**: Better touch interactions and responsive design
- **🎨 Visual Upgrades**: Rainbow text animations and glitch effects
- **⚡ Performance Optimizations**: Faster loading and smoother animations
- **🔧 Better Error Handling**: Improved JavaScript loading and fallback systems

## 🎮 Game Features

### 🎭 Truth Zone 💀
- **50+ Brain-Rotting Questions**: From embarrassing confessions to wild hypotheticals
- **Honesty Tracking**: Save your answers to the database
- **Random Emoji Decorations**: Each question gets unique chaotic flair
- **Skip Option**: Can't handle the truth? Skip it!

### ⚡ Dare Chaos 🔥
- **50+ Outrageous Challenges**: Social media pranks, phone calls, and creative tasks
- **Photo Submission**: Upload proof of your dare completion
- **Storage Integration**: Save your dare submissions with Supabase
- **Maximum Chaos**: No backing down from these challenges!

### 🔥 Chaos Effects & Animations
- **Floating Emojis**: Random emojis float across the screen
- **Screen Shake**: Random screen vibrations for extra chaos
- **Rainbow Text**: Animated rainbow colors on titles
- **Glitch Effects**: Text glitch animations
- **Random Chaos Triggers**: Unexpected effects during gameplay
- **Emoji Storms**: Explosive emoji animations

## 🚀 Quick Start

### Option 1: Live Demo
Visit the live version: [Truth or Dare - Absolute Chaos Mode](https://truthordarezone.vercel.app)

### Option 2: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/vigneshbs33/truth-or-dare.git
   cd truth-or-dare
   ```

2. **Open the game**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Start playing!**
   - Choose between Truth or Dare
   - Answer questions or complete challenges
   - Experience maximum chaos!

## 📱 Mobile Experience

This game is **optimized for mobile devices** and works perfectly on:
- 📱 Smartphones (iOS/Android)
- 📱 Tablets
- 💻 Desktop computers
- 🌐 All modern browsers

### Mobile Features:
- Touch-optimized buttons and interactions
- Responsive design that adapts to any screen size
- Fast loading and smooth animations
- No zoom issues or horizontal scrolling
- Mobile web app capable (add to home screen)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend**: Supabase (Database & Storage)
- **Styling**: Custom CSS with advanced animations and effects
- **Deployment**: Vercel/Netlify ready
- **Database**: PostgreSQL with Row Level Security
- **Storage**: Supabase Storage for image uploads

## 📁 Project Structure

```
truth-or-dare/
├── index.html              # Main game file with chaos overlay
├── styles/
│   └── main.css           # All styling, animations, and chaos effects
├── js/
│   ├── config.js          # Game configuration, questions, and Supabase setup
│   └── app.js             # Main game logic and chaos functions
├── database/
│   └── setup.sql          # Database schema and policies
├── api/
│   └── env.js             # Environment configuration
├── _headers               # Netlify headers configuration
├── README.md              # This file
├── package.json           # Project metadata and scripts
└── LICENSE                # MIT License
```

## 🎯 Game Mechanics

### Truth Questions
- Random selection from 50+ questions
- Text input for honest answers
- Database storage of responses
- Skip functionality for difficult questions

### Dare Challenges
- Random selection from 50+ challenges
- Photo upload requirement
- Image storage in Supabase
- Completion tracking

### Chaos System
- **Chaos Level**: Tracks game intensity
- **Random Effects**: Emoji storms, screen shakes, color changes
- **Progressive Intensity**: More chaos as you play longer
- **Visual Feedback**: Rainbow indicators and floating elements

## 🔧 Configuration & Setup

### Supabase Integration (Optional)
For data storage and image uploads:

1. **Create Supabase Account**
   - Visit [supabase.com](https://supabase.com)
   - Create a new project

2. **Database Setup**
   - Run the SQL commands in `database/setup.sql`
   - Creates `truths` and `dares` tables
   - Sets up storage bucket for images
   - Configures Row Level Security policies

3. **Environment Variables**
   - Set `SUPABASE_URL` and `SUPABASE_ANON_KEY`
   - Or use the `/api/env` endpoint for serverless deployment

### Custom Questions & Dares
Add your own content by editing `js/config.js`:

```javascript
const TRUTH_QUESTIONS = [
    "Your custom truth question here?",
    // ... more questions
];

const DARE_CHALLENGES = [
    "Your custom dare challenge here!",
    // ... more dares
];
```

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push
3. Get a live URL instantly
4. Automatic environment variable handling

### Netlify
1. Drag and drop the project folder
2. Get instant deployment
3. Custom domain support
4. Use `_headers` file for configuration

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select main branch as source
3. Access via `https://username.github.io/truth-or-dare`

### Local Development
```bash
# Python server
python -m http.server 8000

# Node.js server (if you have Node installed)
npx serve .

# PHP server
php -S localhost:8000
```

## 🤝 Contributing

We love contributions! Here's how you can help:

### 🌟 Star the Repository
Show your support by starring this repository!

### 🎯 Add New Questions/Dares
1. Fork the repository
2. Add your questions to `js/config.js`
3. Submit a pull request

### 🐛 Report Bugs
1. Open an issue
2. Describe the problem
3. Include steps to reproduce
4. Add browser/device information

### 💡 Suggest Features
1. Open an issue
2. Describe your idea
3. We'll discuss implementation

### 📝 Code Contributions
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### 🎨 Design & UI Improvements
- Better animations
- New chaos effects
- Improved mobile experience
- Accessibility enhancements

## 🐛 Known Issues & Solutions

### JavaScript Loading Issues
- **Problem**: Game data not loading
- **Solution**: Check browser console (F12) for errors
- **Workaround**: Reload page or wait for delayed initialization

### Supabase Connection
- **Problem**: Database features not working
- **Solution**: Verify environment variables are set
- **Alternative**: Game works offline without database

### Mobile Performance
- **Problem**: Animations lag on older devices
- **Solution**: Reduce chaos effects in settings
- **Workaround**: Disable animations for better performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Supabase**: For backend services and database
- **Open Source Community**: For amazing tools and libraries
- **All Contributors**: For making this project awesome!
- **Testers**: For feedback and bug reports

## 📞 Contact & Links

- **GitHub**: [@vigneshbs33](https://github.com/vigneshbs33)
- **LinkedIn**: [@vigneshbs-dev](https://www.linkedin.com/in/vigneshbs-dev/)
- **Project**: [Truth or Dare Repository](https://github.com/vigneshbs33/truth-or-dare)
- **Live Demo**: [Play Now](https://truthordarezone.vercel.app)

## 🎉 Special Thanks

Thanks to everyone who:
- 🌟 Stars this repository
- 🎯 Plays the game and provides feedback
- 💡 Suggests improvements and new features
- 🐛 Reports bugs and issues
- 🤝 Contributes code and documentation
- 📱 Tests on different devices and browsers

## 🔮 Future Plans

- **Multiplayer Mode**: Play with friends online
- **Custom Game Modes**: Different difficulty levels
- **Achievement System**: Unlock chaos badges
- **Social Features**: Share results on social media
- **More Animations**: Additional chaos effects
- **Sound Effects**: Audio chaos mode
- **Dark/Light Themes**: Visual customization

---

**🔥💀 Remember: This game contains MAXIMUM CHAOS and BRAIN ROT! Proceed at your own risk! 💀🔥**

**Made with 💀 and �� by Vignesh B S**
