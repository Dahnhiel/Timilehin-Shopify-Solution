import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid bg-success text-dark py-5">
      <div className="container">
        <div className="row">

          {/* Left Section - Logo & Description */}
          <div className="col-md-4">
          <Link className="navbar-brand fw-bold text-warning fs-4" to="/">
                Timilehin<span className="text-black"> Agency</span>
              </Link>
            <p>
            Unlock Your E-commerce Potential
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3">
              <a href="#" className="text-dark fs-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-dark fs-4">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-dark fs-4">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="text-dark fs-4">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Our Services</a></li>
              <li><Link to="#" className="text-dark text-decoration-none">Portfolio</Link></li>
              <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Right Section - Address */}
          <div className="col-md-4">
            <h5 className="fw-bold">Address</h5>
            <p>
            Manhattan, New York, <br/> NY, United States
            </p>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4">
          <p className="mb-0">Copyright <Link className="navbar-brand fw-bold text-warning" to="/">
                Timilehin<span className="text-black"> Agency </span>
              </Link>
              2025
              </p>
        </div>
      </div>
    </div>
  );
}
