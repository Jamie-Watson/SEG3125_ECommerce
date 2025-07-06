import React, { useState, useMemo, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import furnitureData from '../data/furnitureData';
import SearchJumbotron from '../components/SearchJumbotron';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const searchParam = searchParams.get('search') || '';
    const typeParam = searchParams.get('type') || '';
    const materialParam = searchParams.get('material') || '';
    const brandParam = searchParams.get('brand') || '';
    const roomTypeParam = searchParams.get('roomType') || '';
    const saleParam = searchParams.get('sale') === 'true';
    const sortParam = searchParams.get('sort') || '';

    setSearchTerm(searchParam);
    setSelectedType(typeParam);
    setSelectedMaterial(materialParam);
    setSelectedBrand(brandParam);
    setSelectedRoomType(roomTypeParam);
    setOnSaleOnly(saleParam);
    setSortBy(sortParam);
  }, [searchParams]);

  const types = [...new Set(furnitureData.map(item => item.furnitureType))];
  const materials = [...new Set(furnitureData.map(item => item.material))];
  const brands = [...new Set(furnitureData.map(item => item.brand))];
  const roomTypes = [...new Set(furnitureData.flatMap(item => item.roomType))];

  const updateURLParams = (newParams) => {
    const params = new URLSearchParams();
    
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  const filteredData = useMemo(() => {
    let filtered = furnitureData.filter(item => {
      const matchesSearch = !searchTerm || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !selectedType || item.furnitureType === selectedType;
      const matchesMaterial = !selectedMaterial || item.material === selectedMaterial;
      const matchesBrand = !selectedBrand || item.brand === selectedBrand;
      const matchesRoomType = !selectedRoomType || item.roomType.includes(selectedRoomType);
      const matchesSale = !onSaleOnly || item.sale.isOnSale;

      return matchesSearch && matchesType && matchesMaterial && matchesBrand && matchesRoomType && matchesSale;
    });

    if (sortBy === 'price-low-high') {
      filtered.sort((a, b) => {
        const priceA = a.sale.isOnSale ? a.sale.salePrice : a.price;
        const priceB = b.sale.isOnSale ? b.sale.salePrice : b.price;
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high-low') {
      filtered.sort((a, b) => {
        const priceA = a.sale.isOnSale ? a.sale.salePrice : a.price;
        const priceB = b.sale.isOnSale ? b.sale.salePrice : b.price;
        return priceB - priceA;
      });
    }

    return filtered;
  }, [searchTerm, selectedType, selectedMaterial, selectedBrand, selectedRoomType, onSaleOnly, sortBy]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    updateURLParams({
      search: value,
      type: selectedType,
      material: selectedMaterial,
      brand: selectedBrand,
      roomType: selectedRoomType,
      sale: onSaleOnly || undefined,
      sort: sortBy || undefined
    });
  };

  const handleTypeChange = (value) => {
    setSelectedType(value);
    updateURLParams({
      search: searchTerm,
      type: value,
      material: selectedMaterial,
      brand: selectedBrand,
      roomType: selectedRoomType,
      sale: onSaleOnly || undefined,
      sort: sortBy || undefined
    });
  };

  const handleMaterialChange = (value) => {
    setSelectedMaterial(value);
    updateURLParams({
      search: searchTerm,
      type: selectedType,
      material: value,
      brand: selectedBrand,
      roomType: selectedRoomType,
      sale: onSaleOnly || undefined,
      sort: sortBy || undefined
    });
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
    updateURLParams({
      search: searchTerm,
      type: selectedType,
      material: selectedMaterial,
      brand: value,
      roomType: selectedRoomType,
      sale: onSaleOnly || undefined,
      sort: sortBy || undefined
    });
  };

  const handleRoomTypeChange = (value) => {
    setSelectedRoomType(value);
    updateURLParams({
      search: searchTerm,
      type: selectedType,
      material: selectedMaterial,
      brand: selectedBrand,
      roomType: value,
      sale: onSaleOnly || undefined,
      sort: sortBy || undefined
    });
  };

  const handleSaleChange = (value) => {
    setOnSaleOnly(value);
    updateURLParams({
      search: searchTerm,
      type: selectedType,
      material: selectedMaterial,
      brand: selectedBrand,
      roomType: selectedRoomType,
      sale: value || undefined,
      sort: sortBy || undefined
    });
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    updateURLParams({
      search: searchTerm,
      type: selectedType,
      material: selectedMaterial,
      brand: selectedBrand,
      roomType: selectedRoomType,
      sale: onSaleOnly || undefined,
      sort: value || undefined
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setSelectedMaterial('');
    setSelectedBrand('');
    setSelectedRoomType('');
    setOnSaleOnly(false);
    setSortBy('');
    setSearchParams({});
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    updateURLParams({
      search: searchTerm,
      type: selectedType,
      material: selectedMaterial,
      brand: brand,
      roomType: selectedRoomType,
      sale: onSaleOnly || undefined,
      sort: sortBy || undefined
    });
  };

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
    updateURLParams({
      search: searchTerm,
      type: selectedType,
      material: material,
      brand: selectedBrand,
      roomType: selectedRoomType,
      sale: onSaleOnly || undefined,
      sort: sortBy || undefined
    });
  };

  const handleRoomTypeClick = (roomType) => {
    setSelectedRoomType(roomType);
    updateURLParams({
      search: searchTerm,
      type: selectedType,
      material: selectedMaterial,
      brand: selectedBrand,
      roomType: roomType,
      sale: onSaleOnly || undefined,
      sort: sortBy || undefined
    });
  };

  // Handle navigation to item page while preserving current search state
  const handleItemClick = (productId) => {
    // Create the current search URL with all parameters
    const currentSearchUrl = `${location.pathname}?${searchParams.toString()}`;
    
    navigate(`/item/${productId}`, {
      state: { 
        previousSearch: currentSearchUrl 
      }
    });
  };

  return (
    <>
    <div className="container-fluid py-4">

      <SearchJumbotron id="searchJumbotron" />
      <div className="row mb-4 g-3 px-3">
        <div className="col-md-6 col-lg-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search furniture..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <div className="col-md-6 col-lg-2">
          <select className="form-select" value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
            <option value="">All Types</option>
            {types.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <div className="col-md-6 col-lg-2">
          <select className="form-select" value={selectedMaterial} onChange={(e) => handleMaterialChange(e.target.value)}>
            <option value="">All Materials</option>
            {materials.map(material => <option key={material} value={material}>{material}</option>)}
          </select>
        </div>
        <div className="col-md-6 col-lg-2">
          <select className="form-select" value={selectedBrand} onChange={(e) => handleBrandChange(e.target.value)}>
            <option value="">All Brands</option>
            {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
          </select>
        </div>
        <div className="col-md-6 col-lg-2">
          <select className="form-select" value={selectedRoomType} onChange={(e) => handleRoomTypeChange(e.target.value)}>
            <option value="">All Rooms</option>
            {roomTypes.map(roomType => <option key={roomType} value={roomType}>{roomType}</option>)}
          </select>
        </div>
        <div className="col-md-6 col-lg-2">
          <select className="form-select" value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
            <option value="">Sort by</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="row mb-4 g-3 px-3">
        <div className="col-md-6 col-lg-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={onSaleOnly}
              onChange={(e) => handleSaleChange(e.target.checked)}
              id="saleOnly"
            />
            <label className="form-check-label" htmlFor="saleOnly">
              Sale Only
            </label>
          </div>
        </div>
        <div className="col-md-6 col-lg-2">
          <button className="btn searchAddToCartButton w-100" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      <p className="text-muted mb-3 px-3">
        {filteredData.length} result{filteredData.length !== 1 ? 's' : ''} found
      </p>

      <div className="row g-4 px-3">
        {filteredData.map(product => (
          <div key={product.id} className="col-lg-6">
            <div className="card h-100" style={{ cursor: 'pointer' }}>
              <div onClick={() => handleItemClick(product.id)}>
                <img 
                  src={product.image} 
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.name}</h6>
                  <p className="card-text small text-muted">
                    <span 
                      className="searchCardFacet"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBrandClick(product.brand);
                      }}
                    >
                      {product.brand}
                    </span>
                    {' • '}
                    <span 
                      className="searchCardFacet"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMaterialClick(product.material);
                      }}
                    >
                      {product.material}
                    </span>
                  </p>
                  <div className="mb-2">
                    {product.roomType.map(room => (
                      <span 
                        key={room} 
                        className="badge searchRoomBadge me-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRoomTypeClick(room);
                        }}
                      >
                        {room}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div>
                      {product.sale.isOnSale ? (
                        <>
                          <span className="fw-bold text-danger">${product.sale.salePrice}</span>
                          <span className="text-muted text-decoration-line-through ms-2">
                            ${product.price}
                          </span>
                        </>
                      ) : (
                        <span className="fw-bold">${product.price}</span>
                      )}
                    </div>
                    <button 
                      className="btn searchAddToCartButton"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle quick add to cart
                        console.log(`Quick add ${product.name} to cart`);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-5">
          <h5>No furniture found</h5>
          <p>Try adjusting your search or filters.</p>
          <button className="btn searchAddToCartButton" onClick={clearFilters}>Clear Filters</button>
        </div>
      )}
    </div>
    </>
  );
};

export default SearchPage;