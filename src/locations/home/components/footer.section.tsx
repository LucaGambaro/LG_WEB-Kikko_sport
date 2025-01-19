import { motion } from "framer-motion";

export default function FooterSection(props: {
  scrollRef: React.RefObject<null>;
}) {
  const { scrollRef } = props;

  return (
    <motion.section
      ref={scrollRef}
      className="sm:snap-start z-0 relative h-svh w-full text-center flex flex-col justify-center items-center gap-14"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
              absolute top-0 left-0 w-full 
              h-full
              bg-bike bg-cover bg-center bg-no-repeat bg-fixed -z-10"
      />

      {/* CONTENT */}
      <h2
        className={`
              font-archivioBlack tracking-widest uppercase leading-none text-5xl sm:text-7xl text-accent1 
              relative
              `}
      >
        Siamo qui per te
      </h2>

      <div className="flex flex-col gap-4">
        <p className="text-light text-xl">
          V.G. Mazzini, 2/A, 33080 Cimpello PN
        </p>
        <p className="text-light text-xl">339 355 4160</p>
      </div>
    </motion.section>
  );
}
