export interface Artwork {
  id: string;
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: {
    width: number;
    height: number;
    unit: "cm" | "in";
  };
  price?: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
  available: boolean;
}

export interface ArtworkCollection {
  artworks: Artwork[];
}

