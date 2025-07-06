import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('furnitureCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart data:', error);
        setCartItems([]);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('furnitureCart', JSON.stringify(cartItems));
    }
  }, [cartItems, loading]);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    const confirmClear = window.confirm('Are you sure you want to clear all items from your cart?');
    if (confirmClear) {
      setCartItems([]);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.sale?.isOnSale ? item.sale.salePrice : item.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty! Please add some items before checking out.');
      return;
    }
    
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/search');
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
        <div className="col-12">
          <button 
            className="btn searchAddToCartButton d-flex align-items-center"
            onClick={handleContinueShopping}
          >
            <ArrowLeft className="me-2" size={16} />
            Continue Shopping
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 darkBlueText">
            Shopping Cart {cartItems.length > 0 && `(${getTotalItems()} items)`}
          </h2>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <ShoppingCart size={64} className="darkBlueText mb-3" />
          <h4 className="darkBlueText">Your cart is empty</h4>
          <p className="darkBlueText">
            Ready to find your perfect furniture? Let's get you started on creating your dream space!
          </p>
          <button 
            className="btn searchAddToCartButton btn-lg"
            onClick={handleContinueShopping}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 darkBlueText">Cart Items</h5>
                  <button 
                    className="btn btn-outline-danger btn-sm"
                    onClick={clearCart}
                  >
                    <Trash2 size={16} className="me-1" />
                    Clear Cart
                  </button>
                </div>
                <div className="card-body p-0">
                  {cartItems.map(item => {
                    const currentPrice = item.sale?.isOnSale ? item.sale.salePrice : item.price;
                    const itemTotal = currentPrice * item.quantity;
                    
                    return (
                      <div key={item.id} className="border-bottom p-3">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="img-fluid rounded"
                              style={{ height: '80px', objectFit: 'cover' }}
                            />
                          </div>
                          <div className="col-md-4">
                            <h6 className="mb-1 darkBlueText">{item.name}</h6>
                            <p className="darkBlueText mb-0 small">
                              {item.brand} • {item.material}
                            </p>
                            {item.sale?.isOnSale && (
                              <span className="badge itemSaleBadge">On Sale</span>
                            )}
                          </div>
                          <div className="col-md-2">
                            <div className="d-flex align-items-center">
                              <button 
                                className="btn btn-sm searchAddToCartButton"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus size={14} />
                              </button>
                              <span className="mx-2 px-2 py-1 border rounded itemTotalBox">
                                {item.quantity}
                              </span>
                              <button 
                                className="btn btn-sm searchAddToCartButton"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                          <div className="col-md-2 text-center">
                            <div>
                              <span className="fw-bold infoText">${currentPrice}</span>
                              {item.sale?.isOnSale && (
                                <div>
                                  <small className="darkBlueText text-decoration-line-through">
                                    ${item.price}
                                  </small>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-2 text-end">
                            <div className="d-flex flex-column align-items-end">
                              <span className="fw-bold h6 mb-1 darkBlueText">${itemTotal.toFixed(2)}</span>
                              <button 
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 darkBlueText">Order Summary</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2 darkBlueText">
                    <span className="darkBlueText">Subtotal ({getTotalItems()} items):</span>
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
                  <button 
                    className="btn searchAddToCartButton w-100 btn-lg mb-3"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;