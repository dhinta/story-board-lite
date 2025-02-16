import { Moon, Sun, User } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="logo">
        {/* Logo here */}
        <span className="text-xl font-bold">Logo</span>
      </div>
      <div className="flex items-center">
        <label className="flex items-center mr-4">
          <input type="checkbox" className="hidden" />
          <Moon className="w-6 h-6" />
          <Sun className="w-6 h-6 ml-2" />
        </label>
        <User className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Header;
