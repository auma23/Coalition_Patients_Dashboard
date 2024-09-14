

// const labResults = ['Blood Tests', 'CT Scans', 'Radiology Reports', 'X-Rays', 'Urine Test'];

// const LabResults = () => {
//   return (
//     <div className="bg-white p-4 rounded shadow w-1/3">
//       <h2 className="text-xl font-bold mb-4">Lab Results</h2>
//       <ul>
//         {labResults.map((result, index) => (
//           <li key={index} className="flex justify-between items-center p-2 border-b">
//             <p>{result}</p>
//             <button className="bg-blue-500 text-white p-1 rounded">Download</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LabResults;

import { useEffect, useState } from 'react';
import axios from 'axios';

const LabResults = ({ patientId }) => {
  const [labResults, setLabResults] = useState([]);

  useEffect(() => {
    if (patientId) {
      axios.get(`https://api.example.com/patients/${patientId}/lab-results`)
        .then(response => {
          setLabResults(response.data.results || []); 
        })
        .catch(error => console.error('Error fetching lab results:', error));
    }
  }, [patientId]);

  return (
    <div className="bg-white p-4 rounded shadow w-1/3">
      <h2 className="text-xl font-bold mb-4">Lab Results</h2>
      <ul>
        {labResults.map((result, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <p>{result.name}</p>
            <button className="bg-blue-500 text-white p-1 rounded">Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
