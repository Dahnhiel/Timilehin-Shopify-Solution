import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faUsers, faMoneyBillWave, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const StatCard = ({ icon, label, value, suffix = "", delay }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.2 
  });
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    if (inView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [inView, isAnimated]);
  
  return (
    <div
      ref={ref}
      className="col-md-3 col-sm-6 text-center mb-4 stat-card"
      style={{
        opacity: isAnimated ? 1 : 0,
        transform: isAnimated ? "scale(1)" : "scale(0.9)",
        transition: `all 0.6s ease ${delay}s`
      }}
    >
      <div 
        className="icon-container mb-3"
        style={{
          transition: "transform 0.4s ease",
          animation: isAnimated ? "floatIcon 3s ease-in-out infinite" : "none",
          animationDelay: `${delay + 0.5}s`
        }}
      >
        <FontAwesomeIcon icon={icon} className="fs-1 text-secondary" />
      </div>
      <p 
        className="text-muted fs-5 stat-label"
        style={{
          opacity: isAnimated ? 1 : 0,
          transform: isAnimated ? "translateY(0)" : "translateY(20px)",
          transition: `all 0.5s ease ${delay + 0.2}s`
        }}
      >
        {label}
      </p>
      <h3 
        className="text-success fw-bold fs-2 stat-value"
        style={{
          opacity: isAnimated ? 1 : 0,
          transform: isAnimated ? "translateY(0)" : "translateY(20px)",
          transition: `all 0.5s ease ${delay + 0.4}s`
        }}
      >
        {isAnimated && <CountUp start={0} end={value} duration={2.5} separator="," />}{suffix}
      </h3>
    </div>
  );
};

export default function Stats() {
  const [stats, setStats] = useState([
    { icon: faFileAlt, label: "Completed Projects", value: 100, suffix: "+" },
    { icon: faUsers, label: "Customer Satisfaction", value: 98, suffix: "%" },
    { icon: faMoneyBillWave, label: "Raised by Clients", value: 10, suffix: "M" },
    { icon: faCalendarAlt, label: "Years in Business", value: 2, suffix: "yrs" },
  ]);
  
  const sectionRef = useRef(null);
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    // This simulates fetching stats from an API
    const timer = setTimeout(() => {
      setStats(prevStats => prevStats.map(stat => ({
        ...stat,
        value: stat.label === "Years in Business" ? 3 : stat.value
      })));
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-light py-5" ref={sectionRef}>
      <style>
        {`
          @keyframes floatIcon {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          .stats-title {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          .stats-title.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .stat-card:hover .icon-container {
            transform: scale(1.1);
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes highlightValue {
            0% { color: #198754; }
            50% { color: #ffc107; }
            100% { color: #198754; }
          }
          
          .stat-card:hover .stat-value {
            animation: highlightValue 1s ease;
          }
        `}
      </style>
      
      <div className="container">
        <h2 
          ref={titleRef} 
          className={`text-center mb-5 stats-title ${titleInView ? 'visible' : ''}`}
        >
          OUR PERFORMANCE
        </h2>
        
        <div className="row justify-content-center">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              {...stat} 
              delay={index * 0.2} // Staggered delay for each card
            />
          ))}
        </div>
      </div>
    </div>
  );
}