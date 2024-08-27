import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/**
 * ProductDetail component fetches and displays details of a specific product.
 * It also provides buttons to add the product to the cart and to close the detail view.
 */
const ProductDetail = () => {
  // Extract the product ID from the URL parameters
  const { id } = useParams();
  // Hook to navigate programmatically
  const navigate = useNavigate();
  // State to store the product details
  const [product, setProduct] = useState(null);

  // Fetch product details when the the ID changes
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  // Show a loading message until the product details are fetched
  if (!product) return <div>Loading...</div>;

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    alert('Added to cart!');
  };

  // Handle closing the product detail view and navigating back to the previous page
  const handleClose = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <img src={product.image} alt={product.title} className="w-100 h-60 object-cover" />
      </div>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-gray-500">Category: {product.category}</p>
      <div className="fixed left-0 right-0 flex justify-center gap-4 p-4 bg-white shadow-md">
        <button 
          onClick={handleAddToCart} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
        <button 
          onClick={handleClose} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
