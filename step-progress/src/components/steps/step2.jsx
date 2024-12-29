import React, { useState } from 'react';
import dashboard from '../../assets/img/dashboard.png';

const Step2 = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (option) => {
    setSelectedOption(option);
    onSelect(option); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 rounded-xl p-8">
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-6 space-x-60 md:space-y-0">
        {/* Add Restaurant Option */}
        <div
          className={`flex flex-col items-center shadow-lg text-red-600 text-xl rounded-2xl bg-white w-64 h-64 p-4 justify-between cursor-pointer ${
            selectedOption === "addRestaurant" ? "border-2 border-red-600" : ""
          }`}
          onClick={() => handleSelection("addRestaurant")}
        >
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-3">
              <img src={dashboard} alt="Add Restaurant" className="w-16 h-16" />
            </div>
            <p className="text-red-600 text-lg font-semibold">
              Add Your Restaurant
            </p>
          </div>
        </div>

        {/* Get Access to My Restaurant Option */}
        <div
          className={`flex flex-col items-center shadow-lg text-red-600 text-xl rounded-2xl bg-white w-64 h-64 p-4 justify-between cursor-pointer ${
            selectedOption === "getAccess" ? "border-2 border-red-600" : ""
          }`}
          onClick={() => handleSelection("getAccess")}
        >
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-3">
              <img src={dashboard} alt="Get Access" className="w-16 h-16" />
            </div>
            <p className="text-red-600 text-lg font-semibold">
              Get Access to My Restaurant
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Step2;
