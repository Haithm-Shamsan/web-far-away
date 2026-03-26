export function Item({ item, onItemDeleted, onItemChecked }) {
  return (
    <li>
      <input
        id={item.id}
        type="checkbox"
        checked={item.checked} // Use checked prop for checkbox
        onChange={() => onItemChecked(item.id)} // onChange is better for checkboxes
      />
      <span>{item.quantity}</span>
      <span className={item.checked ? "checked-item" : ""}>
        {item.description}
      </span>
      <button onClick={() => onItemDeleted(item.id)}>❌</button>
    </li>
  );
}
