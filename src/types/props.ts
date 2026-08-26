import { Database } from "@/types";

export interface SlideshowProps {
  images: Database["public"]["Tables"]["Gallery"]["Row"][];
  imageUrlBase: string;
}