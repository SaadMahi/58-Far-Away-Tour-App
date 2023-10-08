import { useState } from "react";
import SortList from "./SortList/SortList";

function CheckList(props) {


const [pullNewItems, setPullNewItems] = useState([])
console.log(pullNewItems)

  const sortPullItems = function(data){
    setPullNewItems(data);
  }

  return (
    <div className="list">
      <ul>
        {pullNewItems.map((item) => (
          <li key={item.id}>
          <input onChange={() => props.checkBoxHandler(item.id)} type="checkbox" />
          <span style={item.packed ? {textDecoration : 'line-through'} : {}}>
            {item.quantity} {item.description}
            </span>
            <button onClick={() => props.deleteHandler(item.id)}>❌</button>
          </li>
        ))}
      </ul>

          <SortList items={props.newItems}
          pullItems={sortPullItems}
          />

    </div>
  );
}

export default CheckList;
