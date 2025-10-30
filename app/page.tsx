"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedArtworks } from "@/data/artworks";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function HomePage() {
  const featuredArtworks = getFeaturedArtworks();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center py-24 lg:py-32 overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full accent-bg opacity-[0.02] rounded-bl-[120px]" />
        
        <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-wide)' }}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="space-y-10 lg:space-y-12"
            >
              <div>
                <div className="decorative-line-left mb-8" />
                <p className="text-accent uppercase tracking-[0.3em] text-xs font-medium mb-6 opacity-90">
                  Contemporary Abstract Artist
                </p>
              </div>
              
              <h1 className="font-serif text-foreground leading-[0.95] tracking-tighter">
                Mistie
              </h1>
              
              <div className="space-y-6">
                <p className="text-xl md:text-2xl lg:text-[1.65rem] text-foreground leading-[1.65] font-light" style={{ maxWidth: 'var(--max-width-text)' }}>
                  Exploring the boundaries of form, emotion, and the delicate spaces between consciousness and abstraction through contemporary painting.
                </p>
                
                {/* Curator's Note */}
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted italic font-light leading-relaxed">
                    "Mistie's work transcends traditional boundaries, inviting viewers into a contemplative dialogue with abstraction."
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link
                  href="/gallery"
                  className="group px-12 py-5 accent-bg text-white text-center rounded-full font-medium text-[15px] tracking-wide hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                >
                  View Collection
                </Link>
                <Link
                  href="/about"
                  className="px-12 py-5 bg-white text-center text-foreground rounded-full font-medium text-[15px] tracking-wide card-shadow hover:card-shadow-hover hover:scale-[1.03] transition-all duration-300"
                >
                  About Mistie
                </Link>
              </div>
            </motion.div>

            {/* Right: Featured Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:pl-8"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden card-shadow-hover">
                <Image
                  src={featuredArtworks[0]?.imageUrl || "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=1500&fit=crop"}
                  alt="Featured Artwork"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-80 mb-2">Featured Work</p>
                  <p className="text-2xl font-serif font-light mb-1">{featuredArtworks[0]?.title}</p>
                  <p className="text-sm opacity-75">{featuredArtworks[0]?.year} · {featuredArtworks[0]?.medium}</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 accent-bg opacity-10 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 accent-bg opacity-5 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="section-divider" style={{ paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-5xl)' }}>
          <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20 lg:mb-28"
            >
              <div className="decorative-line mb-10" />
              <h2 className="font-serif mb-10 px-4">
                Featured Collection
              </h2>
              <p className="text-muted text-lg md:text-xl lg:text-[1.4rem] mx-auto leading-[1.7] font-light px-4" style={{ maxWidth: 'var(--max-width-text)' }}>
                Discover a curated selection of contemporary abstract works that embody the essence of artistic exploration
              </p>
            </motion.div>

            {/* Modular grid with varied heights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14 xl:gap-16">
              {featuredArtworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={index === 1 ? "lg:mt-12" : ""}
                >
                  <Link
                    href={`/gallery/${artwork.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-2xl card-shadow group-hover:card-shadow-hover transition-all duration-500">
                      <Image
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-sm font-medium tracking-wide">View Details →</p>
                      </div>
                    </div>
                    <div className="space-y-3 px-1">
                      <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-300 font-light">
                        {artwork.title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-muted tracking-wide font-light">
                        {artwork.year} · {artwork.medium}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-24 lg:mt-32 text-center"
            >
              <Link
                href="/gallery"
                className="px-14 py-5 accent-bg text-white rounded-full font-medium text-[15px] tracking-wide hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 inline-block"
              >
                View Full Gallery
              </Link>
            </motion.div>
          </div>
      </section>

      {/* About Preview Section */}
      <section className="section-divider" style={{ paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-5xl)' }}>
          <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-content)' }}>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden card-shadow-hover">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop"
                    alt="Mistie - Artist"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="space-y-10 lg:space-y-12"
              >
                <div>
                  <div className="decorative-line-left mb-8" />
                  <h2 className="font-serif mb-8 leading-tight">About Mistie</h2>
                </div>
                
                <p className="text-lg md:text-xl lg:text-[1.4rem] text-foreground leading-[1.75] font-light" style={{ maxWidth: 'var(--max-width-text)' }}>
                  A contemporary abstract artist whose work explores the intersection of emotion, form, and the spaces between. With exhibitions in prestigious galleries worldwide, Mistie's pieces invite contemplation and personal interpretation.
                </p>
                
                <p className="text-base md:text-lg text-muted leading-[1.8] font-light" style={{ maxWidth: 'var(--max-width-text)' }}>
                  Each canvas is a meditation on light, shadow, and the subtle gradations that exist within seemingly simple compositions. Drawing inspiration from minimalist philosophy and natural phenomena, the work transcends cultural boundaries.
                </p>
                
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-accent font-medium text-[15px] tracking-wide hover:gap-4 transition-all pt-4 group"
                >
                  <span>Discover More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
      </section>

      {/* Press & Recognition Strip */}
      <section className="py-16 lg:py-20 bg-white/50">
        <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-wide)' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-center text-xs uppercase tracking-[0.3em] text-muted mb-12 font-medium">
              As Featured In
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
              <div className="text-center">
                <p className="font-serif text-lg md:text-xl text-muted/70">Artforum</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-lg md:text-xl text-muted/70">The New Yorker</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-lg md:text-xl text-muted/70">Frieze</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-lg md:text-xl text-muted/70">Hyperallergic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
