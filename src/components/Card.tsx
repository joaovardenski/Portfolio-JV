import { motion, type HTMLMotionProps } from "framer-motion";

type CardProps = HTMLMotionProps<"div">;

const Card = ({ className = "", ...props }: CardProps) => (
  <motion.div className={`bg-white ${className}`} {...props} />
);

export default Card;
