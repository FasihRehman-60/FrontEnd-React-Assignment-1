import React from "react";
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
          <textarea
            rows="4"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-md"
        >
          Send Message
        </button>
      </form>

    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-amber-500" />
            <span>Email: <a href="mailto:mirza.fasih99@gmail.com" className="text-amber-600 hover:underline">mirza.fasih99@gmail.com</a></span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-amber-500" />
            <span>WhatsApp: <a href="https://wa.me/923066899891" className="text-amber-600 hover:underline" target="_blank" rel="noreferrer">+92 306 6899891</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
