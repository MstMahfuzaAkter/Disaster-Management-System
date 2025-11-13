import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Rahim Hossain",
      specialty: "General Medicine",
      phone: "+8801788-111222",
      email: "rahim@dms.org",
      bio: "Experienced in general healthcare, providing consultations and treatment for all age groups.",
    },
    {
      name: "Dr. Laila Akter",
      specialty: "Cardiology",
      phone: "+8801788-333444",
      email: "laila@dms.org",
      bio: "Specialist in heart-related conditions, conducting check-ups and emergency care during crises.",
    },
    {
      name: "Dr. Imtiaz Karim",
      specialty: "Pediatrics",
      phone: "+8801788-555666",
      email: "imtiaz@dms.org",
      bio: "Cares for children, offering medical support and guidance to families in disaster-hit areas.",
    },
    {
      name: "Dr. Nadia Chowdhury",
      specialty: "Emergency Medicine",
      phone: "+8801788-777888",
      email: "nadia@dms.org",
      bio: "Provides urgent medical assistance and triage services in disaster zones.",
    },
    {
      name: "Dr. Shakib Al Hasan",
      specialty: "Surgery",
      phone: "+8801788-999000",
      email: "shakib@dms.org",
      bio: "Skilled in emergency and trauma surgeries, assisting patients during critical situations.",
    },
    {
      name: "Dr. Farhana Islam",
      specialty: "Gynecology",
      phone: "+8801788-112233",
      email: "farhana@dms.org",
      bio: "Supports women and maternal health in crisis-affected regions.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-blue-50 via-cyan-50 to-white">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
        Our Expert Doctors 🩺
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Meet our dedicated medical professionals who provide essential healthcare 
        services during disasters. Their expertise saves lives and brings hope to communities.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{doc.name}</h3>
            <p className="text-blue-600 font-medium mb-1">{doc.specialty}</p>
            <p className="text-gray-600 text-sm italic mb-3">{doc.bio}</p>

            {/* Contact Info */}
            <div className="flex items-center justify-start gap-4 text-gray-600 text-lg mb-4">
              <a href={`tel:${doc.phone}`} className="hover:text-blue-500" title="Call">
                <FaPhoneAlt />
              </a>
              <a href={`mailto:${doc.email}`} className="hover:text-blue-500" title="Email">
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

export default DoctorsSection;
