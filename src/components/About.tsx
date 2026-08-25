"use client";

export function About() {
  return (
    <section id="about" className="flex flex-col gap-5">
      <h2 className="font-archivo-black text-5xl text-black">ABOUT</h2>
      <p>Nice to meet you on the web! I'm David, an Artist and Developer.</p>

      <p>By day I am an Application Developer at <a className="text-orange underline" href="https://www.rutgers.edu/">Rutgers University</a> where I support the Division of Continuing Studies
      by creating and maintaining bespoke web applications ranging from HR hiring systems to department sign-in systems and reporting.</p>

      <p>Before Rutgers, I worked as a Software Engineer at <a className="text-orange underline" href="https://www.lymba.com/">Lymba</a> where I primarily developed web apps integrated
      with NLP tools and knowledge graphs. My day-to-day really varied, but I was often responsible for UI/UX design, building
      and maintaining customer-facing applications, ontology building, creating NLP resources, maintaining RESTful Python APIs,
      client demos, documentation writing, and quality assurance testing.</p>

      <p>In a past life I was an avid linguist focusing primarily on syntactic phenomena in hopes of
      finding the answers to the following questions: (i) what are the fundamental syntactic
      operations provided by the human language faculty?; and (ii) what constraints are they
      subject to, and why? This work culminated in my Master's thesis <cite><a className="text-orange underline" href="./thesis.pdf">Extraction from Conjuncts
      in Khoekhoe: An Argument for Cyclic Linearization</a></cite> advised by Erik Zyman
      at the University of Chicago.</p>

      <p>Outside of work, I spend a lot of time cycling, gardening, playing video games, making art of all kinds, and at drag events.</p>
    </section>
  )
}