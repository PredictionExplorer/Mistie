"use client";

import { motion } from "framer-motion";
import { artworks } from "@/data/artworks";
import ArtworkCard from "@/components/ArtworkCard";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <div className="decorative-line mb-10" />
              <h1 className="font-serif mb-10 px-4">
                Gallery
              </h1>
              <p className="text-lg md:text-xl lg:text-[1.4rem] text-muted mx-auto leading-[1.7] font-light px-4" style={{ maxWidth: 'var(--max-width-text)' }}>
                A comprehensive collection of abstract works exploring form, emotion, and
                the interplay of light and shadow
              </p>
            </motion.div>
          </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14 xl:gap-16">
              {artworks.map((artwork, index) => (
                <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
              ))}
            </div>

            {/* Inquiry CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="section-divider"
              style={{ marginTop: 'var(--space-5xl)' }}
            >
              <div className="bg-white rounded-3xl card-shadow-hover p-12 lg:p-20 mx-auto" style={{ maxWidth: 'var(--max-width-content)' }}>
                <div className="decorative-line mb-10" />
                <h2 className="font-serif mb-10 px-4">
                  Acquire a Piece
                </h2>
                <p className="text-muted text-lg md:text-xl lg:text-[1.35rem] mb-12 leading-[1.7] font-light mx-auto px-4" style={{ maxWidth: 'var(--max-width-text)' }}>
                  All works are available for acquisition. Contact us for pricing,
                  additional information, or to schedule a private viewing.
                </p>
                <a
                  href="/contact"
                  className="px-14 py-5 accent-bg text-white rounded-full font-medium text-[15px] tracking-wide hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 inline-block"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
      </section>
    </div>
  );
}

