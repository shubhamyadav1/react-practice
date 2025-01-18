import { useState, useEffect } from "react";

const ProductList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [title1, setTitle1] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const response1 = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      const json1 = await response1.json();

      const data = json.products[2];
      const data1 = json1[0].title;

      setTitle(data.title);

      setTitle1(data1);
      setDescription(json.products[2].description);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <h1>{title1}</h1>
      <h2>{description}</h2>
      <p>Renders: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
};
export default ProductList;
