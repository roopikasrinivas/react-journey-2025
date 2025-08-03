export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list</em>
      </footer>
    );
  const packedItems = items.reduce(
    (acc, item) => acc + (item.packed ? 1 : 0),
    0
  );
  const packedItemsPercent = Math.round((packedItems / items.length) * 100);
  console.log(packedItems);
  return (
    <footer className="stats">
      <em>
        {packedItemsPercent === 100
          ? "You have got everything! Ready to go"
          : ` 🧳 You have ${items.length} items on your list, and you already packed ${packedItems} (${packedItemsPercent}%) items`}
      </em>
    </footer>
  );
}
