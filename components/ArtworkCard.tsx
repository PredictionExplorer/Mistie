"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Artwork } from "@/types/artwork";

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
}

export default function ArtworkCard({ artwork, index = 0 }: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
    >
      <Link href={`/gallery/${artwork.slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl card-shadow group-hover:card-shadow-hover transition-all duration-500 mb-6">
          {/* Determine aspect ratio based on artwork dimensions */}
          <div
            className="relative w-full"
            style={{
              aspectRatio: `${artwork.dimensions.width} / ${artwork.dimensions.height}`,
            }}
          >
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Hover Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <p className="text-sm font-medium tracking-wide">View Details →</p>
          </div>

          {/* Availability Badge */}
          {!artwork.available && (
            <div className="absolute top-5 right-5 bg-foreground text-white px-5 py-2.5 text-xs font-medium rounded-full shadow-lg">
              Sold
            </div>
          )}
        </div>

        <div className="space-y-3 px-1">
          <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-300 font-light">
            {artwork.title}
          </h3>
          <p className="text-sm md:text-[15px] text-muted tracking-wide font-light">
            {artwork.year} · {artwork.medium}
          </p>
          <p className="text-sm md:text-[15px] text-muted tracking-wide font-light">
            {artwork.dimensions.width} × {artwork.dimensions.height}{" "}
            {artwork.dimensions.unit}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

