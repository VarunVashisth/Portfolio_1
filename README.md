# Varun Vashisth - Backend Developer Portfolio

A modern, minimalist portfolio built with **Next.js**, **Three.js**, **Framer Motion**, and **Tailwind CSS**. This portfolio is designed to showcase your backend development skills and projects with a sleek, professional design.

## ✨ Features

- **Modern Hero Section**: Eye-catching introduction with spotlight effects
- **Bento Grid Layout**: Responsive grid showcasing your key information and skills
- **Project Showcase**: Highlight your backend projects with technology stacks
- **Work Experience**: Display your professional journey and career milestones
- **Responsive Design**: Works seamlessly across all devices
- **3D Effects**: Interactive elements powered by Three.js
- **Smooth Animations**: Beautiful transitions using Framer Motion
- **Clean Code**: Well-structured, reusable components

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14+
- **3D Library**: Three.js
- **Animation Library**: Framer Motion
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: Shadcn/ui

## 📁 Project Structure

```
varun-backend-portfolio/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Main home page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── provider.tsx              # Client providers
│   └── global-error.jsx          # Error handling
│
├── components/                   # React components
│   ├── Hero.tsx                  # Hero section with intro
│   ├── Grid.tsx                  # Bento grid showing about/skills
│   ├── RecentProjects.tsx        # Project showcase section
│   ├── Experience.tsx            # Work experience timeline
│   ├── Approach.tsx              # Your approach/methodology
│   ├── Clients.tsx               # Companies/skills section
│   ├── Footer.tsx                # Footer with contact info
│   ├── MagicButton.tsx           # Reusable button component
│   └── ui/                       # UI component library
│       ├── FloatingNavbar.tsx    # Navigation bar
│       ├── ContainerScroll.tsx   # Scroll animation component
│       ├── BackgroundBoxes.tsx   # Background effect
│       ├── InfiniteMovingCards.tsx # Carousel component
│       └── [other UI components...]
│
├── data/                         # Data and configurations
│   └── index.ts                  # ALL YOUR CONTENT GOES HERE!
│                                 # Contains:
│                                 # - navItems (navigation menu)
│                                 # - gridItems (about section)
│                                 # - projects (your projects)
│                                 # - workExperience (jobs/internships)
│                                 # - companies (tech stack/tools)
│                                 # - socialMedia (social links)
│
├── lib/                          # Utility functions
│   └── utils.ts                  # Helper functions
│
├── public/                       # Static assets
│   ├── *.svg                     # Technology icons
│   ├── *.png, *.jpg              # Project images
│   └── [other assets...]
│
├── utils/                        # Additional utilities
│   └── cn.ts                     # Class name utility
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
└── README.md                     # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Setup

1. **Extract the portfolio**:
   ```bash
   unzip varun-backend-portfolio.zip
   cd varun-backend-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000`

5. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

## 📝 How to Customize (IMPORTANT!)

All your portfolio content is managed in **ONE FILE**: `data/index.ts`

### 1. Update Navigation Items
Edit `navItems` in `data/index.ts`:
```typescript
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];
```

### 2. Update About Section (Grid Items)
Edit `gridItems` in `data/index.ts`. This shows 6 cards about you:
```typescript
export const gridItems = [
  {
    id: 1,
    title: "Your main title here", // Main headline
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg", // Background image
    spareImg: "",
  },
  // ... other grid items
];
```

**Grid Item Properties**:
- `id`: Unique identifier
- `title`: Card title/text
- `description`: Subtitle (optional)
- `className`: Tailwind classes for sizing (controls position in grid)
- `img`: Background image path (in /public/)
- `titleClassName`: Text alignment classes

### 3. Add Your Projects
Edit `projects` in `data/index.ts`:
```typescript
export const projects = [
  {
    id: 1,
    title: "E-Commerce API Backend",
    des: "Built REST API with Node.js and Express, handling 10k+ daily requests. Implemented JWT authentication, database optimization, and caching.",
    img: "/p1.svg", // Project image
    iconLists: ["/node.svg", "/express.svg", "/mongodb.svg", "/redis.svg"],
    link: "https://github.com/yourusername/project-name",
  },
  // Add more projects...
];
```

**Project Properties**:
- `id`: Unique identifier
- `title`: Project name
- `des`: Project description
- `img`: Project image/thumbnail
- `iconLists`: Array of technology icons (paths from /public/)
- `link`: GitHub or project link

### 4. Update Work Experience
Edit `workExperience` in `data/index.ts`:
```typescript
export const workExperience = [
  {
    id: 1,
    title: "Senior Backend Developer",
    desc: "Built microservices architecture using Node.js and Docker. Managed team of 3 developers. Reduced API latency by 40%.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg", // Experience icon
  },
  // Add more experiences...
];
```

### 5. Update Tech Stack / Companies
Edit `companies` in `data/index.ts` (displayed as tech stack or tools):
```typescript
export const companies = [
  {
    id: 1,
    name: "nodejs",
    img: "/nodejs.svg",
    nameImg: "/nodeName.svg", // Logo with text
  },
  // Add your tech stack...
];
```

### 6. Update Social Media Links
Edit `socialMedia` in `data/index.ts`:
```typescript
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/yourusername",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/yourprofile/",
  },
];
```

## 🎨 Adding Images and Icons

1. **Add to /public/ folder**: Place images, SVGs, and icons here
2. **Reference in code**: Use relative paths like `/imagename.svg`
3. **Icon sources**: 
   - Use SVG icons for technologies
   - PNG/JPG for project thumbnails
   - The portfolio includes common tech icons (Node.js, React, Python, Docker, etc.)

## 🔧 Advanced Customization

### Change Color Scheme
Edit `tailwind.config.ts`:
```typescript
// Customize colors in the theme section
colors: {
  black: {
    DEFAULT: "#000",
    100: "#000319",
    // ... modify these hex values
  },
  purple: "#CBACF9",
  // ... add more colors
}
```

### Modify Component Styling
Components are in `components/` folder. Edit any component to change:
- Layout structure
- Animation timing (Framer Motion)
- Tailwind classes
- Content positioning

### Edit Hero Section
File: `components/Hero.tsx`
- Change main headline
- Modify introduction text
- Adjust spotlight effect

### Edit Footer
File: `components/Footer.tsx`
- Add/remove contact information
- Change footer text
- Add email or contact form

## 📦 Adding New Sections

1. Create new component in `components/` folder
2. Import and add to `app/page.tsx`
3. Add styling with Tailwind CSS
4. Use data from `data/index.ts` if needed

Example:
```typescript
// components/YourNewSection.tsx
export default function YourNewSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* Your content */}
      </div>
    </section>
  );
}
```

## 🚨 Important Notes About This Portfolio

### What You Need to Fill In:
1. **Your Name** - Update in Hero and Grid components
2. **Your Email** - Add to Footer component
3. **Your Projects** - Replace placeholder projects with your actual work
4. **Your Experience** - Fill in real job titles, companies, and achievements
5. **Your Social Links** - Add your GitHub, LinkedIn, etc.
6. **Your Skills/Tech Stack** - Update companies array with your technologies
7. **Your Images** - Add personal photo, project screenshots, etc.

### Removed Sections:
- **Testimonials**: Removed as requested (was showing client feedback)
- **Clients Section**: Changed to show tech stack instead

### Files That Need Updates:
- `data/index.ts` - **PRIORITY** (main content)
- `components/Hero.tsx` - Your introduction
- `components/Footer.tsx` - Contact information
- `public/` - Add your project images and profile photo

## 📚 File-by-File Breakdown

### `data/index.ts` - THE MAIN FILE
Contains ALL textual content:
- Navigation menu items
- About section cards
- All projects
- Work experience
- Tech stack
- Social media links

**This is where you spend 90% of your time customizing!**

### `app/page.tsx`
Main page structure. Import/remove sections as needed:
```typescript
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

// Components are used in order here
```

### `components/`
**Hero.tsx**: Main introduction with your name and title
**Grid.tsx**: About section (uses gridItems from data)
**RecentProjects.tsx**: Project showcase (uses projects from data)
**Experience.tsx**: Work experience timeline (uses workExperience from data)
**Clients.tsx**: Tech stack display (uses companies from data)
**Approach.tsx**: Your development approach/methodology
**Footer.tsx**: Contact and social links

## 🔗 Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Three.js**: https://threejs.org/docs/

## 🐛 Troubleshooting

**Port 3000 already in use**:
```bash
npm run dev -- -p 3001
```

**Dependencies not installing**:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styling looks wrong**:
```bash
npm run build
npm run dev
```

## 📞 Getting Help

- Check component files for structure
- Review Tailwind CSS docs for styling
- Inspect components in browser dev tools
- Test changes with `npm run dev`

## 🎯 Next Steps

1. ✅ Extract and install (`npm install`)
2. ✅ Run locally (`npm run dev`)
3. ✅ Update `data/index.ts` with your information
4. ✅ Update component text (Hero, Footer)
5. ✅ Add your project images to `/public/`
6. ✅ Customize colors in `tailwind.config.ts`
7. ✅ Test all links and images
8. ✅ Deploy to Vercel, Netlify, or your hosting

## 📄 Deployment

**Deploy to Vercel** (Easiest - recommended for Next.js):
1. Push code to GitHub
2. Visit vercel.com and connect your GitHub
3. Select this repository
4. Click Deploy - done!

**Deploy to Netlify**:
1. Build: `npm run build`
2. Push to GitHub
3. Connect on Netlify
4. Set build command to `npm run build`
5. Set publish directory to `.next`

## 📝 Notes

- This portfolio is built for **backend developers**
- Remove/modify sections as needed for your experience
- Testimonials section was removed as you requested
- Keep images optimized for web (compress before adding)
- Test on mobile devices before deploying
- Update social links regularly

---

**Built with ❤️ for Varun Vashisth**

Built with Next.js, Three.js, Framer Motion, and Tailwind CSS.
