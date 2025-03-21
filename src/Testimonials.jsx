import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Emily Stones",
    role: "CEO, Marketing Guru",
    message:
      "The personalized consulting helped me optimize my online store, resulting in a significant increase in sales.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Ameer Connel",
    role: "Small Business Entrepreneur",
    message:
      "Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "John Doe",
    role: "Store Owner",
    message:
      "Their work is simply outstanding. My business has reached new heights due to their services!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Entrepreneur, Creative Director",
    message:
      "I was amazed at how professional and efficient the service was. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-4">
          <p className="text-success fw-bold">TESTIMONIALS</p>
          <h3>
            See What Our <span className="text-warning">Customers</span> Say
            About Us
          </h3>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Show only 1 slide on all screens
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={true}
          className="position-relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
            <div className="card col-md-6 mx-auto p-4 shadow-sm h-100">
              <p className="text-muted">{testimonial.message}</p>
              <div className="d-flex align-items-center mt-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h5 className="mb-0">{testimonial.name}</h5>
                  <small className="text-muted">{testimonial.role}</small>
                </div>
              </div>
            </div>
          </SwiperSlide>          
          ))}
        </Swiper>
      </div>
    </section>
  );
}
