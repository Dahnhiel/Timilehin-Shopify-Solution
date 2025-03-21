import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import GoogleLogo from "./assets/images/partners/google.png";
import ShopifyLogo from "./assets/images/partners/shopify logo.png";
import EtsyLogo from "./assets/images/partners/etsy logo.png";
import WooLogo from "./assets/images/partners/woo logo.png";
import WordpressLogo from "./assets/images/partners/wordpress logo.png";
import "./index.css";

export default function Partners() {
  // Create an array of logos with their details
  const logos = [
    { src: GoogleLogo, alt: "Google" },
    { src: ShopifyLogo, alt: "Shopify" },
    { src: EtsyLogo, alt: "Etsy" },
    { src: WooLogo, alt: "Woo Commerce" },
    { src: WordpressLogo, alt: "Wordpress" },
    // Add more logos here as needed
  ];

  return (
    <div 
      className="bg-white w-100"
      style={{
        width: "100%",
        position: "absolute",
        left: "50%",
        bottom: "10px",
        transform: "translateX(-50%)",
      }}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper"
        // Updated breakpoints for better responsiveness
        breakpoints={{
          320: { slidesPerView: 2 },  // 2 logos on phones
          576: { slidesPerView: 2 },  // 2 logos on small devices
          768: { slidesPerView: 3 },  // 3 logos on tablets
          992: { slidesPerView: 4 }   // 4 logos on desktop
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="d-flex align-items-center justify-content-center bg-white" style={{ height: "60px" }}>
            <img
              src={logo.src}
              alt={`${logo.alt} - Timilehin Digital Partners`}
              className="img-fluid"
              style={{ maxWidth: "90px", height: "60px", objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}