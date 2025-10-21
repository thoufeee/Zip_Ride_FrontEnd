// "use client";
// import React from "react";
// import { FaCar } from "react-icons/fa";

// const NotificationItem = ({ message, time }) => {
//   return (
//     <div className="flex items-center mb-7">
//       <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mr-6">
//         <FaCar className="text-yellow-400 text-xl" />
//       </div>
//       <div>
//         <div className="text-lg font-semibold">{message}</div>
//         <div className="text-sm text-gray-600 mt-0.5">{time}</div>
//       </div>
//     </div>
//   );
// };

// export default NotificationItem;






"use client";
import React from "react";
import { FaCar } from "react-icons/fa";

export default function NotificationItem({ message, time }) {
  return (
    <div className="flex items-center mb-7">
      <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mr-6">
        <FaCar className="text-yellow-400 text-xl" />
      </div>
      <div>
        <div className="text-lg font-semibold">{message}</div>
        <div className="text-sm text-gray-600 mt-0.5">{time}</div>
      </div>
    </div>
  );
}
