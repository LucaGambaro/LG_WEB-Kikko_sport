import { NextSectionArrow } from "components/ui/NextSectionArrow";
import * as motion from "motion/react-client";

export default function TitleSection(props: {
  scrollRef: React.RefObject<null>;
}) {
  const { scrollRef } = props;

  return (
    <motion.section className="snap-start">
      <div ref={scrollRef} className=" h-svh">
        <div className="bg-bg1 min-h-full flex flex-col justify-center">
          {/* BACKGROUND IMAGE */}
          <div
            className="
            absolute top-0 left-0 w-full
            min-h-full
            bg-paragliding bg-cover bg-center bg-no-repeat bg-fixed opacity-10"
          />

          <div className="h-[90vh]">
            {/* TITLE */}
            <h1
              className={`
              font-archivioBlack tracking-widest uppercase leading-none text-[17vw] text-light 
              text-center
              flex
              `}
            >
              Kikko sport
            </h1>

            {/* SUBTITLE */}
            <h3
              className="
            font-archivioBlack tracking-widest text-accent1 mt-16 uppercase text-3xl
            text-center
            "
            >
              Equipaggiati per Vincere
            </h3>
          </div>

          <NextSectionArrow />
        </div>
      </div>
    </motion.section>
  );
}
