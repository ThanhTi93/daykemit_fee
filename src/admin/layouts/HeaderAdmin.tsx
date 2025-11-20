import React, { useState } from "react";
import { FaBars, FaSearch, FaBell, FaGlobe, FaCog, FaUser, FaSignOutAlt } from "react-icons/fa";

const HeaderAdmin: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 px-6 bg-white shadow">
      {/* Left - Menu + Search */}
      <div className="font-bold text-xl ">
         Hello Admin!
      </div>
      {/* Right - Icons + User */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <div className="relative">
          <FaBell className="text-gray-600 hover:text-gray-800 cursor-pointer" size={20} />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Messages */}
        <div className="relative">
          <span className="absolute -top-1 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            7
          </span>
          <FaGlobe className="text-gray-600 hover:text-gray-800 cursor-pointer" size={20} />
        </div>

        {/* Language */}
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
          EN
        </button>

        {/* User avatar */}
        <div className="relative">
          <button
            className="flex items-center gap-2"
            onClick={() => setOpen(!open)}
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-700 font-medium">John Doe</span>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                <FaUser /> My Profile
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                <FaCog /> Settings
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                <FaBell /> Notifications
                <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  42
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600"
              >
                <FaSignOutAlt /> Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
