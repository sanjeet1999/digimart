import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });

    try {
      const resp = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginEMail: email, Password: password })
      });

      const loginData = await resp.json();
      console.log("Login response:", loginData);

      if (!resp.ok) {
        // Log error message to console instead of showing toast
        const errorMessage = loginData.message || "Login failed";
        console.error("Error during login:", errorMessage);
        return;
      }

      if (loginData.success) {
        console.log("Success:", loginData.message);
        // Redirect logic can go here later (optional)
      }

    } catch (err) {
      console.error("Network or server error:", err);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              style={{ backgroundColor: '#3B82F6' }} // Tailwind's blue-500
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}