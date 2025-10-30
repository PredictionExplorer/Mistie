# Netlify Deployment Guide

## Prerequisites
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- A Netlify account (sign up at https://netlify.com)

## Deployment Steps via Netlify UI

### 1. Push Your Code to Git
Make sure your latest changes (including `netlify.toml`) are committed and pushed:

```bash
git add netlify.toml
git commit -m "Add Netlify configuration for production deployment"
git push origin main
```

### 2. Deploy on Netlify

1. **Go to Netlify**: Visit https://app.netlify.com
2. **Click "Add new site"** → **"Import an existing project"**
3. **Connect to Git provider**: Choose your Git provider (GitHub/GitLab/Bitbucket)
4. **Authorize Netlify**: Grant Netlify access to your repositories
5. **Select your repository**: Choose the `mistie` repository
6. **Configure build settings** (Netlify will auto-detect these from `netlify.toml`):
   - **Build command**: `npm run build` ✓ (auto-detected)
   - **Publish directory**: `.next` ✓ (auto-detected)
   - **Node version**: 20 ✓ (set in netlify.toml)
7. **Click "Deploy site"**

### 3. Wait for Deployment
- The build will take 2-5 minutes
- You can watch the build logs in real-time
- Once complete, you'll get a live URL (e.g., `your-site-name.netlify.app`)

### 4. Configure Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the instructions to configure DNS

## Production Optimizations Included

The `netlify.toml` configuration ensures:
- ✅ **Production build mode** via `npm run build`
- ✅ **Next.js optimization** using `@netlify/plugin-nextjs`
- ✅ **Server-side rendering** support
- ✅ **Static optimization** for static pages
- ✅ **Image optimization** for Next.js Image component
- ✅ **API routes** support
- ✅ **Incremental Static Regeneration** support

## Continuous Deployment

Once deployed, Netlify will automatically:
- Deploy every commit to your main branch
- Create preview deployments for pull requests
- Invalidate cache and rebuild when needed

## Troubleshooting

### Build Fails?
1. Check the build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Test the build locally: `npm run build`

### Images Not Loading?
- Next.js Image component works automatically with Netlify
- Remote image domains are configured in `next.config.ts`

### Need to Clear Cache?
1. Go to **Site settings** → **Build & deploy**
2. Click **Clear cache and retry deploy**

## Performance Tips

Your site will be production-optimized with:
- Static page pre-rendering
- Automatic code splitting
- Optimized JavaScript bundles
- Image optimization via Netlify CDN
- Edge caching worldwide

Enjoy your blazing-fast deployment! 🚀

