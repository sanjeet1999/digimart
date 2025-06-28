import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div 
        className="max-h-screen bg-cover bg-center relative">

        <main className="relative container mx-auto px-6 py-10">
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-blue-600">Welcome to DigiMart</h2>
            <p className="text-lg text-gray-700 mb-6">
            DigiMart is your one-stop digital marketplace for premium software, eBooks, digital art,
            and much more. Whether you're a customer looking to buy high-quality digital products, or a
            seller eager to share your creations with the world — we’ve got you covered.
            </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2 text-blue-500">For Buyers</h3>
              <p className="text-gray-600">
                Browse and purchase a wide range of digital goods including software tools, design assets,
                educational eBooks, and exclusive digital art from trusted sellers across the globe.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2 text-green-500">For Sellers</h3>
              <p className="text-gray-600">
                Start selling your digital products effortlessly. Upload your content, manage your store,
                and reach thousands of potential buyers. We handle payments and secure delivery so you can
                focus on creating.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/signup"
              className="inline-block bg-blue-200 text-green px-6 py-3 rounded-lg font-medium hover:bg-blue-300 transition"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </main>
      </div>
      <Footer />
    </>
  );
}
