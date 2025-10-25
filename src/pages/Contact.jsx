import React, { useContext, useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

const Contact = () => {
    const { user } = useContext(AuthContext); 
    const db = getFirestore();

    const [formData, setFormData] = useState({
        name: user?.displayName || "",
        email: user?.email || "",
        message: ""
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            await addDoc(collection(db, "contactMessages"), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                createdAt: serverTimestamp()
            });
            setSuccess("Message sent successfully!");
            setFormData((prev) => ({ ...prev, message: "" }));
        } catch (err) {
            setError("Failed to send message. Please try again.");
            console.error(err);
        }
    };

    const emergencyContacts = [
        { title: "Police Emergency Hotline", number: "119/118" },
        { title: "Ambulance / Fire & Rescue", number: "110" },
        { title: "Accident Service - General Hospital Colombo", number: "011-2691111" },
        { title: "Police Emergency", number: "011-2433333" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:space-x-12">
                
                {/* Left Section: Emergency Contacts */}
                <div className="w-full lg:w-1/3 bg-red-500 rounded-xl shadow-xl p-4 sm:p-6 mb-10 lg:mb-0">
                    <h2 className="text-3xl font-bold text-white text-center mb-6 py-2 border-b border-red-400">
                        Emergency Contacts
                    </h2>
                    <div className="space-y-4">
                        {emergencyContacts.map((contact, index) => (
                            <a 
                                key={index} 
                                href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                                className="block bg-red-400 hover:bg-red-300 transition duration-200 rounded-lg p-4 text-center cursor-pointer shadow-md"
                            >
                                <p className="text-lg font-semibold text-white">{contact.title}</p>
                                <p className="text-3xl font-extrabold text-white mt-1">{contact.number}</p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Section: Contact Us Form */}
                <div className="w-full lg:w-2/3">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
                    
                    <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-inner">
                        {success && <p className="text-green-600 mb-4">{success}</p>}
                        {error && <p className="text-red-600 mb-4">{error}</p>}

                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    placeholder="Your message..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600 transition duration-300 shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="mt-8 text-sm text-gray-700">
                        <p className="mb-2">If you have any queries, feel free to contact us via email or phone.</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><span className="font-semibold">Email:</span> alert.warmhands@gmail.com</li>
                            <li><span className="font-semibold">Phone:</span> 011-1234567</li>
                            <li><span className="font-semibold">Address:</span> 123 Main Street, Colombo, Sri Lanka</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
