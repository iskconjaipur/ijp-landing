import React from "react";
import { Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#D9A55B] mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-10 text-lg">
          For bookings, assistance, or queries – we’re happy to serve you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-3xl mx-auto">
        {/* Reception Card */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl shadow-md w-full md:w-[300px] h-[200px] flex flex-col justify-center items-center text-center p-6">
          <h3 className="text-lg font-semibold text-purple-700 flex items-center gap-2">
            <Phone size={18} className="text-purple-700" />
            Reception (24x7)
          </h3>
          <div className="text-gray-800 leading-relaxed mt-4 text-base">
            <p className="font-bold">+91-8905601443</p>
            <p className="font-bold mt-1">0141-4515032</p>
          </div>
        </div>

        {/* Reservation Card */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl shadow-md w-full md:w-[300px] h-[200px] flex flex-col justify-center items-center text-center p-6">
          <h3 className="text-lg font-semibold text-yellow-700 flex items-center gap-2">
            <Phone size={18} className="text-yellow-700" />
            Room Reservations 
          </h3>
          <div className="text-gray-800 leading-relaxed mt-4 text-base">
            <p className="font-bold">+91-8905661443</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-xl text-green-700 font-medium">Hare Krishna 🙏</p>
        <p className="text-gray-600 mt-1">ISKCON Jaipur Guest House</p>
      </div>
    </section>
  );
}
