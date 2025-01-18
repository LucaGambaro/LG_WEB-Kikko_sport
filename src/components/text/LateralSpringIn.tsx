import { motion } from "framer-motion";
import { JSX } from "react";

const LateralSpringIn = (props: { children: JSX.Element }) => {
  const { children } = props;

  return (
    <motion.div
      initial={{ x: "-30vh" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default LateralSpringIn;
