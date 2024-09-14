

const labResults = ['Blood Tests', 'CT Scans', 'Radiology Reports', 'X-Rays', 'Urine Test'];

const LabResults = () => {
  return (
    <div className="bg-white p-4 rounded shadow w-1/3">
      <h2 className="text-xl font-bold mb-4">Lab Results</h2>
      <ul>
        {labResults.map((result, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <p>{result}</p>
            <button className="bg-blue-500 text-white p-1 rounded">Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;

