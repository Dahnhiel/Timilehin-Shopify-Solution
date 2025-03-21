import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faList, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Wwd() {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and lower
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate into place
  };

  return (
    <section className="bg-white py-5">
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted">WHAT WE DO</p>
          <h3>
            We Provide the <span className="text-warning">Perfect Solution</span> to your
            business growth
          </h3>
        </motion.div>

        {/* Services Grid */}
        <div className="row g-4">
          {/** Service Cards */}
          {[
            { icon: faMap, title: "Explore", desc: "Agile, waterfall, hybrid or otherwise, we research your business to find the best transformation approach." },
            { icon: faPencilRuler, title: "Plan, Create & Execute", desc: "Using an agile approach, we map out strategies to execute your business transformation." },
            { icon: faMap, title: "Optimization", desc: "Using analytics, we continuously refine strategies for maximum growth." },
            { icon: faList, title: "Opportunity & Research", desc: "We help you explore market opportunities and keep your business ahead of competitors." }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 col-12"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="card shadow-sm text-center p-3">
                <FontAwesomeIcon className="icon-box mb-3" icon={service.icon} size="2x" />
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
