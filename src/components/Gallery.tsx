import { Slideshow } from "@/components";
import imagesJson from "../../public/gallery/images.json";

export function Gallery() {
  return (
    <section id="gallery" className="flex flex-col gap-5">
      <h2 className="font-archivo-black text-5xl text-black">GALLERY</h2>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-orange uppercase font-dosis text-2xl">Ceramics</h3>
          <Slideshow images={imagesJson["ceramics"]} category="ceramics" />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-orange uppercase font-dosis text-2xl">Photography</h3>
          <Slideshow images={imagesJson["photography"]} category="photography" />
        </div>
      </div>
    </section>
  )
}