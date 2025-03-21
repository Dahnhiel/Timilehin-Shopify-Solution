// import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeroImg from "./assets/images/hero-img.png";
import Partners from "./Partners"
import Services from "./Services"
import Footer from "./Footer"
import Suscribe from "./Suscribe"
import Testimonials from "./Testimonials"
import Stats from "./Stats"

function App() {
  return (
    <Router>
      <div>
      <div className="container-fluid min-vh-100" id="top-container">
        <div className="container bg-ligh p-3">
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
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      How We Work
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Sales Proof
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Our Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="Hero-Section">
          <div className="row align-items-center">
        {/* Hero Text Section */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start">
          <h2 className="fw-bold">
            Increase Your Customers Loyalty <br /> and Satisfaction
          </h2>
          <p className="text-muted">
            We help businesses like yours earn more customers, stand out
            from competitors, and make more money.
          </p>
          <button className="btn btn-warning text-white fw-bold px-4 py-2">
            Get Started
          </button>
        </div>

        {/* Hero Image Section */}
        <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
          <img src={HeroImg} alt="Timilehin Digital" className="img-fluid" />
        </div>
      </div>
          </section>
          <Partners />
        </div>
      </div>
        <Services />
        <Stats />
        <Testimonials />
        <Suscribe className="min-vh-50"/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
