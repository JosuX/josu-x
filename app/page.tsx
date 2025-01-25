"use client";

import Publications from "@/components/Publications";
import { lazy, memo, Suspense } from "react";

const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));

const Page = memo(() => {
  return (
    <main>
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading Experience...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading Certifications...</div>}>
        <Certifications />
      </Suspense>
      {/* <Suspense fallback={<div>Loading Projects...</div>}>
        <Projects />
      </Suspense> */}
      <Suspense fallback={<div>Loading Publications...</div>}>
        <Publications />
      </Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
    </main>
  );
});

export default Page;
