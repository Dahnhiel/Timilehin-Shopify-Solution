import HeroVideo from "../assets/hero-vid.mp4";

const Hero = () => {
  return (
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
        <section className="Hero-Section">
          <div className="row align-items-center" id="hero-container">
            {/* Hero Text Section */}
            <div className="col-lg-6 col-md-12 text-center text-lg-start">
              <h2 className="fw-bold text-white">
                Increase Your Customers Loyalty <br /> and Satisfaction
              </h2>
              <p className="text-light">
                We help businesses like yours earn more customers, stand out from competitors, and make more money.
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
  );
};

export default Hero;
