# Deployment Guide - Mistie Artist Portfolio

## ✅ Pre-Deployment Checklist

### Content Updates
- [ ] Replace placeholder artwork images with real artwork
- [ ] Update artwork titles, descriptions, and details in `data/artworks.ts`
- [ ] Update artist biography in `app/about/page.tsx`
- [ ] Replace artist portrait image in about page
- [ ] Update contact information (email, studio address)
- [ ] Update social media links in `components/Footer.tsx`
- [ ] Review and update gallery representation info

### Technical Setup
- [ ] Update site URL in `app/sitemap.ts` (change from `mistie.art` to your domain)
- [ ] Update site URL in `app/robots.ts`
- [ ] Add your domain to `next.config.ts` if using different image hosts
- [ ] Set up contact form email service (see below)
- [ ] Add Google Analytics or analytics service (optional)
- [ ] Test all pages and forms locally
- [ ] Run `npm run build` to verify production build works

### Image Optimization
If using your own images:
1. Place images in `/public` folder
2. Reference them as `/image-name.jpg`
3. Or continue using external URLs (Unsplash, Cloudinary, etc.)

## 🚀 Deploy to Vercel (Recommended)

### Why Vercel?
- Built by Next.js creators - perfect compatibility
- Automatic deployments on git push
- Free SSL certificates
- Global CDN
- Zero configuration needed

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Mistie artist portfolio"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed!)

3. **Add Custom Domain** (Optional)
   - In Vercel dashboard, go to Project Settings → Domains
   - Add your domain (e.g., `mistie.art`)
   - Follow DNS configuration instructions

4. **Environment Variables** (If needed)
   - Go to Project Settings → Environment Variables
   - Add any API keys (email service, analytics, etc.)
   - Never commit API keys to git!

## 🌐 Alternative Deployment Options

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

### AWS Amplify
1. Connect repository
2. Select Next.js framework
3. Deploy automatically

### DigitalOcean App Platform
1. Create new app from GitHub
2. Select Next.js
3. Deploy

### Self-Hosted
Requirements: Node.js 18+, PM2 or similar process manager

```bash
# Build
npm run build

# Start production server
npm start

# Or with PM2
pm2 start npm --name "mistie" -- start
```

## 📧 Connect Contact Form to Email

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Install: `npm install resend`
4. Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: 'hello@mistie.art',
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

5. Update form in `app/contact/page.tsx`:

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }
  } catch (error) {
    console.error('Failed to submit form:', error);
  }
};
```

6. Add `RESEND_API_KEY` to environment variables in Vercel

### Option 2: SendGrid
Similar process with SendGrid API

### Option 3: Email Services (FormSpree, Basin)
These handle the backend for you - just point form to their endpoint

## 📊 Add Analytics (Optional)

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

// In layout's <body>:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `}
</Script>
```

### Plausible (Privacy-friendly alternative)
```typescript
<Script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
/>
```

## 🎨 Custom Domain Setup

### DNS Configuration
When connecting a custom domain, add these records:

**For root domain (mistie.art):**
- Type: A
- Name: @
- Value: Vercel's IP (provided in dashboard)

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

## 🔒 SSL Certificate
- Automatic with Vercel, Netlify
- Free via Let's Encrypt for self-hosted

## 🧪 Testing Checklist

Before going live, test:
- [ ] Homepage loads correctly
- [ ] Gallery shows all artwork
- [ ] Individual artwork pages work
- [ ] About page displays properly
- [ ] Contact form submits successfully
- [ ] All navigation links work
- [ ] Mobile responsive on all devices
- [ ] Images load correctly
- [ ] No console errors
- [ ] 404 page works
- [ ] Social media links work

## 📱 Mobile Testing
Test on:
- iPhone (Safari)
- Android (Chrome)
- iPad/Tablet
- Different screen sizes

## ⚡ Performance Optimization

Already implemented:
- ✅ Next.js Image optimization
- ✅ Static page generation
- ✅ Minimal JavaScript
- ✅ Optimized fonts
- ✅ CSS optimization

Optional improvements:
- Add image compression before upload
- Enable Vercel's Image Optimization
- Use WebP format for images

## 🐛 Common Issues

### Images not loading
- Check `next.config.ts` has correct image domains
- Verify image URLs are accessible
- Check browser console for errors

### Form not working
- Verify API route is created
- Check environment variables are set
- Look for CORS issues

### Build failures
- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all imports are correct

## 📞 Support Resources

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Deploy Discord: Join Next.js Discord for help

## 🎉 Post-Launch

After launching:
1. Submit sitemap to Google Search Console
2. Set up uptime monitoring
3. Monitor analytics
4. Backup your code regularly
5. Keep dependencies updated

---

**Ready to launch! 🚀**

Your website is production-ready and optimized for performance. Just customize the content and deploy!

