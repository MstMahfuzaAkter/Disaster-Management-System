import React from "react";

const emergencyNumbers = [
  // 🚨 Core Emergency Services
  { service: "Fire Service & Rescue", number: "199" },
  { service: "Police", number: "100" },
  { service: "Ambulance", number: "999" },
  { service: "Road Accident & Emergency", number: "16663" },

  // 🏥 Health / Hospitals
  { service: "National Institute of Cardiovascular Diseases", number: "+880 2 5500 3434" },
  { service: "Dhaka Medical College Hospital", number: "+880 2 9660 2100" },
  { service: "ICU & Trauma Hotline", number: "106" },

  // 🌊 Disaster & Relief
  { service: "Department of Disaster Management", number: "+880 2 5500 9999" },
  { service: "Bangladesh Red Crescent Society", number: "+880 2 5566 2233" },
  { service: "Cyclone / Flood Info Hotline", number: "1091" },

  // 💧 Utilities & Public Safety
  { service: "Gas Emergency", number: "1099" },
  { service: "Electricity Emergency", number: "16203" },
  { service: "Water & Sanitation Emergency", number: "16221" },

  // 👮‍♀️ Specialized Helplines
  { service: "Women & Children Helpline", number: "109" },
  { service: "Child Helpline (Save the Children)", number: "1098" },
  { service: "Domestic Violence Helpline", number: "109" },

  // 🆘 NGOs & Support
  { service: "BRAC Disaster Response", number: "+880 2 9881 6000" },
  { service: "Caritas Bangladesh", number: "+880 2 222 557506" },
  { service: "Grameen Telecom Disaster Support", number: "+880 171 000 0000" },
];

const EmergencyNumbers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        ☎️ Bangladesh Emergency & Helpline Numbers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {emergencyNumbers.map((item, index) => (
          <div
            key={index}
            className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-red-700 dark:text-red-300 mb-2">
              {item.service}
            </h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
              {item.number}
            </p>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-6 text-sm">
        Keep these numbers handy during disasters and emergencies.
      </p>
    </div>
  );
};

export default EmergencyNumbers;
