# Mumbai Indians - Official Team Website

## 🏏 Project Overview
A comprehensive, responsive website dedicated to the Mumbai Indians IPL team. Built as part of the ShadowFox internship task.

## ✨ Features Implemented

### 1. Navigation Bar
- Fixed navbar with links: Home, Players, Schedule, Stats, News, Fan Zone, and Contact
- Mumbai Indians logo from `images/logo_mumbai_indians.png`
- Smooth scroll navigation
- Mobile-responsive hamburger menu
- Active link highlighting based on scroll position

### 2. Hero Section
- Full-screen hero banner using `images/banner_mi.jpg`
- Mumbai Indians logo display
- Team slogan: "Duniya Hila Denge Hum"
- Call-to-action button
- Parallax scrolling effect
- Floating logo animation

### 3. Players Section
All 11 players with their images from the `images` folder:
- Rohit Sharma - Captain / Opening Batter
- Hardik Pandya - All-rounder
- Suryakumar Yadav - Middle-order Batter
- Jasprit Bumrah - Fast Bowler
- Tilak Varma - Batter
- Trent Boult - Bowler
- Naman Dhir - Batter
- Mitchell Santner - All-rounder
- Bevon Jacobs - Bowler
- Deepak Chahar - Fast Bowler
- Jonny Bairstow - Wicketkeeper-Batsman

**Features:**
- Responsive grid layout (1-4 columns based on screen size)
- Hover effects with image zoom
- Player name overlay at bottom
- Smooth animations

### 4. Match Schedule
- Comprehensive table of 8 upcoming matches
- Includes: Date, Opponent, Venue, and Time
- Responsive table design (card layout on mobile)
- Hover effects on table rows

### 5. Team Statistics
- Four stat cards showing:
  - Total Matches: 256
  - Matches Won: 146
  - Matches Lost: 110
  - IPL Titles: 5
- Animated counter that triggers on scroll
- Top Performer section featuring Rohit Sharma
- Gradient card backgrounds

### 6. News Section
- Three news cards with:
  - News images
  - Category badges (Breaking, Update, Featured)
  - Publication dates
  - News titles and excerpts
  - "Read More" links
- Hover animations with image zoom

### 7. Fan Zone
**Interactive Poll:**
- Vote for favorite player
- Real-time percentage display
- Visual progress bars
- Vote persistence using localStorage
- Prevents duplicate voting

**Social Media Integration:**
- Twitter/X link
- Facebook link
- Instagram link
- YouTube link
- Custom styled buttons with hover effects

### 8. Contact Section
- Contact information cards:
  - Address: Wankhede Stadium
  - Email: info@mumbaiindians.com
  - Phone: +91 22 1234 5678
- Contact form with validation:
  - Name field
  - Email field (with validation)
  - Message textarea
  - Submit button
- Form submission feedback

### 9. Footer
- Mumbai Indians logo
- Team slogan: "Duniya Hila Denge Hum"
- Quick links navigation
- Copyright information
- Responsive three-column layout

### 10. Additional Features
- Scroll-to-top button (appears after scrolling)
- Scroll-based animations for all sections
- Active navigation highlighting
- Smooth scrolling throughout
- Console easter egg for fans

## 🎨 Design Elements

### Colors
- **Primary Blue:** #045093 (Mumbai Indians blue)
- **Gold:** #FFD700 (Mumbai Indians gold)
- **Dark Background:** #001529
- **Light Background:** #f5f7fa

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes
- Proper hierarchy and spacing

### Animations & Effects
- Fade-in-up animations
- Hover transitions
- Image zoom effects
- Floating logo animation
- Smooth scrolling
- Parallax background
- Counter animations
- Progress bar animations

## 📱 Responsive Design

### Desktop (≥1024px)
- 4-column player grid
- Full navigation menu
- Large hero section
- Side-by-side layouts

### Tablet (768px - 1023px)
- 3-column player grid
- Adjusted spacing
- Stacked sections

### Mobile (<768px)
- 1-2 column layouts
- Hamburger menu
- Responsive tables (card layout)
- Touch-friendly buttons
- Optimized images

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - External stylesheet with modern features:
  - CSS Grid & Flexbox
  - CSS Variables
  - Gradients & Transitions
  - Animations
  - Media Queries
- **JavaScript (Vanilla)** - Interactive features:
  - DOM Manipulation
  - Event Listeners
  - Local Storage
  - Intersection Observer API
  - Form Validation

## 📂 File Structure

```
IPL Team Website/
├── index.html          # Main HTML file
├── style.css           # External CSS stylesheet
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # Image assets folder
    ├── logo_mumbai_indians.png
    ├── banner_mi.jpg
    ├── Rohith_Sharma.jpg
    ├── Hardik_Pandya.jpg
    ├── Suryakumar_Yadav.jpg
    ├── Jasprit_Bumrah.jpg
    ├── Tilak_Varma.jpg
    ├── Trent_Boult.jpg
    ├── Naman_Dhir.jpg
    ├── Mitchell_Santner.jpg
    ├── Bevon_Jacobs.jpg
    ├── Deepak_Chahar.jpg
    └── Jonny_Bairstow.jpg
```

## 🚀 How to Run

1. Open the project folder
2. Double-click `index.html` to open in your browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
4. Navigate to `http://localhost:8000`

## 🎯 Project Objectives Met

✅ Developed proficiency in web design and development
✅ Curated team-related content (schedules, players, stats, news)
✅ Implemented user-friendly navigation (desktop & mobile)
✅ Integrated interactive features (polls, social media, forms)
✅ Created responsive design for all devices
✅ Added smooth animations and transitions
✅ Demonstrated creativity and attention to detail
✅ Used modern web development practices

## 🏆 Key Highlights

- **5-Time IPL Champions** theme throughout
- **Real player data** and images
- **Interactive polling system** with localStorage
- **Animated statistics** counter
- **Professional design** with team branding
- **Fully responsive** across all devices
- **Smooth user experience** with animations
- **Clean, maintainable code** structure

## 📝 Notes

- All images should be placed in the `images` folder
- Poll data persists in browser localStorage
- Form submission is simulated (no backend)
- All external links open in new tabs
- Optimized for modern browsers (Chrome, Firefox, Safari, Edge)

## 🎓 ShadowFox Internship Task

This project fulfills all requirements of the IPL Team Website Development task, demonstrating:
- Technical skills in HTML, CSS, and JavaScript
- Responsive web design capabilities
- User experience considerations
- Creative design implementation
- Passion for both web development and IPL

---

**Built with ❤️ for Mumbai Indians Paltan**

*Duniya Hila Denge Hum!* 🏏
