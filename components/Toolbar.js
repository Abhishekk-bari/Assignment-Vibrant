import React from 'react';

const Toolbar = ({ 
  onUndo, 
  onRedo, 
  onPrint, 
  searchTerm, 
  onSearchTermChange = () => {}, // Default no-op function if not provided
  onSearch 
}) => {
  
  // Handle change in the search input
  const handleSearchTermChange = (e) => {
    onSearchTermChange(e.target.value);
  };

  // Trigger search when 'Enter' key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="flex bg-gray-100 p-1 mb-2">
      <div className="flex space-x-2 items-center">
        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm} // Controlled component tied to searchTerm prop
          onChange={handleSearchTermChange} // Updates search term on change
          onKeyDown={handleKeyDown} // Initiates search on 'Enter' key press
          className="px-5 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Search Button */}
        <button
          className="p-1 bg-white border rounded hover:bg-gray-200"
          onClick={onSearch} // Triggers search on click
        >
          Search
        </button>

        {/* Undo Button */}
        <button
          className="p-1 bg-white border rounded hover:bg-gray-200"
          onClick={onUndo} // Triggers undo action on click
        >
          Undo
        </button>

        {/* Redo Button */}
        <button
          className="p-1 bg-white border rounded hover:bg-gray-200"
          onClick={onRedo} // Triggers redo action on click
        >
          Redo
        </button>

        {/* Print Button */}
        <button
          className="p-1 bg-white border rounded hover:bg-gray-200"
          onClick={onPrint} // Triggers print action on click
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
