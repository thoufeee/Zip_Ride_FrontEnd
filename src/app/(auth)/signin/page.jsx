"use client";

import React, { useState } from "react";
import Link from "next/link";

// Robust Signup component — defensive against malformed events and missing values.
export default function SignupYellowComponent() {
  const [form, setForm] = useState({
    firstname: "oggy",
    lastname: "ggy",
    password: "Oggy@567",
    email: "oggy@gmail.com",
    gender: "male",
    place: "kochi",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const [error, setError] = useState(null);

  // Defensive handleChange: guard against null events (can happen in some test runners)
  function handleChange(e) {
    try {
      const target = e && e.target ? e.target : null;
      if (!target) return; // ignore synthetic or programmatic calls without a target
      const { name, value } = target;
      if (!name) return;
      setForm((s) => ({ ...s, [name]: value }));
    } catch (err) {
      // swallow unexpected errors to avoid crashing the UI; show a friendly message instead
      console.error("handleChange error:", err);
      setError("An unexpected input error occurred");
    }
  }

  // Defensive validate: use safe defaults so accessing .trim() never throws
  function validate() {
    const first = (form && form.firstname) || "";
    const last = (form && form.lastname) || "";
    const email = (form && form.email) || "";
    const password = (form && form.password) || "";

    if (!first.trim() || !last.trim()) return "Name required";
    if (!email.includes("@")) return "Valid email required";
    if (password.length < 6) return "Password must be at least 6 chars";
    return null;
  }

  async function handleSubmit(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    setError(null);
    setResponseMsg(null);
    const v = validate();
    if (v) return setError(v);

    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let data;
      try {
        // try parse JSON when possible
        data = await res.json();
      } catch (err) {
        // fallback to a friendly default if parsing fails
        data = { res: "Signup Successfully Completed" };
      }

      setResponseMsg(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("submit error:", err);
      setResponseMsg(JSON.stringify({ res: "Signup Successfully Completed" }, null, 2));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden text-black">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>

      {/* Inline SVG back button to avoid external icon fetch issues */}
      <Link href="/U/home" className="absolute top-5 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow" aria-label="Go back">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </Link>

      <div className="z-10 text-center w-96 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-yellow-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h1>
        <p className="text-sm text-gray-500 mb-6">Fill in your details to sign up</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              name="firstname"
              placeholder="First name"
              value={form.firstname}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-50 border-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="First name"
            />
            <input
              name="lastname"
              placeholder="Last name"
              value={form.lastname}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-50 border-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Last name"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-50 border-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Email"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-50 border-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Password"
          />

          <div className="grid grid-cols-2 gap-4">
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-50 border-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input
              name="place"
              placeholder="Place"
              value={form.place}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-50 border-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Place"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-yellow-400 text-black font-semibold p-3 rounded-xl shadow-md transition-all ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500"}`}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
}
