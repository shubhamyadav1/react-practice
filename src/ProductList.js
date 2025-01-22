import React, { useState, useEffect } from "react";

const ProductListWithPagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 30;

  const fetchData = async (page) => {
    try {
      setLoading(true); // Show loading text while fetching data
      const response = await fetch(
        `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
          (page - 1) * itemsPerPage
        }`
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false); // Hide loading text once data is fetched
    }
  };

  useEffect(() => {
    fetchData(currentPage); // Fetch products for the current page
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(194 / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(194 / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListWithPagination;
