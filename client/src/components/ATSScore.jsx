function ATSScore({ score }) {
  return (
    <div className="bg-green-100 p-6 rounded text-center">
      <h2 className="text-xl font-bold">ATS Score</h2>
      <p className="text-lg">{score}% compatibility</p>
    </div>
  );
}
export default ATSScore;
