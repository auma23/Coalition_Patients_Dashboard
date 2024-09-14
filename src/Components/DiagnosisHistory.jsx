

const DiagnosisHistory = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Diagnosis History</h2>
      <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
        <p>Chart Placeholder</p>
      </div>
      <div className="flex justify-between mb-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold">20 bpm</h3>
          <p>Respiratory Rate</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">98.6°F</h3>
          <p>Temperature</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">78 bpm</h3>
          <p>Heart Rate</p>
        </div>
      </div>
      
    </div>
  );
};

export default DiagnosisHistory;

