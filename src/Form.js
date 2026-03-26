import { useState } from "react";

export function Form({ onItemSubmit }) {
  const [description, setDescription] = useState("");
  const [option, setOption] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      description: description,
      quantity: option,
      checked: false, // Use checked instead of chacked
      id: Math.random(),
    };

    onItemSubmit(newItem);
    setDescription("");
    setOption(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip❔</h3>
      <select value={option} onChange={(e) => setOption(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add Item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
