import { useState, useEffect } from "react";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productDetails();
  }, []);

  const productDetails = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();
    console.log(json.products);
    setProducts(json.products);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <b>Product No: {product.id}</b>
          <p>Title: {product.title}</p>
          <img
            src={product.images[0]}
            alt={product.title}
            height={150}
            width={200}
          />
          <p>Description{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Tags: {product.tags.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
