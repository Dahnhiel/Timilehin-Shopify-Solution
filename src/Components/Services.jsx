import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStore,
  faChartLine,
  faTachometerAlt,
  faPalette,
  faHeadset,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    // Set up the Intersection Observer for the main services section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // When section comes into view, animate the title
          const title = servicesRef.current.querySelector('h1');
          title.classList.add('animate-title');
        }
      },
      { threshold: 0.1 }
    );

    // Set up observer for individual cards
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class when card is visible
            entry.target.classList.add('card-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe the main services section
    if (servicesRef.current) {
      sectionObserver.observe(servicesRef.current);
      
      // Observe each card
      const cards = servicesRef.current.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        // Add different delay to each card
        card.style.transitionDelay = `${index * 0.1}s`;
        cardObserver.observe(card);
      });
    }

    // Clean up
    return () => {
      if (servicesRef.current) {
        sectionObserver.disconnect();
        cardObserver.disconnect();
      }
    };
  }, []);

  return (
    <div className="container my-5" ref={servicesRef}>
      {/* Add styles for animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .service-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .card-visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .animate-title {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .icon-card {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }
          
          .card-visible .icon-card {
            animation: pulse 1.5s ease-out;
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          .service-card:hover .icon-card {
            transform: scale(1.1);
          }
        `}
      </style>

      <h1 className="text-center mb-5" style={{ opacity: 0 }}>OUR SERVICES</h1>
      <div className="row">
        {/* Web Store Development */}
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="card h-100 service-card">
            <div className="card-body d-flex align-items-center">
              <div className="icon-card bg-primary text-white me-3">
                <FontAwesomeIcon icon={faStore} size="2x" />
              </div>
              <div>
                <h5 className="card-title">Web Store Development</h5>
                <p className="card-text">
                  With Web Store Development, businesses can leverage state-of-the-art technology and design to build custom online stores that reflect their brand and attract customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Rate Optimization */}
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="card h-100 service-card">
            <div className="card-body d-flex align-items-center">
              <div className="icon-card bg-primary text-white me-3">
                <FontAwesomeIcon icon={faChartLine} size="2x" />
              </div>
              <div>
                <h5 className="card-title">Conversion Rate Optimization</h5>
                <p className="card-text">
                  By leveraging our Conversion Rate Optimization service, you can expect to see an increase in the number of visitors who convert into customers, leading to greater ROI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Site Speed Audits & Optimization */}
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="card h-100 service-card">
            <div className="card-body d-flex align-items-center">
              <div className="icon-card bg-primary text-white me-3">
                <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
              </div>
              <div>
                <h5 className="card-title">Site Speed Audits & Optimization</h5>
                <p className="card-text">
                  Our site speed audits and optimization service will analyze your website's performance metrics and implement tailored solutions to ensure optimal speed and responsiveness for your visitors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Theme Development */}
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="card h-100 service-card">
            <div className="card-body d-flex align-items-center">
              <div className="icon-card bg-primary text-white me-3">
                <FontAwesomeIcon icon={faPalette} size="2x" />
              </div>
              <div>
                <h5 className="card-title">Custom Theme Development</h5>
                <p className="card-text">
                  Elevate your online website store with bespoke themes that captivate and engage your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 24x7x365 Critical Site Support on Social Media */}
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="card h-100 service-card">
            <div className="card-body d-flex align-items-center">
              <div className="icon-card bg-primary text-white me-3">
                <FontAwesomeIcon icon={faHeadset} size="2x" />
              </div>
              <div>
                <h5 className="card-title">24x7x365 Critical Site Support on Social Media</h5>
                <p className="card-text">
                  Our 24x7x365 Critical Site Support on Social Media offers continuous monitoring and rapid response to critical issues, guaranteeing the stability and reliability of your online presence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Management */}
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="card h-100 service-card">
            <div className="card-body d-flex align-items-center">
              <div className="icon-card bg-primary text-white me-3">
                <FontAwesomeIcon icon={faCogs} size="2x" />
              </div>
              <div>
                <h5 className="card-title">Content Management</h5>
                <p className="card-text">
                  Content drives all digital marketing element and great content added to good design can drive significant sales and engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;