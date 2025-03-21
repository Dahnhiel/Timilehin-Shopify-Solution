export default function Subscribe() {
    return (
      <div className="container my-5 text-center h-50">
        <p className="text-success fw-bold">SUBSCRIBE</p>
        <h3 className="fw-bold">Subscribe To Get The Latest <br /> News About Us</h3>
        <p className="text-muted">
          Please drop your email below to get daily updates about what we do
        </p>
        
        <div className="d-flex justify-content-center">
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
        </div>
      </div>
    );
  }