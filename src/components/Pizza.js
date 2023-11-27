import React from "react";

function Pizza({ pizza, handlePizzaEdit }) { 
  const { topping, size, vegetarian } = pizza

  function handleButtonClick () {
    console.log('click');
    handlePizzaEdit(pizza)
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian" : "Non-Vegetarian"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
