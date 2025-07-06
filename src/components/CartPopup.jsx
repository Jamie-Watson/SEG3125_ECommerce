import { CheckCircle, ShoppingCart, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CartPopup ({ isVisible, onClose, productName, quantity = 1 }) {
  const navigate = useNavigate();
  
    if (!isVisible) return null;

    const handleGoToCart = () => {
    onClose();
    navigate('/cart');
  };
  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header contactContainer">
            <div className="d-flex align-items-center">
              <h5 className="modal-title mb-0">Added to Cart!</h5>
            </div>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body text-center py-4">
            <ShoppingCart size={48} className="infoText mb-3" />
            <h6 className="mb-2 darkBlueText">
              {quantity} {productName}{quantity > 1 ? 's' : ''} added to your cart
            </h6>
            <p className="mb-0 darkBlueText">Continue shopping or go to cart to checkout</p>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onClose}
            >
              Continue Shopping
            </button>
            <button 
              type="button" 
              className="btn searchAddToCartButton"
              onClick={handleGoToCart}
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;