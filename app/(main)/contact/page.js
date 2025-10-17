"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! We received your message.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 py-12">
      <div className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-green-100">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-green-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border border-green-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <textarea
            placeholder="Your Message"
            className="border border-green-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <button
            type="submit"
            className="bg-green-600 text-white font-medium py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
