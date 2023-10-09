import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import CheckList from "./components/CheckList/CheckList";
import FooterStats from "./components/FooterStats/FooterStats";
import "./App.css";
import { useState } from "react";

// inital items on CheckList
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Laptop", quantity: 1, packed: false },
  { id: 3, description: "Mobile", quantity: 2, packed: false },
  { id: 4, description: "Food", quantity: 1, packed: false },

];

function App() {
  
  // pulled new items from Form.jsx to push in CheckList.jsx
  const [newItems, setNewItems] = useState(initialItems);
  // console.log(newItems)


  // delete ❌ items handler
  function deleteItems(id) {
    setNewItems(newItems.filter((items) => items.id !== id));
  }

  // checkbox handler to line-through checked input
  function checkBoxHandler(id){
    setNewItems(newItems.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  return (
    <div className="app">
      <Header />

      <Form description={initialItems} items={setNewItems} />

      <CheckList
        description={initialItems}
        newItems={newItems}
        deleteHandler={deleteItems}
        checkBoxHandler={checkBoxHandler}
      />

      <FooterStats items={newItems}/>
    </div>
  );
}

export default App;
