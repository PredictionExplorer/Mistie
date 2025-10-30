import { Artwork } from "@/types/artwork";

export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "ethereal-dawn",
    title: "Ethereal Dawn",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: {
      width: 120,
      height: 150,
      unit: "cm",
    },
    price: "Upon Request",
    description:
      "An exploration of light and movement, Ethereal Dawn captures the liminal space between night and day. Layers of translucent pigment create depth and atmosphere, inviting the viewer into a meditative state.",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=1500&fit=crop",
    featured: true,
    available: true,
  },
  {
    id: "3",
    slug: "silent-conversations",
    title: "Silent Conversations",
    year: 2023,
    medium: "Mixed Media on Canvas",
    dimensions: {
      width: 90,
      height: 120,
      unit: "cm",
    },
    price: "Upon Request",
    description:
      "This piece explores the unspoken dialogues that exist in the spaces between. Textural elements and sweeping gestures create a visual language that transcends words.",
    imageUrl: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1200&h=1600&fit=crop",
    featured: true,
    available: true,
  },
  {
    id: "4",
    slug: "urban-meditation",
    title: "Urban Meditation",
    year: 2023,
    medium: "Acrylic and Charcoal on Canvas",
    dimensions: {
      width: 150,
      height: 100,
      unit: "cm",
    },
    price: "Upon Request",
    description:
      "Finding stillness within chaos, this horizontal composition balances frenetic energy with moments of profound calm. A meditation on modern life and the search for peace.",
    imageUrl: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1600&h=1067&fit=crop",
    available: true,
  },
  {
    id: "5",
    slug: "whispers-in-grey",
    title: "Whispers in Grey",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: {
      width: 80,
      height: 100,
      unit: "cm",
    },
    price: "Upon Request",
    description:
      "Subtle variations in tone create a contemplative atmosphere. This work invites close inspection, revealing hidden depths and delicate gestures within an apparently simple composition.",
    imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=1500&fit=crop",
    available: true,
  },
  {
    id: "6",
    slug: "horizon-line",
    title: "Horizon Line",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: {
      width: 180,
      height: 90,
      unit: "cm",
    },
    price: "Upon Request",
    description:
      "A panoramic exploration of space and division. The interplay between light and dark creates a sense of infinite distance and possibility, evoking landscapes both real and imagined.",
    imageUrl: "https://images.unsplash.com/photo-1551263640-1c007852f616?w=1800&h=900&fit=crop",
    available: true,
  },
  {
    id: "7",
    slug: "nocturne-in-black",
    title: "Nocturne in Black",
    year: 2023,
    medium: "Oil and Graphite on Canvas",
    dimensions: {
      width: 100,
      height: 140,
      unit: "cm",
    },
    price: "Upon Request",
    description:
      "Deep, rich blacks reveal surprising complexity and warmth. This piece challenges preconceptions about darkness, finding beauty and nuance in the deepest shadows.",
    imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&h=1680&fit=crop",
    available: false,
  },
  {
    id: "8",
    slug: "interlude",
    title: "Interlude",
    year: 2024,
    medium: "Mixed Media on Canvas",
    dimensions: {
      width: 90,
      height: 90,
      unit: "cm",
    },
    price: "Upon Request",
    description:
      "A moment of pause and reflection. Gestural marks and careful composition create a sense of suspended time, inviting contemplation and introspection.",
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1200&h=1200&fit=crop",
    available: true,
  },
  {
    id: "9",
    slug: "threshold",
    title: "Threshold",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: {
      width: 120,
      height: 160,
      unit: "cm",
    },
    price: "Upon Request",
    description:
      "Standing at the edge between two states, this piece captures the tension and potential of transition. Bold contrasts and dynamic composition create a powerful visual impact.",
    imageUrl: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=1200&h=1600&fit=crop",
    available: true,
  },
  {
    id: "10",
    slug: "quiet-intensity",
    title: "Quiet Intensity",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: {
      width: 110,
      height: 110,
      unit: "cm",
    },
    price: "Upon Request",
    description:
      "Restrained yet powerful, this work demonstrates that intensity need not be loud. Subtle shifts in value and texture create an atmosphere of concentrated energy.",
    imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1200&h=1200&fit=crop",
    available: true,
  },
];

export const getFeaturedArtworks = (): Artwork[] => {
  return artworks.filter((artwork) => artwork.featured);
};

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.slug === slug);
};

export const getAvailableArtworks = (): Artwork[] => {
  return artworks.filter((artwork) => artwork.available);
};

