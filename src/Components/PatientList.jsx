
import { useState, useEffect } from 'react';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('https://gorest.co.in/public/v1/users')
      .then(response => {
        const patientData = response.data.data.map(patient => ({
          name: patient.name,
          gender: patient.gender,
          age: patient.dob ? getAge(patient.dob) : 'N/A', 
        }));
        setPatients(patientData); 
      })
      .catch(error => console.error('Error fetching patients:', error));
  }, []);

  const getAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Patients</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index} className="flex items-center justify-between p-2 mb-2 bg-white rounded shadow">
            <div>
              <p className="font-medium">{patient.name}</p>
              <p className="text-gray-500">{patient.gender}, {patient.age}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;

