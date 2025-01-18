import { GoArrowDown } from "react-icons/go";

export function NextSectionArrow(props: { className?: string }) {
  const { className } = props;

  return <GoArrowDown className={`text-8xl text-light w-full ${className}`} />;
}
