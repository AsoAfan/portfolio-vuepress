# Aso A. Sdiq - Developer Portfolio

A modern, responsive developer portfolio built with VuePress 2, featuring a clean dashboard-style interface with custom Vue components and Tailwind CSS styling.

## 🚀 Features

- **Custom Vue Components**: Reusable components for projects, tech stack, and contact sections
- **SEO Optimized**: Built-in SEO plugin and sitemap generation
- **Fast Performance**: Vite bundler for optimal build times and hot reload
- **Project Showcase**: Detailed project pages with technical specifications
- **Tech Stack Display**: Interactive technology showcase

## 📁 Project Structure

```
my-vuepress-site/
├── docs/                          # Main documentation content
│   ├── .vuepress/                 # VuePress configuration
│   │   ├── components/           # Custom Vue components
│   │   ├── data/                 # JSON data files
│   │   ├── styles/               # Custom styles
│   │   └── config.js             # VuePress configuration
│   ├── projects/                 # Project showcase pages
│   │   ├── index.md
│   │   ├── insightboard.md
│   │   └── taskflow.md
│   ├── about.md                  # About page
│   ├── contact.md                # Contact page
│   ├── get-started.md            # Getting started guide
│   ├── index.md                  # Homepage
│   └── stack.md                  # Tech stack page
├── domains/                      # Domain configuration
├── package.json                  # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
└── postcss.config.js            # PostCSS configuration
```

## 🛠️ Tech Stack

- **Framework**: VuePress 2 (RC)
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite
- **Language**: Vue 3, JavaScript
- **Plugins**: SEO, Sitemap
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v9.15.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AsoAfan/portfolio-vuepress.git
cd portfolio-vuepress
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run docs:dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
pnpm run docs:build
```

The built files will be in `docs/.vuepress/dist/`

### Clean Development Server

If you encounter caching issues:

```bash
pnpm run docs:clean-dev
```

## 📝 Available Scripts

- `docs:dev` - Start development server
- `docs:build` - Build for production
- `docs:clean-dev` - Start dev server with clean cache
- `docs:update-package` - Update VuePress package

## 🎨 Customization

### Adding New Projects

1. Add project data to `docs/.vuepress/data/projects.json`
2. Create a new markdown file in `docs/projects/`
3. Use the `<ProjectDetail slug="project-name" />` component

### Modifying Styles

- Global styles: `docs/.vuepress/styles/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component styles: Individual Vue component files

### Updating Content

- Homepage: `docs/index.md`
- About: `docs/about.md`
- Contact: `docs/contact.md`
- Tech Stack: `docs/stack.md`

## 🔧 Configuration

### VuePress Config

The main configuration is in `docs/.vuepress/config.js`:

- Site metadata (title, description, base URL)
- Theme configuration (sidebar, navbar)
- Plugin setup (SEO, sitemap)
- Build configuration

### Tailwind Config

Custom Tailwind configuration includes:

- Custom color palette (zinc theme)
- Typography plugin
- Custom spacing and animations
- Dark mode support

## 📦 Dependencies

### Core Dependencies
- `vuepress`: 2.0.0-rc.20
- `vue`: ^3.5.13
- `@vuepress/theme-default`: 2.0.0-rc.88

### Styling
- `tailwindcss`: ^4.1.14
- `@tailwindcss/typography`: ^0.5.19
- `sass-embedded`: ^1.86.0

### Plugins
- `@vuepress/plugin-seo`: 2.0.0-rc.3
- `@vuepress/plugin-sitemap`: 2.0.0-rc.3

## 🌐 Deployment

The site is configured with a base path `/portfolio-vuepress/` for GitHub Pages deployment.

### GitHub Pages

1. Build the project: `pnpm run docs:build`
2. Push the `docs/.vuepress/dist/` folder to the `gh-pages` branch
3. Configure GitHub Pages to serve from the `gh-pages` branch

### Other Platforms

The built files in `docs/.vuepress/dist/` can be deployed to any static hosting service like:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or collaboration opportunities, please reach out through the contact page on the portfolio site.

---

Made with ❤️ using VuePress
