

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendar, faEnvelope, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Tech.Care" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-teal-600 ml-2">Tech.Care</span>
        </div>

        <ul className="flex items-center space-x-8 text-gray-600">
          <li>
            <NavLink
              to="/overview"
              className={({ isActive }) => 
                isActive ? "text-teal-600 font-semibold" : "hover:text-teal-600 transition"
              }
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/patients"
              className={({ isActive }) => 
                isActive ? "text-teal-600 font-semibold" : "hover:text-teal-600 transition"
              }
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Patients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schedule"
              className={({ isActive }) => 
                isActive ? "text-teal-600 font-semibold" : "hover:text-teal-600 transition"
              }
            >
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/message"
              className={({ isActive }) => 
                isActive ? "text-teal-600 font-semibold" : "hover:text-teal-600 transition"
              }
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Message
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) => 
                isActive ? "text-teal-600 font-semibold" : "hover:text-teal-600 transition"
              }
            >
              <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
              Transactions
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img
              src="/src/assets/doc.jpg"
              alt="Dr. Jose Simmons"
              className="h-10 w-10 rounded-full border-2 border-teal-600"
            />
            <span className="ml-2 text-gray-600">Dr. Jose Simmons</span>
          </div>
          <button className="focus:outline-none">
            <svg
              className="h-6 w-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v12M6 12h12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
