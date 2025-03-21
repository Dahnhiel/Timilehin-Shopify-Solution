// import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import Partners from "./Components/Partners"
import Wwd from "./Components/Wwd"
import Footer from "./Components/Footer"
import Suscribe from "./Components/Suscribe"
import Testimonials from "./Components/Testimonials"
import Services from "./Components/Services"
import Stats from "./Components/Stats"
import HeroVideo from "./assets/hero-vid.mp4"

function App() {
  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // If the element is in the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    // Target all elements with the fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    // Clean up observer on component unmount
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <Router>
      <div>
        {/* Add styles for fade-in animation */}
        <style>
          {`
            .fade-in {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.3s ease-out, transform 1s ease-out;
            }
            
            .fade-in-visible {
              opacity: 1;
              transform: translateY(0);
            }
          `}
        </style>
        
        <div className="container-fluid min-vh-100 p-0 position-relative" id="top-container">
          {/* Full-width hero video */}
          <div className="hero-video-container position-absolute w-100 h-100 top-0 start-0">
            <video autoPlay muted loop className="w-100 h-100 object-fit-cover">
              <source src={HeroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="position-absolute w-100 h-100 top-0 start-0 bg-dark opacity-50"></div>
          </div>
          
          <div className="container p-3 position-relative">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                {/* Logo */}
                <Link className="navbar-brand fw-bold text-warning fs-4" to="/">
                  Timilehin<span className="text-black"> Agency</span>
                </Link>

                {/* Mobile Toggle Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link text-white">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link text-white">
                        How We Work
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link text-white">
                        Sales Proof
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link text-white">
                        Our Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link text-white">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <section className="Hero-Sectio">
              <div className="row align-items-center" id="hero-container">
                {/* Hero Text Section */}
                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                  <h2 className="fw-bold text-white">
                    Increase Your Customers Loyalty <br /> and Satisfaction
                  </h2>
                  <p className="text-light">
                    We help businesses like yours earn more customers, stand out
                    from competitors, and make more money.
                  </p>
                  <button className="btn btn-warning text-white fw-bold px-4 py-2">
                    Get Started
                  </button>
                </div>

                {/* Removed Hero Image Section and kept column for spacing */}
                <div className="col-lg-6 col-md-12"></div>
              </div>
            </section>
          </div>
        </div>
          <div className="fade-in">
            <Partners />
          </div>
        
        <div className="fade-in">
          <Wwd />
        </div>
        
        <div className="fade-in">
          <Stats />
        </div>
        
        <div className="fade-in">
          <Services />
        </div>
        
        <div className="fade-in">
          <Testimonials />
        </div>
        
        <div className="fade-in">
          <Suscribe className="min-vh-50"/>
        </div>
        
        <div className="fade-in">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;