import { motion, useScroll, useTransform } from "framer-motion";

const TitleScaleOnScroll = (props: { text: string; className?: string }) => {
  const { text, className } = props;

  const { scrollYProgress } = useScroll();
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 30]);

  return (
    <motion.h1
      style={{ scale: scaleValue, fontFamily: "Archivo Black" }}
      className={`tracking-widest uppercase text-8xl bold relative ${className}`}
    >
      {text}
    </motion.h1>
  );
};

export default TitleScaleOnScroll;
