import { NextSectionArrow } from "components/ui/NextSectionArrow";
import * as motion from "motion/react-client";

export default function TitleSection(props: {
  scrollRef: React.RefObject<null>;
}) {
  const { scrollRef } = props;

  return (
    <motion.section
      ref={scrollRef}
      className="snap-start h-svh bg-bg1 min-h-full flex flex-col justify-center"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
            absolute top-0 left-0 w-full
            min-h-full
            bg-paragliding bg-cover bg-center bg-no-repeat bg-fixed opacity-10"
      />

      <div className="h-full grid grid-rows-4 grid-cols-1 mb-16">
        <div className="row-span-3 flex flex-col justify-center text-center gap-8">
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
          <h3
            className="
            font-archivioBlack tracking-widest text-accent1 uppercase text-3xl
            text-center
            "
          >
            Equipaggiati per Vincere
          </h3>
        </div>

        <div className="h-full flex items-end">
          <NextSectionArrow />
        </div>
      </div>
    </motion.section>
  );
}
