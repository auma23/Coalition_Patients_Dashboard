

// const diagnostics = [
//   { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
//   { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
  
// ];

// const DiagnosticList = () => {
//   return (
//     <div className="bg-white p-4 rounded shadow w-2/3">
//       <h2 className="text-xl font-bold mb-4">Diagnostic List</h2>
//       <table className="min-w-full table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Problem/Diagnosis</th>
//             <th className="px-4 py-2">Description</th>
//             <th className="px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {diagnostics.map((item, index) => (
//             <tr key={index} className="text-center">
//               <td className="border px-4 py-2">{item.problem}</td>
//               <td className="border px-4 py-2">{item.description}</td>
//               <td className="border px-4 py-2">{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DiagnosticList;

import { useEffect, useState } from 'react';
import axios from 'axios';

const DiagnosticList = ({ patientId }) => {
  const [diagnostics, setDiagnostics] = useState([]);

  useEffect(() => {
    if (patientId) {
      // Replace this URL with the actual endpoint for diagnostic data in your API
      axios.get(`https://gorest.co.in/public/v1/patients/${patientId}/diagnostics`)
        .then(response => {
          // Adjust the response structure based on your API's actual response
          setDiagnostics(response.data.diagnostics || []);
        })
        .catch(error => console.error('Error fetching diagnostics:', error));
    }
  }, [patientId]);

  return (
    <div className="bg-white p-4 rounded shadow w-2/3">
      <h2 className="text-xl font-bold mb-4">Diagnostic List</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Problem/Diagnosis</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{item.problem}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
