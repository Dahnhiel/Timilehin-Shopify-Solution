"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutUsImg from "../assets/images/about_us.jpeg";

export default function About() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="bg-light py-5" ref={ref}>
      <div className="container">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-4"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <p className="text-primary fw-bold">ABOUT US</p>
          <h3 className="fw-bold">
            We Are <span className="text-warning">Timilehin Agency</span>, Your Digital Growth Partner
          </h3>
        </motion.div>

        {/* Content Row */}
        <div className="row align-items-center">
          {/* Left Content */}
          <motion.div 
            className="col-lg-6"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <p className="text-muted">
              At <span className="fw-bold">Timilehin Agency</span>, we craft innovative digital solutions that elevate brands.  
              From strategy to execution, we blend creativity, technology, and data-driven insights to help businesses scale  
              and dominate their industry.
            </p>
            <p className="text-muted">
              Whether you're a startup looking for a breakthrough or an established brand seeking digital transformation,  
              our team of experts in web development, branding, and marketing is ready to bring your vision to life.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="col-lg-6 text-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <img
              src={AboutUsImg}
              alt="Timilehin Agency"
              className="img-fluid w-50 rounded shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
