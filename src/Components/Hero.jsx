import { Link } from "react-router-dom";

const Header = () => {
  return (
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
  );
};

export default Header;
