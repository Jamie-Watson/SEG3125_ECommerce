function Contact() {

  return (
    <>
      <footer className="py-5 rounded-4 m-4 contactContainer">
        <div className="container-fluid">
          <div className="row px-3">
            <div className="col-lg-6 mb-4">
              <h5 className="text-uppercase mb-3 fw-bold">Chairish</h5>
              <p className="mb-3">
                Your premier destination for quality furniture in Ottawa. 
                Discover unique pieces that make your house a home.
              </p>
              <div className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                <span>123 Bank Street, Ottawa, ON K1P 5N2</span>
              </div>
              <div className="mb-2">
                <i className="fas fa-phone me-2"></i>
                <a href="tel:+1-613-555-0123" className="text-white text-decoration-none">
                  (613) 555-0123
                </a>
              </div>
              <div className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                <a href="mailto:info@chairish-ottawa.com" className="text-white text-decoration-none">
                  info@chairish-ottawa.com
                </a>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <h6 className="text-uppercase mb-3 fw-bold">Store Hours</h6>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Monday - Friday: 10:00 AM - 8:00 PM</span>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <span>Saturday: 10:00 AM - 6:00 PM</span>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <span>Sunday: 12:00 PM - 5:00 PM</span>
                </div>
              </div>
              
              <h6 className="text-uppercase mb-3 fw-bold">Follow Us</h6>
              <div className="d-flex gap-3">
                <a href="https://instagram.com/chairish_ottawa" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none fs-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com/chairish_ottawa" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none fs-4">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="row align-items-center">
            <div className="col-md-8">
              <p className="mb-0">
                © 2025 Chairish Ottawa
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <div className="d-flex justify-content-md-end gap-2">
                <i className="fab fa-cc-visa fs-4"></i>
                <i className="fab fa-cc-mastercard fs-4"></i>
                <i className="fab fa-cc-amex fs-4"></i>
                <i className="fab fa-cc-paypal fs-4"></i>
              </div>
            </div>
          </div>
        </div>

        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        
        <style>{`
          .hover-white:hover {
            color: white !important;
            transition: color 0.3s ease;
          }
          
          footer a:hover {
            transform: translateY(-2px);
            transition: transform 0.3s ease;
          }
        `}</style>
      </footer>
    </>
  );
}

export default Contact;