import { motion } from "framer-motion";

export default function Subscribe() {
  return (
    <motion.div
      className="container my-5 text-center h-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-success fw-bold">SUBSCRIBE</p>
      <h3 className="fw-bold">
        Subscribe To Get The Latest <br /> News About Us
      </h3>
      <p className="text-muted">
        Please drop your email below to get daily updates about what we do
      </p>

      {/* Input Box Animation */}
      <motion.div
        className="d-flex justify-content-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="input-group w-50 shadow-sm">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email Address"
            aria-label="Email"
          />
          <button className="btn btn-warning text-white fw-bold">
            Subscribe
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
