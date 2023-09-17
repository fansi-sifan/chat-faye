import React, { useEffect, useState } from 'react';

const SingerDropdown = ({ selectedSinger, setSelectedSinger }) => {
  
  const singers = [
    { label: 'Coldplay', value: 'coldplay' },
    // { label: 'Faye Wong', value: 'faye' },
    { label: 'DPR IAN', value: 'dpr ian' },
  ];

  const handleSelect = (e) => {
    setSelectedSinger(e.target.value);
  };

  useEffect(() => {
    // Reset the app state here
    // This function will be called every time `selectedSinger` changes
  }, [selectedSinger]);

  const dropdownStyle = {
    width: '200px',
    height: '40px',
    borderRadius: '5px',
    padding: '5px',
    fontSize: '16px',
    color: '#333',
    border: '1px solid #ccc',
  };

  return (
    <select style={dropdownStyle} value={selectedSinger} onChange={handleSelect}>
      <option value="">Select a singer</option>
      {singers.map((singer, index) => (
        <option key={index} value={singer.value}>
          {singer.label}
        </option>
      ))}
    </select>
  );
};

export default SingerDropdown;