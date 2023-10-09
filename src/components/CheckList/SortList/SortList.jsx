/* eslint-disable react/prop-types */

function SortList({ setSortBy }) {
  return (
    <div className="actions">
   
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
    </div>
  );
}

export default SortList;