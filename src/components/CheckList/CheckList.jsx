/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SortList from "./SortList/SortList";

// eslint-disable-next-line react/prop-types
function CheckList({ newItems, checkBoxHandler, deleteHandler }) {
  const [pullNewItems, setPullNewItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  useEffect(() => {
    const sortedItemHandler = () => {
      let sortedItems = [...newItems];

      if (sortBy === "input") sortedItems = newItems;
      if (sortBy === "description")
        sortedItems = newItems.sort((a, b) =>
          a.description.localeCompare(b.description)
        );
      if (sortBy === "packed")
        sortedItems = newItems.slice().sort((a, b) => {
          return Number(a.packed) - Number(b.packed);
        });
      setPullNewItems(sortedItems);
    };

    sortedItemHandler();
  }, [newItems, sortBy]);

  return (
    <div className="list">
      <ul>
        {pullNewItems.map((item) => (
          <li key={item.id}>
            <input onChange={() => checkBoxHandler(item.id)} type="checkbox" />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => deleteHandler(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      <SortList setSortBy={setSortBy} />
    </div>
  );
}

export default CheckList;
