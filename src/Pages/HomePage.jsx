
import PatientList from '../Components/PatientList';
import DiagnosisHistory from '../Components/DiagnosisHistory';
import PatientInfo from '../Components/PatientInfo';
import DiagnosticList from '../Components/DiagnosticList';
import LabResults from '../Components/LabResults';

const HomePage = () => {
  return (
    <div className="flex">
      {/* Left sidebar: Patient List */}
      <div className="w-1/4 h-screen overflow-y-scroll bg-gray-100">
        <PatientList />
      </div>
      {/* Main content */}
      <div className="w-3/4 p-4 flex flex-col space-y-4">
        <DiagnosisHistory />
        <div className="flex space-x-4">
          <DiagnosticList />
          <LabResults />
        </div>
        <PatientInfo />
      </div>
    </div>
  );
};

export default HomePage;

