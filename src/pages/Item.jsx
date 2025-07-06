import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingCart, Star } from 'lucide-react';
import furnitureData from '../data/furnitureData';

const Item = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addingToCart, setAddingToCart] = useState(false);

  const product = furnitureData.find(item => item.id === parseInt(id));

  const previousSearch = location.state?.previousSearch || '/search';

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setSelectedImage(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h3>Product not found</h3>
          <p className="text-muted">The item you're looking for doesn't exist.</p>
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/search')}
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = async () => {
    setAddingToCart(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log(`Added ${quantity} of ${product.name} to cart`);
    
    setAddingToCart(false);
    
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const handleBackToSearch = () => {
    navigate(previousSearch);
  };

  const currentPrice = product.sale.isOnSale ? product.sale.salePrice : product.price;
  const savings = product.sale.isOnSale ? product.price - product.sale.salePrice : 0;

  const images = product.images || [product.image];

  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col-12">
          <button 
            className="btn searchAddToCartButton d-flex align-items-center"
            onClick={handleBackToSearch}
          >
            <ArrowLeft className="me-2" size={16} />
            Back to Search Results
          </button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="position-relative">
            <img 
              src={images[selectedImage]} 
              alt={product.name}
              className="img-fluid rounded itemCardImage"
            />
            {product.sale.isOnSale && (
              <span className="position-absolute top-0 start-0 m-3 badge itemSaleBadge fs-6">
                Sale
              </span>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="h-100 d-flex flex-column">
            <h1 className="h3 mb-3 mb-1 itemPageCategories">{product.name}</h1>
            
            <div className="mb-3">
              <p className="mb-1 itemPageCategories">
                <strong>Brand:</strong> {product.brand}
              </p>
              <p className="mb-1 itemPageCategories">
                <strong>Material:</strong> {product.material}
              </p>
              <p className="mb-1 itemPageCategories">
                <strong>Type:</strong> {product.furnitureType}
              </p>
            </div>

            <div className="mb-3">
              <p className="mb-2 itemPageCategories"><strong>Suitable for:</strong></p>
              <div>
                {product.roomType.map(room => (
                  <span key={room} className="badge itemSaleBadge me-2 mb-1">
                    {room}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-center mb-2">
                <span className="h4 mb-0 infoText">${currentPrice}</span>
                {product.sale.isOnSale && (
                  <span className="text-decoration-line-through ms-3 h5 darkBlueText">
                    ${product.price}
                  </span>
                )}
              </div>
              {product.sale.isOnSale && (
                <p className="infoText mb-0">
                  <strong>You save ${savings.toFixed(2)}</strong>
                </p>
              )}
            </div>

            <div className="mb-4 darkBlueText">
              <h5>Description</h5>
              <p className="darkBlueText">
                {product.description || 
                  `This beautiful ${product.name} is crafted from high-quality ${product.material} by ${product.brand}. Perfect for your ${product.roomType.join(', ')} with its elegant design and superior craftsmanship. This ${product.furnitureType} combines style and functionality to enhance any space.`
                }
              </p>
            </div>

            

          </div>
        </div>
        <div className="row g-2 mt-3 justify-content-center">
            <div className="col-md-6">
            <div className="mb-4">
              <label className="form-label darkBlueText">
                <strong>Quantity:</strong>
              </label>
              <div className="d-flex align-items-center">
                <button 
                  className="btn searchAddToCartButton"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity === 1}
                >
                  <Minus size={16} />
                </button>
                <span className="mx-3 px-3 py-2 border rounded itemTotalBox">{quantity}</span>
                <button 
                  className="btn searchAddToCartButton"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="mb-4">
              <div className="border rounded p-3 itemTotalBox">
                <div className="d-flex justify-content-between align-items-center">
                  <span><strong>Total:</strong></span>
                  <span className="h5 mb-0 infoText">
                    ${(currentPrice * quantity).toFixed(2)}
                  </span>
                </div>
                {quantity > 1 && (
                  <small className="text-muted">
                    {quantity} × ${currentPrice} each
                  </small>
                )}
              </div>
            </div>

            <div className="mt-auto">
              <button 
                className="btn searchAddToCartButton btn-lg w-100 d-flex align-items-center justify-content-center"
                onClick={handleAddToCart}
                disabled={addingToCart}
              >
                {addingToCart ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Adding to Cart...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="me-2" size={20} />
                    Add {quantity} to Cart
                  </>
                )}
              </button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Item;