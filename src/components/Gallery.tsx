import { Database } from "@/types";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { Slideshow } from "@/components";

export async function Gallery() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: galleryImages
  }: {
    data: Database["public"]["Tables"]["Gallery"]["Row"][] | null
  } = await supabase
    .from("Gallery")
    .select()
    .order("year", { ascending: true })
    .order("title", { ascending: true });

  const ceramics = galleryImages?.filter((image) => image.bucket === "ceramics");
  const photography = galleryImages?.filter((image) => image.bucket === "photography");

  const ceramicsBaseUrl = supabase.storage.from("ceramics").getPublicUrl("").data.publicUrl;
  const photographyBaseUrl = supabase.storage.from("photography").getPublicUrl("").data.publicUrl;

  return (
    <section id="gallery" className="flex flex-col gap-5">
      <h2 className="font-archivo-black text-5xl text-black">GALLERY</h2>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-orange uppercase font-dosis text-2xl">Ceramics</h3>
          <Slideshow images={ceramics ?? []} imageUrlBase={ceramicsBaseUrl} />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-orange uppercase font-dosis text-2xl">Photography</h3>
          <Slideshow images={photography ?? []} imageUrlBase={photographyBaseUrl} />
        </div>
      </div>
    </section>
  )
}
