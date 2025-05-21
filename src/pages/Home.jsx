import React from "react";
import Cube3D from "../components/Cube3D";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-blue-900">
      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Building infrastructure together,<br />
          solving every difficulty.
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Welcome to our website. We provide modern solutions for blockchain and infrastructure projects with a warm and professional approach.
        </p>
        <Cube3D />
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-white via-blue-50 to-white rounded-lg p-10 mb-16 shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
          At our core, we believe in collaboration and innovation. Our mission is to empower the blockchain ecosystem by building robust, scalable, and secure infrastructure. With years of experience and a dedicated team, we turn challenges into opportunities and dreams into realities.
        </p>
      </section>

      {/* Features / Services */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Node Hosting</h3>
            <p className="text-gray-600">
              Reliable, secure node hosting with 99.99% uptime and global coverage. Manage your blockchain nodes with ease and confidence.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Validator Support</h3>
            <p className="text-gray-600">
              Comprehensive validator setup and monitoring services to maximize your staking rewards and ensure network participation.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Custom Infrastructure</h3>
            <p className="text-gray-600">
              Tailored infrastructure solutions for projects at any scale. From testnets to mainnets, we’ve got your back.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-100 rounded-lg p-10 mb-20 shadow-inner">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">What Our Clients Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <blockquote className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-800">
              "Thanks to their excellent node hosting services, our blockchain infrastructure runs smoothly without any downtime."
            </p>
            <footer className="mt-4 text-right text-sm font-semibold text-blue-700">— Alex Johnson, CEO BlockchainCo</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-800">
              "Professional, reliable, and easy to work with. Their validator support helped us boost our staking rewards dramatically."
            </p>
            <footer className="mt-4 text-right text-sm font-semibold text-blue-700">— Maya Lee, Founder CryptoProject</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-6">Ready to build your blockchain infrastructure?</h2>
        <p className="mb-8 text-gray-700 max-w-xl mx-auto">
          Join dozens of projects that trust us to handle their critical infrastructure needs.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}
