import { NextSectionArrow } from "components/ui/NextSectionArrow";
import { motion } from "framer-motion";

export default function SecondSection(props: {
  scrollRef: React.RefObject<null>;
}) {
  const { scrollRef } = props;

  return (
    <motion.section
      ref={scrollRef}
      className="sm:snap-start z-0 relative h-full min-h-svh pb-14"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
              absolute top-0 left-0 w-full 
              h-full
              bg-runner bg-cover bg-center bg-no-repeat bg-fixed opacity-30 blur-lg"
      />

      {/* TITLE */}
      <h1
        className={`
              font-archivioBlack tracking-widest uppercase leading-none text-[19vw] sm:text-[18vh] text-light break-words
              text-left
              `}
      >
        Kikko sport, il punto di riferimento per articoli sportivi
      </h1>

      <motion.div>
        <NextSectionArrow className="mt-32" />
      </motion.div>
    </motion.section>
  );
}
