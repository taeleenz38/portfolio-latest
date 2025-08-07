# Tae Lee - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my work experience, projects, and skills as a software engineer specializing in Web3 and frontend development.

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Modern UI/UX** - Clean, professional design with hover effects and micro-interactions
- **Performance Optimized** - Fast loading times with Next.js optimization
- **TypeScript** - Full type safety throughout the application
- **Accessible** - WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - Modern component library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Vercel** - Deployment platform

## 📁 Project Structure

```
portfolio-latest/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Site favicon
├── components/            # React components
│   ├── Landing.tsx        # Hero section
│   ├── AboutMe.tsx        # About section
│   ├── WorkHistory.tsx    # Work experience
│   ├── Projects.tsx       # Projects showcase
│   ├── Contact.tsx        # Contact section
│   ├── Navbar.tsx         # Navigation bar
│   ├── FloatingLinks.tsx  # Social media links
│   ├── data/              # Static data
│   │   ├── projectsData.tsx
│   │   └── workData.tsx
│   └── ui/                # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       └── input.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── public/                # Static assets
│   └── images/           # Image assets
└── package.json          # Dependencies and scripts
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Dark theme with custom accent colors
- **Accent Colors**: Custom green/teal palette
- **Typography**: Montserrat font family

### Animations
- Staggered entrance animations
- Smooth scroll transitions
- Hover effects and micro-interactions
- Intersection Observer based animations

### Responsive Breakpoints
- Mobile: 320px+
- Tablet: 640px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-latest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Sections

### 1. Landing Section
- Animated hero text with staggered entrance
- Professional introduction
- Call-to-action elements

### 2. About Me
- Personal background and experience
- Technology stack showcase
- Professional photo with hover effects

### 3. Work Experience
- Interactive work history cards
- Company logos and descriptions
- Responsive timeline layout

### 4. Projects
- Carousel-based project showcase
- Interactive project selection
- Detailed project descriptions
- Live links to deployed projects

### 5. Contact
- Professional contact form
- Email integration
- Social media links

## 🎯 Key Features

### Navigation
- Fixed navigation bar with scroll hide/show
- Smooth scrolling to sections
- Mobile-responsive menu

### Social Links
- Floating social media icons
- GitHub and LinkedIn integration
- Animated entrance effects

### Performance
- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal bundle size

## 🔧 Customization

### Adding New Projects
Edit `components/data/projectsData.tsx`:
```typescript
{
  id: "project-name",
  image: "/images/project-image.png",
  alt: "Project description",
  title: "Project Title",
  year: "2024",
  link: "https://project-url.com",
  description: ["Description point 1", "Description point 2"]
}
```

### Updating Work Experience
Edit `components/data/workData.tsx`:
```typescript
{
  company: "Company Name",
  role: "Job Title",
  duration: "Start Date ~ End Date",
  logo: "/images/company-logo.png",
  url: "https://company-website.com",
  responsibilities: ["Responsibility 1", "Responsibility 2"]
}
```

### Styling
- Colors: Update Tailwind config in `tailwind.config.ts`
- Fonts: Modify font imports in `app/layout.tsx`
- Animations: Adjust timing in component files

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: taekyu.lee3@gmail.com
- **LinkedIn**: [Tae Lee](https://www.linkedin.com/in/taelee3/)
- **GitHub**: [taeleenz38](https://github.com/taeleenz38)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
