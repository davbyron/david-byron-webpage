import { Database } from "@/types";

export interface PopupImageProps {
  image: Database["public"]["Tables"]["Gallery"]["Row"];
  imageUrlBase: string;
}

export interface SlideshowProps {
  images: Database["public"]["Tables"]["Gallery"]["Row"][];
  imageUrlBase: string;
}