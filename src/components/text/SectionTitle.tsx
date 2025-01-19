export default function SectionTitle(props: { title: string }) {
  const { title } = props;
  return <h3 className="font-teko font-bold text-light uppercase text-6xl">{title}</h3>;
}
