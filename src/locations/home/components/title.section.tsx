import { NextSectionArrow } from "components/ui/NextSectionArrow";
import * as motion from "motion/react-client";

export default function TitleSection(props: {
  scrollRef: React.RefObject<null>;
}) {
  const { scrollRef } = props;

  return (
    <motion.section
      ref={scrollRef}
      className="snap-start h-svh bg-bg1 min-h-full flex flex-col justify-center relative z-0"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
            absolute top-0 left-0 w-full
            min-h-full
            bg-paragliding bg-cover bg-center bg-no-repeat bg-fixed opacity-10 -z-10"
      />

      <div className="h-full grid grid-rows-4 grid-cols-1 mb-16">
        <motion.div
          className="row-span-3 flex flex-col justify-center text-center gap-8"
          initial={{ opacity: 0, x: "-30vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring" },
          }}
        >
          {/* TITLE */}
          <h1
            className={`
              font-archivioBlack tracking-widest uppercase leading-none text-7xl sm:text-[15rem] text-light
              `}
          >
            Kikko
            <br />
            sport
          </h1>

          {/* SUBTITLE */}
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
            <h3
              className="
            font-archivioBlack tracking-widest text-accent1 uppercase text-2xl sm:text-4xl
            text-center z-10"
            >
              Equipaggiati per Vincere
            </h3>
          </motion.div>
        </motion.div>

        <motion.div
          className="h-full flex items-end"
          initial={{ opacity: 0, scale: 0, y: "-30vh" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            scale: { type: "spring"  },
          }}
        >
          <NextSectionArrow />
        </motion.div>
      </div>
    </motion.section>
  );
}
