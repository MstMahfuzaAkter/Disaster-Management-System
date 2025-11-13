import React from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* 🌍 Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold mb-4">
          Disaster Management System
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Together we can save lives and provide quick response in emergencies.
        </p>
        <button
          onClick={() => navigate("/auth/register")}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition"
        >
          Join as Volunteer
        </button>
      </section>

      {/* 📰 Latest News */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Disaster News</h2>
        <p className="text-center text-gray-600 mb-6">
          Stay updated with ongoing disaster situations and awareness reports.
        </p>
        <button
          onClick={() => navigate("/news")}
          className="block mx-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          View All News
        </button>
      </section>

      {/* 🏥 Doctors Section */}
      <section className="bg-white px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Available Doctors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Dr. Rahim", "Dr. Laila", "Dr. Imtiaz"].map((name, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-600 mb-3">Specialist: General Medicine</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Contact
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🤝 Volunteers Section */}
      <section className="px-6 py-12 bg-gradient-to-r from-cyan-50 to-blue-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Volunteers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Ayesha", "Sabbir", "Rafi"].map((volunteer, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-1">{volunteer}</h3>
              <p className="text-gray-600 mb-2">Location: Dhaka</p>
              <p className="text-gray-500">Role: Field Volunteer</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏠 Relief Centers */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Relief Centers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Mirpur Center", "Narayanganj Shelter", "Gazipur Aid Hub"].map((center, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{center}</h3>
              <p className="text-gray-600 mb-3">Open 24/7 for food and shelter</p>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600">
                View on Map
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ☎️ Emergency Contacts */}
      <section className="bg-blue-600 text-white text-center py-10">
        <h2 className="text-3xl font-bold mb-4">Emergency Hotlines</h2>
        <p className="text-lg">🚒 Fire: 999 | 🚑 Ambulance: 16263 | 🚓 Police: 999</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-gray-600">
        © {new Date().getFullYear()} Disaster Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
