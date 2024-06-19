import React, { useState } from 'react';
import './SearchFunctionality.css';

interface Product {
  name: string;
  price: number;
  description: string;
}

const SearchFunctionality: React.FC = () => {
  // Static product data array
  const products: Product[] = [
    { name: 'Laptop', price: 1099, description: 'High performance laptop' },
    { name: 'Mobile', price: 199, description: 'Latest model mobile phone' },
    { name: 'Desktop', price: 799, description: 'Powerful desktop computer' },
    { name: 'Mouse', price: 14, description: 'Wireless mouse' },
    { name: 'Keyboard', price: 16, description: 'Mechanical keyboard' },
    { name: 'Headphones', price: 20, description: 'Noise-cancelling headphones' },
  ];

  // State to manage search query and filtered products
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="search-functionality-container">
      <h1 className="task-title">Task 4</h1>
      <h3>Search Functionality</h3>
      <input
        type="text"
        placeholder="Search Product"
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price} $</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchFunctionality;
