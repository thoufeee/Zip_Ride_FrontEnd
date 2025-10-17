 "use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation, User, Phone, MessageSquare, X, Send } from "lucide-react";
import CallModal from "./CallModal";

export default function Ride() {
  const mapRef = useRef(null);
  const [rideHistory, setRideHistory] = useState([
    { id: 1, name: "Vishnu", route: "Kozhikode → Kannur" },
    { id: 2, name: "Rahul", route: "Malappuram → Thrissur" },
    { id: 3, name: "Anjali", route: "Kozhikode → Wayanad" },
  ]);
  const [selectedRide, setSelectedRide] = useState(null);

  const [showCall, setShowCall] = useState(false);

  const driver = { name: "Arun Das" };
  // Chat modal states
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [chatLog, setChatLog] = useState([]);

  // Initialize Google Map
  useEffect(() => {
    if (typeof window !== "undefined" && window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 11.2588, lng: 75.7804 },
        zoom: 8,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#fff7e6" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#3b2f2f" }] },
          { featureType: "road", elementType: "geometry", stylers: [{ color: "#f5d28c" }] },
          { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#aee0ff" }] },
        ],
      });

      const start = { lat: 11.25, lng: 75.78 };
      const end = { lat: 12.0, lng: 75.3 };

      new window.google.maps.Marker({
        position: start,
        map,
        title: "Start",
        icon: { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" },
      });

      new window.google.maps.Marker({
        position: end,
        map,
        title: "End",
        icon: { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" },
      });

      const routePath = new window.google.maps.Polyline({
        path: [start, end],
        geodesic: true,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 3,
      });

      routePath.setMap(map);
    }
  }, []);

  // Accept handler
  const handleAccept = (ride) => {
    setSelectedRide({
      id: ride.id,
      name: ride.name,
      pickup: "Kozhikode Railway Station",
      drop: "HiLITE Mall, Kozhikode - 673014 ",
      fare: "₹157.14",
      payment: "Cash",
    });
    setRideHistory((prev) => prev.filter((r) => r.id !== ride.id));
    setChatLog([]);
    setMessageText("");
  };

  const handleCancel = () => {
    setSelectedRide(null);
    setIsMessageOpen(false);
  };

  const openMessage = () => selectedRide && setIsMessageOpen(true);
  const closeMessage = () => setIsMessageOpen(false);

  const handleSendMessage = () => {
    const text = messageText.trim();
    if (!text) return;
    setChatLog((prev) => [...prev, { from: "me", text }]);
    setMessageText("");
    setTimeout(() => {
      setChatLog((prev) => [...prev, { from: "them", text: "Thanks — see you soon!" }]);
    }, 800);
  };

  // Close modal on Esc
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setIsMessageOpen(false);
    if (isMessageOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isMessageOpen]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isMessageOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMessageOpen]);

  return (
    <div className="font-poppins text-amber-950 p-6">
      <h1 className="text-3xl font-bold mb-2">Active Rides</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Map + Incoming Requests */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
          <div ref={mapRef} className="w-full h-[400px] rounded-lg" />

          <h2 className="mt-4 text-xl font-semibold">Incoming Requests</h2>
          <div className="mt-3 space-y-3">
            {rideHistory.length === 0 ? (
              <p className="text-gray-500 text-sm">No incoming requests.</p>
            ) : (
              rideHistory.map((ride) => (
                <div key={ride.id} className="flex justify-between items-start bg-yellow-50 p-3 rounded-lg shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <User className="text-white" size={20} />
                    </div>
                    <div className="leading-tight">
                      <p className="font-medium text-[15px] text-black">{ride.name}</p>
                      <p className="text-xs text-gray-600">{ride.route}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAccept(ride)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded text-sm"
                    >
                      Accept
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-black px-3 py-1.5 rounded text-sm">
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Ride Details Sidebar */}
        <div className="bg-white rounded-xl shadow p-5 flex flex-col">
          {!selectedRide ? (
            <p className="text-gray-500 text-sm">No active ride selected.</p>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <User className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-amber-900">{selectedRide.name}</p>
                    <p className="text-sm text-black">Passenger</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={openMessage} className="bg-yellow-400 hover:bg-yellow-500 p-2.5 rounded-lg">
                    <MessageSquare size={20} className="text-white" />
                  </button>
                  <button
                   onClick={() => setShowCall(true)}
                    className="bg-green-500 hover:bg-green-600 p-2.5 rounded-lg">
                    <Phone size={20} className="text-white" />
                  </button>
                  {showCall && <CallModal driver={{ name: "Vishnu" }} onClose={() => setShowCall(false)} />}

                </div>
              </div>

              {/* Route */}
              <div className="bg-yellow-50 p-4 rounded-lg mb-5 flex gap-4">
                <div className="flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-green-600" />
                  <div className="h-16 w-px bg-gray-400 my-1" />
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base text-amber-900">{selectedRide.pickup}</p>
                  <p className="font-semibold text-base text-amber-900 mt-14">{selectedRide.drop}</p>
                </div>
              </div>

              {/* Fare */}
              <div className="bg-yellow-50 p-4 rounded-lg mb-4 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <div className="w-6 h-5 border-2 border-yellow-600 rounded" />
                </div>
                <div className="flex-1">
                  <p className="text-2xl font-bold text-amber-900">{selectedRide.fare}</p>
                  <p className="text-sm text-black">{selectedRide.payment} Payment</p>
                </div>
              </div>

              {/* Cancel */}
              <button onClick={handleCancel} className="w-full bg-white border-2 border-red-500 text-red-500 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all mt-auto">
                Cancel Ride
              </button>
            </>
          )}
        </div>
      </div>

      {/* Chat Modal */}
      {isMessageOpen && selectedRide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={closeMessage} aria-hidden="true" />
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg z-10 p-4 mx-4 flex flex-col h-[600px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 p-3 rounded-full shadow-lg">
              <MessageSquare className="text-white w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mb-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <User className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Chat with {selectedRide.name}</div>
                  <div className="text-xs text-gray-500">Passenger</div>
                </div>
              </div>
              <button onClick={closeMessage} className="p-1 rounded hover:bg-gray-100">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-auto mb-3 flex flex-col gap-2 p-2 border rounded border-gray-200 bg-gray-50">
              {chatLog.length === 0 ? (
                <div className="text-xs text-gray-500 text-center mt-2">No messages yet. Say hi 👋</div>
              ) : (
                chatLog.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] p-2 rounded ${m.from === "me" ? "bg-yellow-100 self-end text-right" : "bg-gray-100 self-start text-left"}`}
                  >
                    {m.text}
                  </div>
                ))
              )}
            </div>

            <div className="flex gap-2 mt-auto">
              <input
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 border border-gray-300 rounded-lg p-2 text-sm focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2.5 rounded-lg"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
