import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div 
      className="preloader d-flex align-items-center justify-content-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </motion.div>
  );
}
