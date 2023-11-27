import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas ] = useState([])
  const [selectedPizza, setSelectedPizza] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(data => setPizzas(data))
  }, [])

  function handlePizzaEdit(pizzaToEdit) {
    setSelectedPizza(pizzaToEdit)
  }

  function handleChangeForm(name, value) {
    setSelectedPizza(prevPizza => ({
      ...prevPizza,
      [name]: name === 'vegetarian' ? value === 'Vegetarian' : value,
    }));
  }

  function handleFormSubmit(updatedPizza) {
    const updatedPizzas = pizzas.map(pizza =>
      pizza.id === updatedPizza.id ? updatedPizza : pizza
    )
    setSelectedPizza(updatedPizza)
    setPizzas(updatedPizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={selectedPizza} onChangeForm={handleChangeForm} onFormSubmit={handleFormSubmit} />
      <PizzaList pizzas={pizzas} handlePizzaEdit={handlePizzaEdit} />
    </>
  );
}

export default App;
