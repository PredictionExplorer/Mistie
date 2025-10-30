# Quick Start Guide - Mistie Artist Portfolio

## 🚀 Getting Started (Fast Track)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Your Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Key Files to Customize

### Update Artwork
- **File**: `data/artworks.ts`
- Replace placeholder images with actual artwork
- Update titles, descriptions, prices, and dimensions

### Update Artist Information
- **File**: `app/about/page.tsx`
- Edit biography, artist statement, exhibitions
- Replace portrait image

### Update Contact Information
- **Files**: 
  - `app/contact/page.tsx` (main contact page)
  - `components/Footer.tsx` (footer contact info)
- Update email, social media links, studio location

### Connect Contact Form
The contact form currently logs to console. To connect it to a real email service:

1. Install a service like [Resend](https://resend.com) or [SendGrid](https://sendgrid.com)
2. Create an API route at `app/api/contact/route.ts`
3. Update the form submission handler in `app/contact/page.tsx`

Example with Resend:
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();
  
  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: 'hello@mistie.art',
    subject: `Contact Form: ${subject}`,
    html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
  });
  
  return NextResponse.json({ success: true });
}
```

## 🎨 Design Customization

### Colors
Edit `app/globals.css` to change the color palette:
```css
:root {
  --background: #ffffff;      /* Main background */
  --foreground: #0a0a0a;      /* Main text color */
  --accent: #1a1a1a;          /* Accent color */
  --muted: #737373;           /* Muted text */
  --border: #e5e5e5;          /* Border color */
}
```

### Typography
Change fonts in `app/layout.tsx`:
- Currently using **Playfair Display** (serif) and **Geist** (sans-serif)
- Browse [Google Fonts](https://fonts.google.com/) for alternatives

## 📦 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Environment Variables
If you add any API keys (email service, analytics, etc.), add them in your Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add your keys (never commit them to git!)

## ✨ What's Included

✅ Homepage with hero and featured artwork  
✅ Full gallery page with all artworks  
✅ Individual artwork detail pages  
✅ About page with artist bio  
✅ Contact form  
✅ Responsive design for all devices  
✅ SEO optimization  
✅ Smooth animations  
✅ Loading states  
✅ 404 page  

## 🔧 Common Tasks

### Add a New Artwork
1. Open `data/artworks.ts`
2. Add a new object to the `artworks` array
3. Make sure to include a unique `id` and `slug`

### Change Navigation Items
Edit `components/Navigation.tsx` and update the `navItems` array

### Update Social Links
Edit `components/Footer.tsx` to update social media links

### Add Google Analytics
1. Install next/script
2. Add tracking code to `app/layout.tsx`

## 🎯 Production Checklist

Before launching:
- [ ] Replace all placeholder images with real artwork
- [ ] Update all text content (bio, descriptions, etc.)
- [ ] Update contact information
- [ ] Connect contact form to email service
- [ ] Update social media links
- [ ] Add real domain in `app/sitemap.ts` and `app/robots.ts`
- [ ] Test on mobile devices
- [ ] Add favicon/app icons to `/public` folder
- [ ] Set up custom domain
- [ ] Test contact form
- [ ] Add analytics (optional)

## 🆘 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

**Built with ❤️ using Next.js 16, TypeScript, Tailwind CSS, and Framer Motion**

