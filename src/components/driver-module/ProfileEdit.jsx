"use client";

import { useState } from "react";
import { User, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; 

export default function ProfileEdit({ onBack }) {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSave = () => {
    console.log({ name, email, phone, password, profilePic });
    alert("Profile Updated Successfully!");
  };

  const handleCancel = () => {
    alert("Changes canceled");
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={()=>router.push("/D/dashboard")}
          className="p-2 rounded-full hover:bg-gray-200 mr-3"
        >
          <ArrowLeft className="w-5 h-5 text-yellow-600" />
        </button>
        <h1 className="text-2xl font-bold text-yellow-600">Edit Profile</h1>
      </div>

      {/* Full-width Card */}
      <div className="bg-yellow-50 w-full rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Left: Profile Picture */}
        <div className="flex flex-col items-center md:w-1/3">
          <div className="w-32 h-32 rounded-full bg-yellow-200 flex items-center justify-center overflow-hidden">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-16 h-16 text-white" />
            )}
          </div>
          <label className="mt-4 cursor-pointer text-sm text-yellow-600 hover:underline">
            Change Profile Picture
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Right: Form Fields */}
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
