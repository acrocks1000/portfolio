"use client";
import { useState } from "react";
import { Navbar } from "@/components/ui/NavBar/navbar";
import LightRays from "@/components/ui/LightRays/lightRays";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="relative text-white min-h-screen">
      {/* Fixed LightRays background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#740580"
          raysSpeed={1.5}
          lightSpread={2}
          rayLength={5}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.5}
          distortion={0.05}
          className="custom-rays w-full h-full"
        />
      </div>
      <div className="fixed top-5 z-20 w-full">
        <Navbar username="Contact" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 px-4 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-[#F2C447] to-[#FF1D68] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-gray-400 text-xl text-center mb-12">
            Have a project in mind? Want to collaborate? Let&apos;s connect and
            discuss how we can work together.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-[#740580] from-opacity-10 to-[#740580] to-opacity-5 border border-[#740580] border-opacity-30 rounded-xl p-8"
          >
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#F2C447]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-[#740580] border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:border-[#F2C447] focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#F2C447]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-[#740580] border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:border-[#F2C447] focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#F2C447]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-[#740580] border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:border-[#F2C447] focus:outline-none transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#F2C447]">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 border border-[#740580] border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:border-[#F2C447] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#F2C447] to-[#FF1D68] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#740580] transition-all"
            >
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>

          {/* Alternative Contact Methods */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-[#740580] border-opacity-30 rounded-lg bg-[#740580] bg-opacity-5 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2 text-[#F2C447]">Email</h3>
              <p className="text-gray-300">contact@example.com</p>
            </div>
            <div className="p-6 border border-[#740580] border-opacity-30 rounded-lg bg-[#740580] bg-opacity-5 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2 text-[#F2C447]">LinkedIn</h3>
              <p className="text-gray-300">linkedin.com/in/yourprofile</p>
            </div>
            <div className="p-6 border border-[#740580] border-opacity-30 rounded-lg bg-[#740580] bg-opacity-5 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2 text-[#F2C447]">Discord</h3>
              <p className="text-gray-300">YourHandle#1234</p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#740580] to-opacity-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FF1D68] to-[#F2C447] bg-clip-text text-transparent">
              Quick Response Time
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I typically respond to inquiries within 24 hours. Whether you have a
            question, project proposal, or just want to say hello, I&apos;d love to
            hear from you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border-l-4 border-[#F2C447] bg-[#F2C447] bg-opacity-5">
              <h3 className="text-xl font-bold text-black mb-2">Available For</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Freelance Projects</li>
                <li>✓ Full-time Positions</li>
                <li>✓ Collaborations</li>
              </ul>
            </div>
            <div className="p-6 border-l-4 border-[#FF1D68] bg-[#FF1D68] bg-opacity-5">
              <h3 className="text-xl font-bold text-[#FF1D68] mb-2">Timezone</h3>
              <ul className="text-gray-300 space-y-2">
                <li>🌍 EST (Eastern Standard Time)</li>
                <li>📅 Monday - Friday, 9AM - 6PM</li>
                <li>⏰ Quick response on weekends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#740580] border-opacity-20 py-8 px-4 text-center text-gray-400">
        <p>&copy; 2026 Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}
