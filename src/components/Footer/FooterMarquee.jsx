import { motion } from "framer-motion";

function FooterMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        <span className="text-[280px] font-bold mr-20">WOLFGANG</span>
        <span className="text-[280px] font-bold mr-20">WOLFGANG</span>
        <span className="text-[280px] font-bold mr-20">WOLFGANG</span>
        <span className="text-[280px] font-bold mr-20">WOLFGANG</span>
      </motion.div>
    </div>
  );
}

export default FooterMarquee;
