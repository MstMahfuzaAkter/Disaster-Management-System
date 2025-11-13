// components/SafetyTips.jsx
import React from "react";
import { FaFire, FaWater, FaBolt, FaFirstAid } from "react-icons/fa";

const iconMap = {
  fire: <FaFire className="text-red-500 w-6 h-6" />,
  flood: <FaWater className="text-blue-500 w-6 h-6" />,
  storm: <FaBolt className="text-yellow-500 w-6 h-6" />,
  medical: <FaFirstAid className="text-green-500 w-6 h-6" />,
};

// Expanded tips (~200 words each)
const defaultTips = [
  {
    type: "fire",
    message: `Fire safety is one of the most important aspects of maintaining a secure home or workplace. It is crucial to have a fire extinguisher installed in easily accessible areas, and everyone in the household should know how to operate it in case of an emergency. Additionally, smoke detectors should be checked regularly to ensure they are functioning properly. Keep flammable materials away from heat sources, and never leave candles or stoves unattended. Create and practice a fire evacuation plan with all members of your family, ensuring everyone knows at least two ways to exit each room safely. During a fire, stay low to the ground to avoid smoke inhalation, and call emergency services immediately. Remember, prevention is always better than cure, so educating yourself and your loved ones about fire hazards can save lives.`
  },
  {
    type: "flood",
    message: `Floods can occur suddenly and with devastating consequences. It is essential to monitor local weather reports and flood warnings issued by authorities. During heavy rain or in flood-prone areas, always have an emergency kit ready with essential items such as drinking water, non-perishable food, a flashlight, batteries, important documents, and first aid supplies. Move valuable belongings to higher ground and, if instructed to evacuate, leave your home immediately while following designated evacuation routes. Avoid walking, swimming, or driving through floodwaters, as even shallow water can be extremely dangerous and can sweep you away. Stay informed via radio, TV, or official online sources for updates on water levels and relief efforts. After a flood, ensure your home is safe before reentering, and avoid contact with contaminated water to prevent illness. Preparing in advance and staying alert can greatly reduce the risks associated with floods.`
  },
  {
    type: "storm",
    message: `Storms, including thunderstorms and hurricanes, can cause severe damage and pose serious risks to personal safety. It is vital to stay indoors and away from windows during a storm to prevent injury from flying debris. Secure outdoor furniture and objects that could become projectiles in high winds. Keep emergency supplies ready, including water, food, flashlights, batteries, a first aid kit, and a fully charged mobile phone. Avoid using electrical appliances and plumbing during lightning storms, as these can conduct electricity. Follow official weather updates and heed evacuation orders if issued. After the storm, be cautious of fallen power lines, broken glass, and flooded areas. Check on neighbors and assist those in need, especially the elderly or disabled. Staying informed, prepared, and cautious can make a critical difference in ensuring the safety of yourself and your loved ones during severe weather events.`
  },
  {
    type: "medical",
    message: `Medical emergencies can happen unexpectedly, so being prepared is essential for safeguarding health and saving lives. A well-stocked first aid kit should be easily accessible and contain bandages, antiseptics, scissors, gloves, medications, and other essential items. Everyone in the household should know basic first aid procedures such as CPR, wound care, and how to manage choking incidents. Familiarize yourself with local emergency numbers and have a plan for quickly reaching medical assistance. Maintaining a healthy lifestyle, including proper nutrition, exercise, and regular medical checkups, can also reduce the risk of emergencies. In case of serious injuries or sudden illness, remain calm, assess the situation, and provide necessary first aid while waiting for professional help. Knowledge, preparation, and calm action during medical emergencies can significantly improve outcomes and save lives.`
  }
];

const SafetyTips = ({ tips = defaultTips }) => {
  if (tips.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No safety tips available at the moment.
      </p>
    );
  }

  return (
    <div className="p-6 bg-gray-50">
      {/* Big Heading */}
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Disaster Safety Tips
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              {iconMap[tip.type] || <FaFirstAid className="text-gray-500 w-6 h-6" />}
              <p className="text-lg font-semibold text-gray-900">{tip.type.toUpperCase()}</p>
            </div>
            <div>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">{tip.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyTips;
