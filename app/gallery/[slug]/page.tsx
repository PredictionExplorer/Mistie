"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { artworks, getArtworkBySlug } from "@/data/artworks";

export default function ArtworkDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isZoomed, setIsZoomed] = useState(false);

  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Artwork Not Found</h1>
          <Link href="/gallery" className="text-muted hover:text-foreground">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  // Find previous and next artworks
  const currentIndex = artworks.findIndex((a) => a.slug === slug);
  const previousArtwork = currentIndex > 0 ? artworks[currentIndex - 1] : null;
  const nextArtwork =
    currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Gallery */}
      <div className="px-6 lg:px-8 py-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/gallery"
            className="inline-flex items-center text-sm uppercase tracking-wider text-muted hover:text-foreground transition-colors group"
          >
            <svg
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Gallery
          </Link>
        </div>
      </div>

      {/* Artwork Display */}
      <section className="py-12 md:py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className={`relative bg-neutral-100 overflow-hidden ${
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                style={{
                  aspectRatio: `${artwork.dimensions.width} / ${artwork.dimensions.height}`,
                }}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="text-xs text-muted mt-4 text-center">
                Click image to zoom
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-8">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                  {artwork.title}
                </h1>

                {!artwork.available && (
                  <div className="inline-block bg-foreground text-background px-4 py-2 text-xs uppercase tracking-wider mb-6">
                    Sold
                  </div>
                )}
              </div>

              <div className="space-y-6 mb-12">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted mb-2">
                      Year
                    </p>
                    <p className="text-lg">{artwork.year}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted mb-2">
                      Medium
                    </p>
                    <p className="text-lg">{artwork.medium}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted mb-2">
                      Dimensions
                    </p>
                    <p className="text-lg">
                      {artwork.dimensions.width} × {artwork.dimensions.height}{" "}
                      {artwork.dimensions.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted mb-2">
                      Price
                    </p>
                    <p className="text-lg">{artwork.price}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-lg leading-relaxed text-muted">
                    {artwork.description}
                  </p>
                </div>
              </div>

              {artwork.available && (
                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="inline-block w-full md:w-auto px-10 py-4 border border-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 text-center"
                  >
                    Inquire About This Work
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation to Previous/Next */}
      <section className="py-12 md:py-16 px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {/* Previous */}
            <div>
              {previousArtwork && (
                <Link
                  href={`/gallery/${previousArtwork.slug}`}
                  className="group block"
                >
                  <p className="text-xs uppercase tracking-wider text-muted mb-4">
                    Previous Work
                  </p>
                  <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden mb-3">
                    <Image
                      src={previousArtwork.imageUrl}
                      alt={previousArtwork.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-serif text-xl group-hover:text-muted transition-colors">
                    {previousArtwork.title}
                  </h3>
                </Link>
              )}
            </div>

            {/* Next */}
            <div>
              {nextArtwork && (
                <Link
                  href={`/gallery/${nextArtwork.slug}`}
                  className="group block"
                >
                  <p className="text-xs uppercase tracking-wider text-muted mb-4 text-right">
                    Next Work
                  </p>
                  <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden mb-3">
                    <Image
                      src={nextArtwork.imageUrl}
                      alt={nextArtwork.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-serif text-xl group-hover:text-muted transition-colors text-right">
                    {nextArtwork.title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

