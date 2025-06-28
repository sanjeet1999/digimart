import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />

      <div className="max-h-screen py-12 px-6 sm:px-12">
        <main className="container mx-auto px-6 py-12">

          <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
            Welcome to Digimart
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Digimart is a modern online marketplace designed exclusively for digital services. Whether you're a creator looking to sell your skills or someone in need of high-quality digital work, Digimart connects you with the right people — fast, simple, and secure.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">For Sellers</h2>
            <p className="text-gray-700">
              Turn your expertise into income. From graphic design and content writing to web development and social media marketing, showcase your services and reach clients worldwide. It's easy to create listings, manage orders, and grow your freelance business.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">For Buyers</h2>
            <p className="text-gray-700">
              Need a logo? A blog post? A custom app? Whatever your digital need, find skilled freelancers ready to deliver quality results on time. Browse services, compare prices, and hire confidently — all in one place.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-700">
              At Digimart, our mission is to empower talent and opportunity by making digital service exchange accessible, efficient, and trustworthy for everyone — no matter where they are in the world.
            </p>
          </section>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              Join Digimart today — where creativity meets opportunity.
            </p>
          </div>
        </div>
        </main>
      </div>
      <Footer />
    </>
  );
}