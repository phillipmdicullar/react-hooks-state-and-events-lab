import React , { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
   const [darkMode, setIsDarkMode] = useState(false);


  // this will be used for the Dark Mode Toggle feature
  const toggleMode = () => {
    setIsDarkMode(!darkMode); // Toggles between true and false
  };

  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;