export default function Stats({ items }) {
  const ItemCount = items.length;
  const itemChecked = items.filter((item) => item.checked);
  const CheckedCount = itemChecked.length; // Use length to count checked items
  const ItemPercentage = ItemCount === 0 ? 0 : (CheckedCount / ItemCount) * 100;

  return (
    <div className="stats">
      You have to pack {ItemCount} items. {CheckedCount} items are packed, which
      is {Math.round(ItemPercentage)}% of the total.
    </div>
  );
}
