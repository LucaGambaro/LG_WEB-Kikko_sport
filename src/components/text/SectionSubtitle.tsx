export default function SectionSubtitle(props: { title: string }) {
  const { title } = props;
  return (
    <h3 className="font-archivioBlack text-accent1 uppercase text-3xl">{title}</h3>
  );
}
