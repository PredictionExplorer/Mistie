"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border/30" style={{ paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="mx-auto text-center px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="decorative-line mb-10" />
              <h1 className="font-serif mb-10 lg:mb-12 px-4">
                About Mistie
              </h1>
              <p className="text-lg md:text-xl lg:text-[1.4rem] text-muted mx-auto leading-[1.7] font-light px-4" style={{ maxWidth: 'var(--max-width-text)' }}>
                Contemporary abstract artist pushing the boundaries of form and emotion
              </p>
            </motion.div>
          </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-5xl)' }}>
          <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-content)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24" style={{ marginBottom: 'var(--space-5xl)' }}>
            {/* Portrait */}
            <motion.div {...fadeInUp} className="lg:col-span-2">
              <div className="relative aspect-[3/4] bg-neutral-100">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
                  alt="Mistie - Abstract Artist"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-3 space-y-8 lg:space-y-10"
            >
              <p className="text-lg md:text-xl lg:text-[1.4rem] text-foreground leading-[1.75] font-light">
                Mistie is a contemporary abstract artist whose work explores the
                intersection of emotion, form, and the ineffable spaces between. Based
                in New York, her practice spans two decades of dedicated exploration
                into the language of abstraction.
              </p>
              <p className="text-base md:text-lg text-muted leading-[1.8] font-light">
                Her canvases are meditations on light, shadow, and the subtle gradations
                that exist within seemingly monochromatic palettes. Each piece invites
                the viewer into a contemplative dialogue, offering space for personal
                interpretation and emotional resonance.
              </p>
              <p className="text-base md:text-lg text-muted leading-[1.8] font-light">
                Drawing inspiration from Japanese aesthetics, minimalist philosophy, and
                the raw beauty of natural phenomena, Mistie's work transcends cultural
                boundaries while maintaining an intimate, personal quality that speaks to
                universal human experiences.
              </p>
            </motion.div>
          </div>

          {/* Artist Statement */}
          <motion.div
            {...fadeInUp}
            className="text-center section-divider"
            style={{ paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-5xl)', maxWidth: 'var(--max-width-content)', margin: '0 auto' }}
          >
            <div className="decorative-line mb-10" />
            <h2 className="font-serif mb-16 lg:mb-20 px-4">
              Artist Statement
            </h2>
            <div className="space-y-10 lg:space-y-12 mx-auto px-4" style={{ maxWidth: 'var(--max-width-text)' }}>
              <p className="text-lg md:text-xl lg:text-[1.4rem] leading-[1.75] text-muted font-light italic">
                "My work exists in the liminal spaces—between darkness and light, chaos
                and order, the known and the unknowable. I am drawn to the power of
                restraint, finding that the most profound expressions often emerge from
                the most limited means."
              </p>
              <p className="text-lg md:text-xl lg:text-[1.4rem] leading-[1.75] text-muted font-light italic">
                "Through layers of paint, gesture, and mark-making, I seek to create
                visual poems that resonate on an emotional rather than intellectual
                level. Each piece is an invitation to pause, to breathe, to simply be
                present with what is before you."
              </p>
              <p className="text-lg md:text-xl lg:text-[1.4rem] leading-[1.75] text-muted font-light italic">
                "In our increasingly noisy world, I believe in the radical power of
                quietness, the strength found in subtlety, and the profound beauty that
                exists in the spaces we typically overlook."
              </p>
            </div>
          </motion.div>

          {/* Exhibitions & Recognition */}
          <motion.div
            {...fadeInUp}
            className="section-divider"
            style={{ paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-4xl)' }}
          >
            <div className="decorative-line mb-10" />
            <h2 className="font-serif mb-20 lg:mb-24 text-center px-4">
              Selected Exhibitions & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-24 gap-y-16">
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-muted mb-8 font-semibold">
                  Solo Exhibitions
                </h3>
                <ul className="space-y-5">
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2024</span> — "Threshold," Gagosian
                    Gallery, New York
                  </li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2023</span> — "Silent Dialogues,"
                    White Cube, London
                  </li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2022</span> — "Monochrome Dreams,"
                    Pace Gallery, Hong Kong
                  </li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2021</span> — "Between Spaces," David
                    Zwirner, New York
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-muted mb-8 font-semibold">
                  Group Exhibitions
                </h3>
                <ul className="space-y-5">
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2024</span> — Art Basel Miami Beach
                  </li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2023</span> — Frieze London
                  </li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2023</span> — Whitney Biennial, New
                    York
                  </li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2022</span> — Venice Biennale
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-muted mb-8 font-semibold">
                  Collections
                </h3>
                <ul className="space-y-5">
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">Museum of Modern Art, New York</li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">Tate Modern, London</li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">Centre Pompidou, Paris</li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    Guggenheim Museum, New York
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-muted mb-8 font-semibold">
                  Recognition
                </h3>
                <ul className="space-y-5">
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2024</span> — Guggenheim Fellowship
                  </li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2022</span> — Turner Prize Nominee
                  </li>
                  <li className="text-foreground text-base md:text-lg font-light leading-relaxed">
                    <span className="font-medium">2021</span> — Joan Mitchell
                    Foundation Grant
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeInUp}
            className="text-center section-divider"
            style={{ paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-4xl)' }}
          >
            <div className="decorative-line mb-10" />
            <h2 className="font-serif mb-12 lg:mb-16 px-4">
              View Available Works
            </h2>
            <p className="text-muted text-lg md:text-xl lg:text-[1.35rem] mb-16 lg:mb-20 mx-auto leading-[1.7] font-light px-4" style={{ maxWidth: 'var(--max-width-text)' }}>
              Explore Mistie's current collection of abstract paintings available for
              acquisition
            </p>
            <Link
              href="/gallery"
              className="inline-block px-14 py-5 accent-bg text-white rounded-full font-medium text-[15px] tracking-wide hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              Visit Gallery
            </Link>
          </motion.div>
          </div>
      </section>
    </div>
  );
}

