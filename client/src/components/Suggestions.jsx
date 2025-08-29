function Suggestions({ suggestions }) {
  return (
    <div className="bg-yellow-100 p-6 rounded">
      <h2 className="text-xl font-bold mb-2">Suggestions</h2>
      <ul className="list-disc ml-6">
        {suggestions?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
export default Suggestions;
