import React from "react";

function Pizza({ pizza, handleEdit}) { 
  const { topping, size, vegetarian } = pizza

  function handleEdit() {
    console.log("click");
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian" : "Non-Vegetarian"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEdit}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
