const PatientInfo = () => {
  return (
    <div className="bg-white p-4 rounded shadow w-1/3">
      <h2 className="text-xl font-bold mb-4">Jessica Taylor</h2>
      <p className="mb-2">Date of Birth: August 23, 1996</p>
      <p className="mb-2">Gender: Female</p>
      <p className="mb-2">Contact: (415) 555-1234</p>
      <p className="mb-2">Emergency Contact: (415) 555-5678</p>
      <p className="mb-2">Insurance: Sunrise Health Assurance</p>
      <button className="bg-blue-500 text-white p-2 rounded">Show All Information</button>
    </div>
  );
};

export default PatientInfo;

