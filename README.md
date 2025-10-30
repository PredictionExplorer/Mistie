# Mistie - Contemporary Abstract Artist Portfolio

A luxurious, high-end portfolio website for abstract artist Mistie, built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Elegant Design**: Minimalist monochrome aesthetic with dramatic spacing and elegant typography
- **Responsive**: Fully responsive design optimized for all screen sizes
- **Smooth Animations**: Beautiful page transitions and scroll animations using Framer Motion
- **Gallery System**: Dynamic gallery with individual artwork detail pages
- **Contact Form**: Fully functional contact form with validation
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Fast Performance**: Built with Next.js 16 for optimal performance

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts (Playfair Display & Geist)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd mistie
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
mistie/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── gallery/             # Gallery pages
│   │   └── [slug]/          # Individual artwork pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer component
│   └── ArtworkCard.tsx      # Artwork card component
├── data/                    # Mock data
│   └── artworks.ts          # Artwork data
├── types/                   # TypeScript types
│   └── artwork.ts           # Artwork type definitions
└── public/                  # Static assets
\`\`\`

## Customization

### Updating Artwork

Edit the artwork data in `data/artworks.ts`. Each artwork object should include:

- `id`: Unique identifier
- `slug`: URL-friendly slug
- `title`: Artwork title
- `year`: Creation year
- `medium`: Medium used
- `dimensions`: Width, height, and unit
- `price`: Price information
- `description`: Detailed description
- `imageUrl`: Image URL
- `featured`: Whether to show on homepage
- `available`: Availability status

### Updating Content

- **Homepage**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Contact Info**: Edit `app/contact/page.tsx` and `components/Footer.tsx`
- **Navigation**: Edit `components/Navigation.tsx`

### Design Customization

The design system is configured in `app/globals.css`. You can adjust:

- Color palette (currently monochrome black/white/grays)
- Typography (Playfair Display for headings, Geist for body)
- Spacing and layout
- Animation durations

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build for production:

\`\`\`bash
npm run build
npm start
\`\`\`

The static files will be generated in the `.next` directory.

## Features to Add

Here are some suggested enhancements:

- [ ] Connect contact form to email service (SendGrid, Mailgun, etc.)
- [ ] Add CMS integration (Sanity, Contentful) for easy content management
- [ ] Implement image lightbox for full-screen viewing
- [ ] Add filtering and search to gallery
- [ ] Integrate e-commerce (Stripe, Shopify) for artwork sales
- [ ] Add newsletter signup
- [ ] Implement blog/news section
- [ ] Add loading skeleton states
- [ ] Implement analytics (Google Analytics, Plausible)
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)

## Performance

This site is optimized for performance:

- Next.js Image optimization for lazy loading and responsive images
- Static generation where possible
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind
- Optimized fonts with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 Mistie. All rights reserved.

## Support

For questions or support, contact hello@mistie.art
