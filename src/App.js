import React from "react";
import Product from "./Product";
import productsData from "./climateChangeProducts";

function App() {
  const productComponents = productsData.map(item => <Product product={item} />);
  return (
  <div>{ productComponents }</div>
  )
}

export default App;
