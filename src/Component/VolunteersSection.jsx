import React from "react";
import { FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const VolunteersSection = () => {
  const volunteers = [
    {
      name: "Ayesha Rahman",
      location: "Dhaka",
      role: "Medical Volunteer",
      phone: "+8801789-123456",
      email: "ayesha@dms.org",
      bio: "Provides on-ground medical support and emergency first aid to disaster victims, ensuring timely healthcare in crisis zones.",
    },
    {
      name: "Sabbir Ahmed",
      location: "Narayanganj",
      role: "Rescue Team Lead",
      phone: "+8801723-987654",
      email: "sabbir@dms.org",
      bio: "Coordinates rescue operations and ensures safe evacuation of affected families during floods and storms.",
    },
    {
      name: "Rafi Hasan",
      location: "Gazipur",
      role: "Logistics Coordinator",
      phone: "+8801755-567890",
      email: "rafi@dms.org",
      bio: "Manages supply chains and relief materials, ensuring every community receives aid without delay.",
    },
    {
      name: "Farhana Akter",
      location: "Chittagong",
      role: "Community Outreach",
      phone: "+8801799-112233",
      email: "farhana@dms.org",
      bio: "Connects with local communities, spreading awareness and helping coordinate relief efforts efficiently.",
    },
    {
      name: "Imran Hossain",
      location: "Sylhet",
      role: "Field Volunteer",
      phone: "+8801711-223344",
      email: "imran@dms.org",
      bio: "Supports on-ground disaster response by distributing food, water, and essential supplies to affected families.",
    },
    {
      name: "Nadia Karim",
      location: "Khulna",
      role: "Medical Assistant",
      phone: "+8801733-445566",
      email: "nadia@dms.org",
      bio: "Assists medical teams in hospitals and field clinics, ensuring proper care for all affected individuals.",
    },
    {
      name: "Shakib Al Hasan",
      location: "Barisal",
      role: "Rescue Volunteer",
      phone: "+8801755-667788",
      email: "shakib@dms.org",
      bio: "Participates in rescue missions during floods and cyclones, helping people evacuate safely.",
    },
    {
      name: "Tania Islam",
      location: "Rajshahi",
      role: "Communication Lead",
      phone: "+8801777-889900",
      email: "tania@dms.org",
      bio: "Handles coordination and communication among volunteers and relief teams for smooth operations.",
    },
    {
      name: "Fahim Chowdhury",
      location: "Mymensingh",
      role: "Logistics Assistant",
      phone: "+8801788-990011",
      email: "fahim@dms.org",
      bio: "Helps transport and manage relief supplies efficiently to disaster-affected areas.",
    },
    {
      name: "Rumana Akter",
      location: "Comilla",
      role: "Volunteer Coordinator",
      phone: "+8801790-112244",
      email: "rumana@dms.org",
      bio: "Organizes volunteer teams and ensures everyone is assigned tasks for maximum impact.",
    },
    {
      name: "Sohan Mahmud",
      location: "Tangail",
      role: "Field Medic",
      phone: "+8801712-334455",
      email: "sohan@dms.org",
      bio: "Provides emergency medical care on-site during disaster response missions.",
    },
    {
      name: "Laila Chowdhury",
      location: "Pabna",
      role: "Community Helper",
      phone: "+8801734-556677",
      email: "laila@dms.org",
      bio: "Supports vulnerable families with essential supplies and emotional support during disasters.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-blue-50 via-cyan-50 to-white">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
        Our Dedicated Volunteers 🌟
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Meet the brave souls behind our disaster management efforts — 
        the ones who step forward when everyone else steps back.  
        Their courage, compassion, and dedication make all the difference.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {volunteers.map((v, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{v.name}</h3>
            <p className="text-blue-600 font-medium mb-1">{v.role}</p>
            <p className="text-gray-500 mb-2">📍 {v.location}</p>
            <p className="text-gray-600 text-sm italic mb-4">{v.bio}</p>

            <div className="flex items-center justify-start gap-4 text-gray-600 text-lg mb-4">
              <a href={`tel:${v.phone}`} className="hover:text-blue-500" title="Call">
                <FaPhoneAlt />
              </a>
              <a href={`mailto:${v.email}`} className="hover:text-blue-500" title="Email">
                <FaEnvelope />
              </a>
              <a href="#" className="hover:text-blue-500" title="Facebook">
                <FaFacebook />
              </a>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transition">
              Contact Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteersSection;
