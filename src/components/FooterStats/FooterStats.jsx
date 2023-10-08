import React from "react";

function FooterStats(props) {

  // Early return as conditional rendering
  // if there are no items it will simply return the below h2, else the rest calculations will be performed
  if(!props.items.length){
    return(
      <h2 className="stats"><em>Start adding some items to your packing list </em> 🧳</h2>
    )
  }


  // quantity of packed or checked items
  const packedItems = props.items.filter((item) => item.packed).length;

  // quantity of items on list
  const numOfItems = props.items.length;

  // checked list percentage
  const percentage = Math.round((packedItems / numOfItems) * 100);

  return (
    <footer className="stats">
      <em>
      {percentage === 100 ? 'You got everything! Ready to go ✈️' : 
       ` 👜 You have ${numOfItems} items on your list, and you have already packed
        ${packedItems} items (${percentage} %)`
      }
      </em>
    </footer>
  );
}

export default FooterStats;
