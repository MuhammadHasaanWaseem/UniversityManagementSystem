import React from 'react';

const DepartmentFilter = ({ selectedDept, onChange }) => {
  return (
    <div className="mb-8 text-lg text-white text-center">
      <label htmlFor="department">Filter by Department:</label>
      <select
        id="department"
        value={selectedDept}
        onChange={(e) => onChange(e.target.value)}
        className="ml-4 px-4 py-2 rounded-lg text-black"
      >
        <option value="All">All</option>
        <option value="SE">SE</option>
        <option value="CS">CS</option>
        <option value="IT">IT</option>
      </select>
    </div>
  );
};

export default DepartmentFilter;
