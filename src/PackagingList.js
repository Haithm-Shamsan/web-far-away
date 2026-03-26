import { useState } from "react";
import { Item } from "./Item";

export function PackagingList({ items, onItemDeleted, onItemChecked, Reset }) {
  const [sortBy, setSortBy] = useState("input");
  let SortedItems;
  if (sortBy === "input") {
    SortedItems = items;
  }

  if (sortBy === "description") {
    SortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "checked") {
    SortedItems = items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));
  }

  return (
    <div className="list">
      <ul>
        {SortedItems.map((item) => (
          <Item
            key={item.id} // Add a key prop for better React rendering
            item={item}
            onItemDeleted={onItemDeleted}
            onItemChecked={onItemChecked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>sort by input</option>
          <option value={"description"}>sort by description</option>
          <option value={"checked"}>sort by Checked</option>
        </select>{" "}
      </div>{" "}
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
