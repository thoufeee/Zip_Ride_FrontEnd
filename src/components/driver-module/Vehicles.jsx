"use client";
import {
  FileCheck2,
  ShieldCheck,
  Plus,
  Pencil,
  X,
  Upload,
  Trash2,
  ChevronDown,
  User,
  AirVent,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Example initial data
const initialVehicles = [
  {
    id: 1,
    name: "Toyota Camry",
    number: "KL 65 U 3751",
    type: "car",
    img: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/192443/camry-exterior-right-front-three-quarter-14.jpeg?isig=0&q=80",
  },
  {
    id: 2,
    name: "Duke 150",
    number: "KL 65 W 7431",
    type: "bike",
    img: "https://images5.1000ps.net/images_bikekat/2023/1-KTM/7347-1290_Super_Duke_R/001-638047874847317257-ktm-1290-super-duke-r.jpg?format=webp&quality=80&width=1200&height=790",
  },
];

const documentsData = [
  { id: 1, name: "Driving License", status: "Valid", icon: User, statusColor: "text-green-600" },
  { id: 2, name: "RC Book", status: "Valid", icon: FileCheck2, statusColor: "text-green-600" },
  { id: 3, name: "Insurance", status: "Not Valid", icon: ShieldCheck, statusColor: "text-red-500" },
  { id: 4, name: "Pollution", status: "Valid", icon: AirVent, statusColor: "text-green-500" },
];

export default function VehiclePage() {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicleType, setVehicleType] = useState("car");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [rcFile, setRcFile] = useState(null);
  const [insuranceFile, setInsuranceFile] = useState(null);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [editVehicleType, setEditVehicleType] = useState("");
  const [editVehicleModel, setEditVehicleModel] = useState("");
  const [editVehicleNumber, setEditVehicleNumber] = useState("");
  const [editPhotoFile, setEditPhotoFile] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVehicle = {
      id: vehicles.length + 1,
      name: vehicleModel,
      number: vehicleNumber.toUpperCase(),
      type: vehicleType,
      img: photoFile
        ? URL.createObjectURL(photoFile)
        : "https://img.icons8.com/?size=512&id=59835&format=png",
    };
    setVehicles([...vehicles, newVehicle]);
    setIsModalOpen(false);
    setVehicleModel("");
    setVehicleNumber("");
    setVehicleType("car");
    setPhotoFile(null);
    setRcFile(null);
    setInsuranceFile(null);
  };

  const handleEditVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setEditVehicleType(vehicle.type);
    setEditVehicleModel(vehicle.name);
    setEditVehicleNumber(vehicle.number);
    setEditModalOpen(true);
  };

  const handleEditSubmit = () => {
    const updated = vehicles.map((v) =>
      v.id === selectedVehicle.id
        ? {
            ...v,
            name: editVehicleModel,
            number: editVehicleNumber.toUpperCase(),
            type: editVehicleType,
            img: editPhotoFile ? URL.createObjectURL(editPhotoFile) : v.img,
          }
        : v
    );
    setVehicles(updated);
    setEditModalOpen(false);
  };

  const handleDeleteVehicle = (id) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
      setVehicles(vehicles.filter((v) => v.id !== id));
    }
  };

  const activeVehicle = vehicles[0];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 md:px-0 py-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ---------------- Left Section ---------------- */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-1">Vehicles and Documents</h1>
          <p className="text-gray-600 mb-6">Manage your vehicles and documents</p>

          {/* Active vehicle */}
          <h2 className="text-lg font-semibold mb-3">Active vehicle</h2>
          <div className="bg-yellow-50 flex items-center justify-between p-5 rounded-xl mb-4 shadow">
            <div className="flex items-center gap-4">
              <img
                src={activeVehicle.img}
                alt={activeVehicle.name}
                className="w-20 h-16 object-cover rounded-lg"
              />
              <div>
                <div className="font-bold text-lg">{activeVehicle.name}</div>
                <div className="text-xs text-gray-600">{activeVehicle.number}</div>
              </div>
            </div>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-full hover:bg-yellow-100 transition"
              >
                <ChevronDown className="w-6 h-6 text-yellow-600" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg z-50">
                  {vehicles.map((v) => (
                    <button
                      key={v.id}
                      className="w-full text-left px-4 py-2 hover:bg-yellow-50 flex items-center gap-3"
                    >
                      <img src={v.img} alt={v.name} className="w-10 h-7 object-cover rounded" />
                      <div>
                        <div>{v.name}</div>
                        <div className="text-xs text-gray-400">{v.number}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Documents */}
          <h2 className="text-lg font-semibold mb-2">Documents</h2>
          <div className="flex flex-col gap-5">
            {documentsData.map((doc) => (
              <DocumentRow key={doc.id} doc={doc} />
            ))}
          </div>
        </div>

        {/* ---------------- Right Section ---------------- */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mt-21">Your Vehicles</h2>
           <button
           onClick={() => setIsModalOpen(true)}
           className="bg-yellow-400 mt-18 hover:bg-yellow-500 text-white px-3 py-2 rounded-lg flex items-center shadow"
           >
          <Plus size={18} />
          </button>
    </div>

          <div className="bg-yellow-50 rounded-xl flex flex-col gap-4 p-3 shadow">
            {vehicles.map((v) => (
              <div
                key={v.id}
                className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img src={v.img} alt={v.name} className="w-16 h-12 object-cover rounded-lg" />
                  <div>
                    <div className="font-semibold">{v.name}</div>
                    <div className="text-xs text-gray-600">{v.number}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditVehicle(v)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white p-1.5 rounded-lg shadow"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteVehicle(v.id)}
                    className="bg-red-400 hover:bg-red-500 text-white p-1.5 rounded-lg shadow"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {isModalOpen && (
        <VehicleModal
          title="Add Vehicle"
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
          vehicleModel={vehicleModel}
          setVehicleModel={setVehicleModel}
          vehicleNumber={vehicleNumber}
          setVehicleNumber={setVehicleNumber}
          photoFile={photoFile}
          setPhotoFile={setPhotoFile}
          rcFile={rcFile}
          setRcFile={setRcFile}
          insuranceFile={insuranceFile}
          setInsuranceFile={setInsuranceFile}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
      )}

      {editModalOpen && selectedVehicle && (
        <VehicleModal
          title="Edit Vehicle"
          vehicleType={editVehicleType}
          setVehicleType={setEditVehicleType}
          vehicleModel={editVehicleModel}
          setVehicleModel={setEditVehicleModel}
          vehicleNumber={editVehicleNumber}
          setVehicleNumber={setEditVehicleNumber}
          photoFile={editPhotoFile}
          setPhotoFile={setEditPhotoFile}
          onClose={() => setEditModalOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
}

// ---------------- Document Row ----------------
function DocumentRow({ doc }) {
  const [file, setFile] = useState(null);

  return (
    <div className="bg-yellow-50 flex items-center justify-between p-4 rounded-xl shadow">
      <div className="flex items-center gap-4">
        <doc.icon className="text-amber-800" size={28} />
        <div>
          <div className="font-semibold">{doc.name}</div>
          <div className={`text-xs ${doc.statusColor}`}>{doc.status}</div>
        </div>
      </div>
      <div className="relative">
        <input
          type="file"
          id={`upload-${doc.id}`}
          className="hidden"
          accept="image/*,.pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label
          htmlFor={`upload-${doc.id}`}
          className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-lg shadow cursor-pointer flex items-center justify-center"
        >
          {file ? <FileCheck2 size={18} /> : <Upload size={18} />}
        </label>
      </div>
    </div>
  );
}

// ---------------- Vehicle Modal ----------------
function VehicleModal({
  title,
  vehicleType,
  setVehicleType,
  vehicleModel,
  setVehicleModel,
  vehicleNumber,
  setVehicleNumber,
  photoFile,
  setPhotoFile,
  rcFile,
  setRcFile,
  insuranceFile,
  setInsuranceFile,
  onClose,
  onSubmit,
}) {
  const fileRef = useRef();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-yellow-50 rounded-3xl shadow-xl w-full max-w-lg p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-yellow-200 rounded-full"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <h2 className="text-xl font-semibold mb-6 text-gray-800">{title}</h2>

        <form onSubmit={onSubmit} className="grid gap-4">
          <input
            type="text"
            placeholder="Vehicle Name"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="text"
            placeholder="Vehicle Number"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>

          <div
            onClick={() => fileRef.current.click()}
            className="border-dashed border-2 border-yellow-400 rounded-xl p-4 text-center cursor-pointer hover:bg-yellow-50"
          >
            <Upload className="w-5 h-5 mx-auto mb-2 text-yellow-600" />
            <p className="text-sm text-gray-700">
              {photoFile ? photoFile.name : "Upload Vehicle Photo"}
            </p>
            <input
              type="file"
              ref={fileRef}
              onChange={(e) => setPhotoFile(e.target.files[0])}
              hidden
            />
          </div>

          {rcFile !== undefined && insuranceFile !== undefined && (
            <>
              <div
                onClick={() => document.getElementById("rc-upload").click()}
                className="border-dashed border-2 border-yellow-400 rounded-xl p-4 text-center cursor-pointer hover:bg-yellow-50"
              >
                <Upload className="w-5 h-5 mx-auto mb-2 text-yellow-600" />
                <p className="text-sm text-gray-700">
                  {rcFile ? rcFile.name : "Upload RC Document"}
                </p>
                <input
                  type="file"
                  id="rc-upload"
                  onChange={(e) => setRcFile(e.target.files[0])}
                  hidden
                />
              </div>

              <div
                onClick={() => document.getElementById("insurance-upload").click()}
                className="border-dashed border-2 border-yellow-400 rounded-xl p-4 text-center cursor-pointer hover:bg-yellow-50"
              >
                <Upload className="w-5 h-5 mx-auto mb-2 text-yellow-600" />
                <p className="text-sm text-gray-700">
                  {insuranceFile ? insuranceFile.name : "Upload Insurance Document"}
                </p>
                <input
                  type="file"
                  id="insurance-upload"
                  onChange={(e) => setInsuranceFile(e.target.files[0])}
                  hidden
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2.5 rounded-full font-medium shadow-md transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
