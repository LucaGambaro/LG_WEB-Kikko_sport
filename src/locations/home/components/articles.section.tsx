import SectionSubtitle from "components/text/SectionSubtitle";
import SectionTitle from "components/text/SectionTitle";
import * as motion from "motion/react-client";

export default function ArticlesSection(props: {
  scrollRef: React.RefObject<null>;
}) {
  const { scrollRef } = props;

  return (
    <motion.section
      ref={scrollRef}
      className="sm:snap-start h-svh min-h-full relative p-32"
    >
      <SectionTitle title="Articoli" />
      <SectionSubtitle title="Made in italy" />
      <p>Da Kikko sport puoi scegliere tra una vasta quantità di prodotti, per ogni sport.Puoi trovare articoli per: boxe, running, palestra, nuoto, moto, tennis, etc..Tutti i nostri prodotti sono ben selezionati e prodotti interamente in italia.</p>
    </motion.section>
  );
}
