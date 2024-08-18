import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  const toggleCart = () => {
    setIsInCart(!isInCart);
  };
  const liClassName = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
