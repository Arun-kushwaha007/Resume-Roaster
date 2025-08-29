function Results({ results }) {
  return (
    <div className="bg-gray-100 p-6 rounded">
      <h2 className="text-xl font-bold mb-2">Analysis Breakdown</h2>
      <ul className="list-disc ml-6">
        {results.sections?.map((sec, idx) => (
          <li key={idx}>{sec}</li>
        ))}
      </ul>
    </div>
  );
}
export default Results;
