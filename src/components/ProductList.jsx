import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * ProductList component fetches and displays a list of products.
 * Each product is displayed with an image, title, and price.
 * Clicking on a product navigates to the product's detail page.
 */
const ProductList = () => {
  // State to store the list of products
  const [products, setProducts] = useState([]);

  // Fetch the list of products when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-4 bg-blue-500">
      <h1 className="text-3xl font-bold mb-1 text-white">Fayemi Michael Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id} 
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
