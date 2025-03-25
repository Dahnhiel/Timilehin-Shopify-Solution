import { useState } from "react";
import Footer from "./Components/Footer";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("store-design");

  const storeDesignImages = [
    "/images/store1.jpg",
    "/images/store2.jpg",
    "/images/store3.jpg",
    "/images/store4.jpg",
    "/images/store5.jpg",
    "/images/store6.jpg",
    "/images/store7.jpg",
    "/images/store8.jpg"
  ];

  const saleProofImages = [
    "/images/sale1.jpg",
    "/images/sale2.jpg",
    "/images/sale3.jpg",
    "/images/sale4.jpg",
    "/images/sale5.jpg",
    "/images/sale6.jpg",
    "/images/sale7.jpg",
    "/images/sale8.jpg"
  ];

  return (
    <>
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Our Portfolio</h2>
      
      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn mx-2 ${activeTab === "store-design" ? "btn-primary" : "btn-outline-secondary"}`}
          onClick={() => setActiveTab("store-design")}
        >
          Store Design
        </button>
        <button
          className={`btn mx-2 ${activeTab === "sale-proof" ? "btn-primary" : "btn-outline-secondary"}`}
          onClick={() => setActiveTab("sale-proof")}
        >
          Sale Proof
        </button>
      </div>

      {/* Images */}
      <div className="row g-4">
        {(activeTab === "store-design" ? storeDesignImages : saleProofImages).map((img, index) => (
          <div key={index} className="col-6 col-md-3">
            <img src={img} alt="Portfolio" className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </>
  );
}
