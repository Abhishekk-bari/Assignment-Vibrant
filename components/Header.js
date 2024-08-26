import { useState } from 'react';
import {
  AiOutlineStar,
  AiOutlineFolder,
  AiOutlineCloud
} from 'react-icons/ai';
import {
  MdUndo,
  MdRedo,
  MdPrint,
  MdDelete,
  MdCopyAll,
  MdColorize,
  MdColorLens
} from 'react-icons/md';
import {
  FaFile,
  FaEdit,
  FaBold,
  FaItalic,
  FaUnderline,
  FaMinus,
  FaPlus,
  FaDollarSign,
  FaPercentage,
  FaMortarPestle,
  FaLink,
  FaParagraph
} from 'react-icons/fa';

const Header = () => {
  // State to manage the visibility of File and Edit dropdown menus
  const [isFileDropdownOpen, setIsFileDropdownOpen] = useState(false);
  const [isEditDropdownOpen, setIsEditDropdownOpen] = useState(false);

  // Toggle function for the File dropdown menu
  const toggleFileDropdown = () => {
    setIsFileDropdownOpen(!isFileDropdownOpen);
    setIsEditDropdownOpen(false); // Ensure Edit dropdown is closed when File is open
  };

  // Toggle function for the Edit dropdown menu
  const toggleEditDropdown = () => {
    setIsEditDropdownOpen(!isEditDropdownOpen);
    setIsFileDropdownOpen(false); // Ensure File dropdown is closed when Edit is open
  };

  return (
    <div className="w-full border-b border-gray-300">
      {/* Top Header Section */}
      <div className="flex items-center justify-between p-2 bg-white shadow-sm">
        <div className="flex items-center space-x-4">
          {/* Google Sheets Icon */}
          <img
            src="https://img.icons8.com/color/48/000000/google-sheets.png"
            alt="Google Sheets"
            className="h-6 w-6"
          />
          <div>
            <p className="text-sm font-semibold">Untitled spreadsheet</p>
            <div className="flex items-center space-x-2">
              {/* Icons for Star, Folder, Cloud, Undo, Redo */}
              <AiOutlineStar className="text-gray-600" />
              <AiOutlineFolder className="text-gray-600" />
              <AiOutlineCloud className="text-gray-600" />
              <MdUndo className="text-gray-600" />
              <MdRedo className="text-gray-600" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Share Button */}
          <button className="px-4 py-1 bg-blue-600 text-white rounded shadow">
            Share
          </button>
          {/* User Profile Icon Placeholder */}
          <div className="px-1 py-1 text-white rounded-full bg-yellow-400 h-8 w-8">
            Pic
          </div>
        </div>
      </div>

      {/* Menu Bar Section */}
      <div className="relative flex items-center space-x-4 bg-gray-100 p-2 text-sm">
        {/* File Menu */}
        <button
          className="hover:bg-gray-200 px-2 py-1 rounded"
          onClick={toggleFileDropdown}
        >
          File
        </button>
        {isFileDropdownOpen && (
          <div className="absolute left-0 mt-60 w-30 bg-white shadow-lg border border-gray-200 rounded">
            <ul>
              {/* File Menu Items */}
              <li className="hover:bg-gray-200 px-4 py-1 cursor-pointer">New</li>
              <li className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Open</li>
              <li className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Import</li>
              <li className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Download</li>
              <li className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Rename</li>
              <li className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Print</li>
              <li className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Exit</li>
            </ul>
          </div>
        )}

        {/* Edit Menu */}
        <button
          className="hover:bg-gray-200 px-1 py-1 rounded"
          onClick={toggleEditDropdown}
        >
          Edit
        </button>
        {isEditDropdownOpen && (
          <div className="absolute left-10 mt-60 w-30 bg-white shadow-lg border border-gray-200 rounded">
            <ul>
              {/* Edit Menu Items */}
              <li className="hover:bg-gray-300 px-4 py-1 cursor-pointer">Cut</li>
              <li className="hover:bg-gray-300 px-4 py-1 cursor-pointer">Copy</li>
              <li className="hover:bg-gray-300 px-4 py-1 cursor-pointer">Paste</li>
              <li className="hover:bg-gray-300 px-4 py-1 cursor-pointer">Delete</li>
              <li className="hover:bg-gray-300 px-4 py-1 cursor-pointer">Move</li>
              <li className="hover:bg-gray-300 px-4 py-1 cursor-pointer">Find & Replace</li>
            </ul>
          </div>
        )}

        {/* Other Menu Items */}
        <button className="hover:bg-gray-200 px-2 py-1 rounded">View</button>
        <button className="hover:bg-gray-200 px-2 py-1 rounded">Insert</button>
        <button className="hover:bg-gray-200 px-2 py-1 rounded">Format</button>
        <button className="hover:bg-gray-200 px-2 py-1 rounded">Data</button>
        <button className="hover:bg-gray-200 px-2 py-1 rounded">Tools</button>
        <button className="hover:bg-gray-200 px-2 py-1 rounded">Extensions</button>
        <button className="hover:bg-gray-200 px-2 py-1 rounded">Help</button>
      </div>

      {/* Toolbar Section */}
      <div className="flex items-center space-x-4 p-0 bg-white shadow-sm text-gray-600">
        {/* Undo/Redo Toolbar Section */}
        <div className="flex items-center space-x-1">
          <button className="p-1 hover:bg-gray-200 rounded"><MdUndo /></button>
          <button className="p-1 hover:bg-gray-200 rounded"><MdRedo /></button>
          <button className="p-1 hover:bg-gray-200 rounded"><MdCopyAll /></button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaFile /></button>
        </div>
        {/* Print Button */}
        <button className="p-1 hover:bg-gray-200 rounded"><MdPrint /></button>
        <button className="p-1 hover:bg-gray-200 rounded"><MdColorize /></button>
        <button className="p-1 hover:bg-gray-200 rounded"><FaEdit /></button>
        <button className="p-1 hover:bg-gray-200 rounded"><MdColorLens /></button>
        <button className="p-1 hover:bg-gray-200 rounded"><MdDelete /></button>
        {/* Text Formatting Toolbar Section */}
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-200 rounded">100%</button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaDollarSign /></button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaPercentage /></button>
          <button className="p-1 hover:bg-gray-200 rounded">.</button>
          <button className="p-1 hover:bg-gray-200 rounded">,</button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaMortarPestle /></button>
        </div>
        {/* Font Styling Toolbar Section */}
        <div className="flex items-center space-x-3">
          <button className="p-1 hover:bg-gray-200 rounded">10</button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaBold /></button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaItalic /></button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaUnderline /></button>
        </div>
        {/* Font Size Toolbar Section */}
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-200 rounded">A</button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaMinus /></button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaPlus /></button>
        </div>
        {/* Text/Number Formatting Toolbar Section */}
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-200 rounded">Default</button>
          <button className="p-1 hover:bg-gray-200 rounded">A</button>
          <button className="p-1 hover:bg-gray-200 rounded">123</button>
        </div>
        {/* Paragraph Formatting Toolbar Section */}
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-200 rounded">T</button>
        </div>
        {/* Link/Paragraph Toolbar Section */}
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-200 rounded"><FaLink /></button>
          <button className="p-1 hover:bg-gray-200 rounded"><FaParagraph /></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
