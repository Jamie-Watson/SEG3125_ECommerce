import { useNavigate } from 'react-router-dom';
import furnitureData from '../data/furnitureData';

function HomepageItems() {
  const navigate = useNavigate();
  const featuredProducts = furnitureData.slice(0, 4);

  const handleProductClick = (productId) => {
    navigate(`/item/${productId}`);
  };

  const ProductCard = ({ product, isLarge = false }) => (
    <div className={`${isLarge ? 'col-md-8 homeItems' : 'col-md-4 homeItems'}`}>
      <div 
        className="position-relative overflow-hidden homeItems"
        style={{ 
          height: '400px', 
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          margin: '1rem'
        }}
        onClick={() => handleProductClick(product.id)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-100 h-100"
          style={{ objectFit: 'cover', display: 'block' }}
        />
        <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white p-3">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="h5 mb-0">{product.name}</h3>
            {product.sale.isOnSale && (
              <span className="badge bg-danger">Sale</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid py-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-6 fw-bold mb-2 infoText">Featured Products</h2>
          <p className="darkBlueText">Discover our most popular furniture pieces</p>
        </div>
      </div>

      <div className="row">
        <ProductCard product={featuredProducts[0]} isLarge={true} />
        <ProductCard product={featuredProducts[1]} />
        <ProductCard product={featuredProducts[2]} />
        <ProductCard product={featuredProducts[3]} isLarge={true} />
      </div>
    </div>
  );
}

export default HomepageItems;