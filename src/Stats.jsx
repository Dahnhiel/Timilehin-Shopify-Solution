import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faUsers, faMoneyBillWave, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const StatCard = ({ icon, label, value, suffix = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    if (inView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [inView, isAnimated]);
  
  return (
    <div
      ref={ref}
      className="col-md-3 col-sm-6 text-center mb-4"
      style={{
        opacity: isAnimated ? 1 : 0,
        transform: isAnimated ? "scale(1)" : "scale(0.9)",
        transition: "all 0.5s ease"
      }}
    >
      <FontAwesomeIcon icon={icon} className="fs-1 text-secondary mb-3" />
      <p className="text-muted fs-5">{label}</p>
      <h3 className="text-success fw-bold fs-2">
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
    <div className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}