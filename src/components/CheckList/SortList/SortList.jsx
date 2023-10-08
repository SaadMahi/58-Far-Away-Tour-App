import React, { useState } from "react";

function SortList(props) {
  const [sortBy, setSortBy] = useState("description");

  //   now to sort accordingly we have to create new items, we won't be manipulating  the original items
  let newItems = props.items;

//   console.log(newItems)

  let sortedItems;

  if(sortBy === 'input') sortedItems = newItems;
  if(sortBy === 'description') sortedItems = newItems.sort((a, b) =>  a.description.localeCompare(b.description));
  if(sortBy === 'packed') sortedItems = newItems.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    console.log(sortedItems)
    props.pullItems(sortedItems)

  

  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
    </div>
  );
}

export default SortList;
