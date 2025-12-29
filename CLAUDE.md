# Claude Context - Eric Portfolio Website Replication

## Project Overview
Replicating a personal portfolio website showcasing professional experience and projects. This is a modern, animated portfolio site with clean design and smooth interactions.

**Original Repository**: https://github.com/erich2s/eric-portfolio-website.git
**Live Demo**: https://erichuang.top <!-- Unable to open this demo website, either moved or down -->
**Cloned Location**: `/Users/hansjiang/Desktop/projects/personalWeb/eric-portfolio`

---

## Technology Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18.2** - UI library
- **TypeScript 5.3** - Type-safe JavaScript

### Styling & UI
- **TailwindCSS 3.4** - Utility-first CSS framework
- **Shadcn/ui** - Re-usable component library
- **Framer Motion 11** - Animation library
- **Radix UI** - Headless UI components (tooltips, slots)
- **Lucide React** - Icon library
- **FontAwesome** - Additional icons

### Development Tools
- **pnpm 10.6.1** - Package manager (NOT npm/yarn)
- **Prettier** - Code formatter with Tailwind plugin
- **Sharp** - Image optimization

### Utilities
- **class-variance-authority** - CSS class management
- **clsx** & **tailwind-merge** - Conditional class utilities
- **react-use** - React hooks library

---

## Project Structure

```
eric-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── not-found.tsx       # 404 page
│   │   └── favicon.ico         # Site icon
│   │
│   ├── sections/               # Page sections
│   │   ├── hero.tsx            # Hero/landing section
│   │   ├── about.tsx           # About section
│   │   ├── skills.tsx          # Skills showcase
│   │   └── contact.tsx         # Contact information
│   │
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Shadcn UI components
│   │   │   ├── button.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── 3d-card.tsx
│   │   ├── header.tsx          # Navigation header
│   │   ├── back-to-top.tsx     # Scroll to top button
│   │   ├── cool-portrait-card.tsx
│   │   ├── grid-background.tsx # Animated background
│   │   ├── motion-*.tsx        # Framer Motion wrappers
│   │   ├── contact-list.tsx
│   │   └── blur.tsx
│   │
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   │
│   └── assets/
│       └── icons/              # Technology icons
│           ├── git.png
│           ├── docker.png
│           ├── python.png
│           ├── java.png
│           ├── nest-js.png
│           └── ... (more tech icons)
│
├── public/
│   ├── photo.jpeg              # Profile photo
│   └── animoji.mp4             # Animated avatar
│
├── Configuration Files
├── package.json                # Dependencies
├── pnpm-lock.yaml              # Lock file
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js config
├── postcss.config.js           # PostCSS config
├── components.json             # Shadcn/ui config
└── .prettierrc.json            # Prettier config
```

---

## Setup Requirements

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **pnpm** package manager (v10.6.1 or higher)

### Installation Steps
1. Install pnpm if not already installed:
   ```bash
   npm install -g pnpm
   ```

2. Install dependencies:
   ```bash
   cd eric-portfolio
   pnpm install
   ```

3. Run development server:
   ```bash
   pnpm dev
   ```
   Server runs on http://localhost:3000

4. Build for production:
   ```bash
   pnpm build
   pnpm start
   ```

---

## Customization Checklist

### Content to Replace
- [ ] Personal photo in `/public/photo.jpeg`
- [ ] Animated avatar in `/public/animoji.mp4`
- [x] Profile information in `src/sections/hero.tsx`
- [x] About section content in `src/sections/about.tsx`
- [x] Skills/technologies in `src/sections/skills.tsx`
- [x] Contact information in `src/sections/contact.tsx`
- [ ] Project showcases (if implemented in hero/about)
- [x] Social media links (GitHub, LinkedIn, etc.)
- [ ] Resume/CV link
- [x] Site metadata in `src/app/layout.tsx` (title, description, OG tags)
- [ ] Favicon in `src/app/favicon.ico`

### Tech Stack Icons
**ACTION REQUIRED**: Upload missing technology icons to `src/assets/icons/`

The following icons need to be added (currently using Python icon as placeholder):
- **Languages**: C#
- **Web Frameworks**: Django, FastAPI
- **Data Science**: NumPy, Pandas, Matplotlib, SciPy, Scikit-learn
- **ML/AI**: TensorFlow, PyTorch, Hugging Face, OpenCV, YOLOv11
- **Development Tools**: PyCharm, Comet Browser, Cursor, Claude Code
- **Creative Tools**: Unity Engine, Photoshop, Adobe Illustrator, Fusion 360

**Icon Requirements**:
- Format: PNG (preferred) or SVG
- Recommended size: 256x256px or similar square dimensions
- Transparent background preferred
- Save icons in `/src/assets/icons/` directory
- Update imports in `src/sections/skills.tsx` after adding icons

**Where to find icons**:
- [Simple Icons](https://simpleicons.org/) - Brand icons in SVG
- [Icons8](https://icons8.com/) - Various icon styles
- [Flaticon](https://www.flaticon.com/) - Free icon library
- Official brand websites for logo downloads

### Styling Customization
- [ ] Color scheme in `tailwind.config.js`
- [ ] Font choices in `src/app/layout.tsx` or globals.css
- [ ] Animation timings in motion components
- [ ] Component variants and styles

---

## Development Notes

### Key Features to Understand
1. **Framer Motion Animations** - Smooth scroll animations and transitions
2. **Grid Background** - Animated background effect
3. **3D Card Effects** - Interactive card components
4. **Responsive Design** - Mobile-first approach with Tailwind
5. **Type Safety** - Full TypeScript implementation

### Package Manager Note
This project uses **pnpm**, not npm or yarn. Always use:
- `pnpm install` (not npm install)
- `pnpm add <package>` (not npm install <package>)
- `pnpm dev` (not npm run dev)

---

## Current Status

### Completed
- [x] Repository cloned from GitHub
- [x] Project structure analyzed
- [x] Technology stack documented
- [x] CLAUDE.md context file created
- [x] Dependencies installed with pnpm
- [x] Development server verified running on localhost:3000
- [x] Content customization completed:
  - [x] Hero section updated with Hans Jiang's information
  - [x] About section with bio and Chinese name (江哲宇)
  - [x] Skills section updated with relevant tech stack
  - [x] Contact links updated (Email, GitHub, LinkedIn, Instagram)
  - [x] Site metadata and SEO tags updated

### Next Steps
- [ ] **PRIORITY**: Upload missing technology icons to `/src/assets/icons/` (see Tech Stack Icons section)
- [ ] Replace personal photo in `/public/photo.jpeg`
- [ ] Replace animated avatar in `/public/animoji.mp4`
- [ ] Update favicon in `src/app/favicon.ico`
- [ ] Update domain in `src/app/layout.tsx` (currently placeholder: hansjiang.com)
- [ ] Add resume/CV link if needed
- [ ] Test responsive design on different devices
- [ ] Build and deploy to hosting platform

---

## Questions & Decisions

1. **Deployment Platform**: Where will this be deployed? (Vercel, Netlify, custom server?)
2. **Domain**: Will this use a custom domain?
3. **Content**: What projects and experience should be showcased?
4. **Design Changes**: Keep original design or modify colors/layout?
5. **Additional Features**: Contact form backend? Blog? Project details pages?

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Original Portfolio](https://erichuang.top)

---

**Last Updated**: 2025-12-28
**Project Status**: Initial setup phase
