# Professional Portfolio Website

A beautiful, responsive portfolio website built with HTML5 and Tailwind CSS, ready for deployment on Vercel.

## Features

- 🎨 **Modern Design** - Clean, professional layout with smooth animations
- 📱 **Responsive** - Works perfectly on all device sizes
- ⚡ **Fast Loading** - Optimized for performance
- 🖼️ **Project Gallery** - Showcases your work with beautiful screenshots
- 📧 **Contact Form** - Functional contact form with success modal
- 🌙 **Smooth Interactions** - Hover effects, transitions, and micro-interactions
- 📊 **Skills Section** - Display your technical skills
- 🔗 **Social Links** - Easy integration with social media profiles

## Project Structure

```
porto/
├── index.html              # Main portfolio page
├── vercel.json            # Vercel deployment configuration
├── package.json           # Project metadata and scripts
├── README.md              # This file
├── 1531537435300.jpg      # Your profile photo
└── screenshots/           # Project screenshots
    └── hr_payroll/
        ├── Login.png
        ├── Absensi_Karyawan.png
        ├── Input_kasbon - 1.png
        ├── Input_kasbon - 2.png
        ├── master_kalender.png
        ├── Input_Karyawan.png
        ├── form_pembayaran_gaji.png
        ├── Print_Gaji.png
        ├── Laporan_Absensi.png
        └── Laporan_Gaji.png
```

## Quick Start

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```

   Follow the prompts to deploy your portfolio. Your site will be live in seconds!

### Option 2: Local Development

1. **Navigate to the project directory**:
   ```bash
   cd porto
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Customization

### Personal Information

Update the following sections in `index.html`:

1. **Hero Section** (lines 75-95):
   - Change "Your Name" to your actual name
   - Update the description paragraph
   - Add your social media links

2. **About Section** (lines 140-170):
   - Update the personal information
   - Modify the "About Me" content
   - Add your skills and qualities

3. **Contact Section** (lines 430-480):
   - Update contact information
   - Add your actual email and phone number
   - Configure your location

### Projects

The portfolio includes your HR Payroll Management System project with screenshots. To add more projects:

1. Add screenshots to the `screenshots/` directory
2. Update the project cards in the HTML structure
3. Modify project descriptions and technologies

### Colors and Styling

The theme uses purple and indigo gradients. To customize:

1. **Primary Colors**: Modify the gradient classes in the CSS
2. **Typography**: Update font families and sizes
3. **Animations**: Adjust the fade-in and hover effects

## Deployment Instructions

### Vercel Deployment (Easiest)

1. **Push to GitHub** (optional but recommended):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy via Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository or upload the files
   - Vercel will automatically detect it's a static site
   - Click "Deploy" - Your portfolio will be live!

### Alternative Deployment Options

- **Netlify**: Drag and drop the folder to [netlify.com](https://netlify.com)
- **GitHub Pages**: Enable GitHub Pages in your repository settings
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Any static hosting service**: Upload the `index.html` file and assets

## Features Included

- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Hero Section**: Eye-catching introduction with your photo
- **About Section**: Personal information and skills
- **Skills Showcase**: Technology logos and descriptions
- **Project Gallery**: Detailed project showcase with screenshots
- **Contact Form**: Functional contact form with validation
- **Social Links**: Easy integration with your social profiles
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Back to Top**: Convenient button for navigation
- **Animations**: Fade-in effects and hover animations
- **Modern Design**: Clean, professional layout with Tailwind CSS

## Technologies Used

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library
- **Vanilla JavaScript**: Interactivity and animations
- **Vercel**: Deployment platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).

## Get Started

1. Clone or download this repository
2. Customize the content with your information
3. Add your project screenshots
4. Deploy to Vercel or your preferred hosting platform
5. Share your amazing portfolio with the world!

---

**Happy Coding! 🚀**