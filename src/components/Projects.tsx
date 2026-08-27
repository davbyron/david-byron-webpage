import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-5">
      <h2 className="font-archivo-black text-5xl text-black">PRO<wbr />JECTS</h2>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-orange uppercase font-dosis text-2xl">Web Development</h3>
        <p className="flex flex-col gap-1 sm:block">
          <span className="font-bold">davidbyron.info</span>
          <span className="hidden sm:inline-block">&nbsp;-&nbsp;</span>
          <span>Custom-built personal website for myself. (<Link className="text-orange underline" href="#">you are here</Link>)</span>
        </p>
        <p className="flex flex-col gap-1 sm:block">
          <span className="font-bold">andreschwab.com</span>
          <span className="hidden sm:inline-block">&nbsp;-&nbsp;</span>
          <span>Custom-built personal website for Andre Schwab. (<Link className="text-orange underline" aria-label="Link to Andres Schwab's website" href="https://www.andreschwab.com/">link</Link>)</span>
        </p>
        <p className="flex flex-col gap-1 sm:block">
          <span className="font-bold">studynorthernpomo.com</span>
          <span className="hidden sm:inline-block">&nbsp;-&nbsp;</span>
          <span>
            Learn Northern Pomo! This site was my first major independent web development project. It was contracted
            by Cathy O'Connor at Boston University and the Pinoleville Pomo Nation. Created from 2021-2022, it runs on Python
            and Flask and is no longer maintained, but very much still in use. (<Link className="text-orange underline" aria-label="Link to Study Northern Pomo website" href="https://www.studynorthernpomo.com/">link</Link>)</span>
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-orange uppercase font-dosis text-2xl">Academics</h3>
        <p className="flex flex-col gap-1 sm:block">
          <span className="font-bold">Extraction from Conjuncts in Khoekhoe: An Argument for Cyclic Linearization</span>
          <span className="hidden sm:inline-block">&nbsp;-&nbsp;</span>
          <span>
            In my Master's thesis, I tackle a violation of the otherwise highly robust Coordinate Structure Constraint,
            so-called “SLF-coordination”, that has yet to be fully understood. I argue that the cyclic
            linearization approach to the locality of movement makes it possible to account for this
            puzzling phenomenon as it manifests in the Khoisan language Khoekhoe. (<Link className="text-orange underline" aria-label="Link to Master's thesis" href="/thesis.pdf">link</Link>)
          </span>
        </p>
      </div>
    </section>
  );
}
