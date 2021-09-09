import React from "react";
import "../assets/css/Task.css";

const FilterTask = ({ statusFilter, handleStatusFilterChange }) => {
  return (
    <div>
      <label htmlFor="filterStatus">Filter by Status:</label>
      <select
        id="filterStatus"
        className="marginLeft"
        onChange={handleStatusFilterChange}
        value={statusFilter}
      >
        <option value="" defaultValue>
          Select Status
        </option>
        <option value="Active">Active</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default FilterTask;
