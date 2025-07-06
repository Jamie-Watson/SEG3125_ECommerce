import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Circle, User, CreditCard, Package, X, ShoppingCart } from 'lucide-react';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cardholderName: ''
  });
  const [personalInfoErrors, setPersonalInfoErrors] = useState({});
  const [paymentInfoErrors, setPaymentInfoErrors] = useState({});
  const navigate = useNavigate();

  const checkoutSteps = [
    { 
      id: 0, 
      title: 'Personal Information', 
      icon: User, 
      description: 'Tell us where to send your beautiful furniture',
      action: 'Let\'s get started!'
    },
    { 
      id: 1, 
      title: 'Payment Details', 
      icon: CreditCard, 
      description: 'Secure your purchase with confidence',
      action: 'Almost there!'
    },
    { 
      id: 2, 
      title: 'Order Confirmation', 
      icon: Package, 
      description: 'Your dream furniture is on its way!',
      action: 'Congratulations!'
    }
  ];

  useEffect(() => {
    const savedCart = localStorage.getItem('furnitureCart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
        if (parsedCart.length === 0) {
          navigate('/cart');
        }
      } catch (error) {
        console.error('Error parsing cart data:', error);
        navigate('/cart');
      }
    } else {
      navigate('/cart');
    }
    setLoading(false);
  }, [navigate]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.sale?.isOnSale ? item.sale.salePrice : item.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const validatePersonalInfo = () => {
    const errors = {};
    if (!personalInfo.firstName.trim()) errors.firstName = 'First name is required';
    if (!personalInfo.lastName.trim()) errors.lastName = 'Last name is required';
    if (!personalInfo.email.trim()) errors.email = 'Email is required';
    if (!personalInfo.phone.trim()) errors.phone = 'Phone number is required';
    if (!personalInfo.address.trim()) errors.address = 'Address is required';
    if (!personalInfo.city.trim()) errors.city = 'City is required';
    if (!personalInfo.province.trim()) errors.province = 'Province is required';
    if (!personalInfo.postalCode.trim()) errors.postalCode = 'Postal code is required';
    
    setPersonalInfoErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePaymentInfo = () => {
    const errors = {};
    if (!paymentInfo.cardNumber.trim()) errors.cardNumber = 'Card number is required';
    if (!paymentInfo.expiryDate.trim()) errors.expiryDate = 'Expiry date is required';
    if (!paymentInfo.cardholderName.trim()) errors.cardholderName = 'Cardholder name is required';
    
    setPaymentInfoErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 0) {
      if (validatePersonalInfo()) {
        setCurrentStep(1);
      }
    } else if (currentStep === 1) {
      if (validatePaymentInfo()) {
        setCurrentStep(2);
        localStorage.removeItem('furnitureCart');
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
    if (personalInfoErrors[field]) {
      setPersonalInfoErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePaymentInfoChange = (field, value) => {
    if (field === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
    }
    if (field === 'expiryDate') {
      value = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
    }
    
    setPaymentInfo(prev => ({ ...prev, [field]: value }));
    if (paymentInfoErrors[field]) {
      setPaymentInfoErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 mt-5">
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <button 
            className="btn searchAddToCartButton d-flex align-items-center"
            onClick={() => navigate('/cart')}
          >
            <ArrowLeft className="me-2" size={16} />
            Back to Cart
          </button>
        </div>
      </div>

<div className="row mb-5">
  <div className="col-12">
    <div className="d-flex justify-content-center align-items-center">
      {checkoutSteps.map((step, index) => (
        <div key={index} className="d-flex align-items-center">
          <div className="text-center">
            <div className={`rounded-circle mb-2 mx-auto ${
              currentStep >= index ? 'orderProgress' : 'bg-light darkBlueText'
            }`} style={{ 
              width: '50px', 
              height: '50px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              {currentStep > index ? <CheckCircle size={24} /> : <step.icon size={24} />}
            </div>
            <div className={`fw-bold ${currentStep >= index ? 'infoText' : 'darkBlueText'}`}>
              {step.title}
            </div>
          </div>
          {index < checkoutSteps.length - 1 && (
            <div className="mx-4" 
                 style={{ width: '50px', height: '2px', backgroundColor: currentStep > index ? '#1F7A8C' : '#dee2e6' }}>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {currentStep === 0 && (
            <div className="card">
              <div className="card-header itemTotalBox">
                <h4 className="mb-0 infoText">
                  Personal Information
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label darkBlueText">First Name *</label>
                    <input
                      type="text"
                      className={`form-control ${personalInfoErrors.firstName ? 'is-invalid' : ''}`}
                      value={personalInfo.firstName}
                      onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                      placeholder="Enter your first name"
                    />
                    {personalInfoErrors.firstName && (
                      <div className="invalid-feedback">{personalInfoErrors.firstName}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label darkBlueText">Last Name *</label>
                    <input
                      type="text"
                      className={`form-control ${personalInfoErrors.lastName ? 'is-invalid' : ''}`}
                      value={personalInfo.lastName}
                      onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
                      placeholder="Enter your last name"
                    />
                    {personalInfoErrors.lastName && (
                      <div className="invalid-feedback">{personalInfoErrors.lastName}</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label darkBlueText">Email *</label>
                    <input
                      type="email"
                      className={`form-control ${personalInfoErrors.email ? 'is-invalid' : ''}`}
                      value={personalInfo.email}
                      onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                    />
                    {personalInfoErrors.email && (
                      <div className="invalid-feedback">{personalInfoErrors.email}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label darkBlueText">Phone Number *</label>
                    <input
                      type="tel"
                      className={`form-control ${personalInfoErrors.phone ? 'is-invalid' : ''}`}
                      value={personalInfo.phone}
                      onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                      placeholder="(123) 456-7890"
                    />
                    {personalInfoErrors.phone && (
                      <div className="invalid-feedback">{personalInfoErrors.phone}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label darkBlueText">Address *</label>
                  <input
                    type="text"
                    className={`form-control ${personalInfoErrors.address ? 'is-invalid' : ''}`}
                    value={personalInfo.address}
                    onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
                    placeholder="123 Main Street, Apt 4B"
                  />
                  {personalInfoErrors.address && (
                    <div className="invalid-feedback">{personalInfoErrors.address}</div>
                  )}
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label darkBlueText">City *</label>
                    <input
                      type="text"
                      className={`form-control ${personalInfoErrors.city ? 'is-invalid' : ''}`}
                      value={personalInfo.city}
                      onChange={(e) => handlePersonalInfoChange('city', e.target.value)}
                      placeholder="Ottawa"
                    />
                    {personalInfoErrors.city && (
                      <div className="invalid-feedback">{personalInfoErrors.city}</div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label darkBlueText">Province *</label>
                    <select
                      className={`form-select ${personalInfoErrors.province ? 'is-invalid' : ''}`}
                      value={personalInfo.province}
                      onChange={(e) => handlePersonalInfoChange('province', e.target.value)}
                    >
                      <option value="">Select Province</option>
                      <option value="QC">Quebec</option>
                      <option value="ON">Ontario</option>
                      <option value="BC">British Columbia</option>
                      <option value="AB">Alberta</option>
                      <option value="MB">Manitoba</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland and Labrador</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="NT">Northwest Territories</option>
                      <option value="YT">Yukon</option>
                      <option value="NU">Nunavut</option>
                    </select>
                    {personalInfoErrors.province && (
                      <div className="invalid-feedback">{personalInfoErrors.province}</div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label darkBlueText">Postal Code *</label>
                    <input
                      type="text"
                      className={`form-control ${personalInfoErrors.postalCode ? 'is-invalid' : ''}`}
                      value={personalInfo.postalCode}
                      onChange={(e) => handlePersonalInfoChange('postalCode', e.target.value.toUpperCase())}
                      placeholder="H1A 1A1"
                    />
                    {personalInfoErrors.postalCode && (
                      <div className="invalid-feedback">{personalInfoErrors.postalCode}</div>
                    )}
                  </div>
                </div>
                

              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="card">
              <div className="card-header itemTotalBox">
                <h4 className="mb-0 infoText">
                  Payment Information
                </h4>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label darkBlueText">Cardholder Name *</label>
                  <input
                    type="text"
                    className={`form-control ${paymentInfoErrors.cardholderName ? 'is-invalid' : ''}`}
                    value={paymentInfo.cardholderName}
                    onChange={(e) => handlePaymentInfoChange('cardholderName', e.target.value)}
                    placeholder="John Doe"
                  />
                  {paymentInfoErrors.cardholderName && (
                    <div className="invalid-feedback">{paymentInfoErrors.cardholderName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label darkBlueText">Card Number *</label>
                  <input
                    type="text"
                    className={`form-control ${paymentInfoErrors.cardNumber ? 'is-invalid' : ''}`}
                    value={paymentInfo.cardNumber}
                    onChange={(e) => handlePaymentInfoChange('cardNumber', e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                  {paymentInfoErrors.cardNumber && (
                    <div className="invalid-feedback">{paymentInfoErrors.cardNumber}</div>
                  )}
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label className="form-label darkBlueText">Expiry Date *</label>
                    <input
                      type="text"
                      className={`form-control ${paymentInfoErrors.expiryDate ? 'is-invalid' : ''}`}
                      value={paymentInfo.expiryDate}
                      onChange={(e) => handlePaymentInfoChange('expiryDate', e.target.value)}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                    {paymentInfoErrors.expiryDate && (
                      <div className="invalid-feedback">{paymentInfoErrors.expiryDate}</div>
                    )}
                  </div>
                </div>
                

              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="col-12">
              <div className="card">
                <div className="card-header text-center orderSummary">
                  <h3 className="mb-0">
                    Order Confirmed!
                  </h3>
                </div>
                <div className="card-body">
                  <div className="text-center mb-4">
                    <p className="darkBlueText">Your order has been successfully placed and is being processed.</p>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header">
                      <h5 className="mb-0 darkBlueText">Order Summary</h5>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <h6 className="darkBlueText">Items in your order:</h6>
                        {cartItems.map(item => {
                          const currentPrice = item.sale?.isOnSale ? item.sale.salePrice : item.price;
                          return (
                            <div key={item.id} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                              <div>
                                <div className="fw-bold darkBlueText" style={{ fontSize: '0.9rem' }}>
                                  {item.name}
                                </div>
                                <small className="darkBlueText">Qty: {item.quantity}</small>
                              </div>
                              <div className="text-end">
                                <div className="fw-bold infoText">${(currentPrice * item.quantity).toFixed(2)}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="d-flex justify-content-between mb-2 darkBlueText">
                        <span>Subtotal ({getTotalItems()} items):</span>
                        <span>${getTotalPrice().toFixed(2)} CAD</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2 darkBlueText">
                        <span>Tax (13%):</span>
                        <span>${(getTotalPrice() * 0.13).toFixed(2)} CAD</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mb-3">
                        <strong>Total:</strong>
                        <strong className="h5 infoText">
                          ${(getTotalPrice() * 1.13).toFixed(2)} CAD
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                      <h5 className="darkBlueText">Shipping Address:</h5>
                      <p className="darkBlueText">
                        {personalInfo.firstName} {personalInfo.lastName}<br />
                        {personalInfo.address}<br />
                        {personalInfo.city}, {personalInfo.province} {personalInfo.postalCode}<br />
                        {personalInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button 
                      className="btn searchAddToCartButton btn-lg me-3"
                      onClick={() => navigate('/search')}
                    >
                      Continue Shopping
                    </button>
                    <button 
                      className="btn searchAddToCartButton btn-lg"
                      onClick={() => navigate('/')}
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {currentStep < 2 && (
          <div className="col-lg-4">
            <div className="card sticky-top">
              <div className="card-header itemTotalBox">
                <h5 className="mb-0 infoText">Order Summary</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <h6 className="darkBlueText">Items in your order:</h6>
                  {cartItems.map(item => {
                    const currentPrice = item.sale?.isOnSale ? item.sale.salePrice : item.price;
                    return (
                      <div key={item.id} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                        <div>
                          <div className="fw-bold darkBlueText" style={{ fontSize: '0.9rem' }}>
                            {item.name}
                          </div>
                          <small className="darkBlueText">Qty: {item.quantity}</small>
                        </div>
                        <div className="text-end">
                          <div className="fw-bold infoText">${(currentPrice * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="d-flex justify-content-between mb-2 darkBlueText">
                  <span>Subtotal ({getTotalItems()} items):</span>
                  <span>${getTotalPrice().toFixed(2)} CAD</span>
                </div>
                <div className="d-flex justify-content-between mb-2 darkBlueText">
                  <span>Tax (13%):</span>
                  <span>${(getTotalPrice() * 0.13).toFixed(2)} CAD</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total:</strong>
                  <strong className="h5 infoText">
                    ${(getTotalPrice() * 1.13).toFixed(2)} CAD
                  </strong>
                </div>

                <div className="d-grid gap-2">
                  {currentStep > 0 && (
                    <button 
                      className="btn searchAddToCartButton"
                      onClick={handleBack}
                    >
                      <ArrowLeft className="me-2" size={16} />
                      Back
                    </button>
                  )}
                  <button 
                    className="btn searchAddToCartButton btn-lg"
                    onClick={handleNext}
                  >
                    {currentStep === 0 ? 'Continue to Payment' : 'Complete Order'}
                    <ArrowRight className="ms-2" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;