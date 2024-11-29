import React, { useState } from "react";
import axios from "axios";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    employeeNo: "",
    employeeName: "",
    dateOfJoining: "",
    department: "AD",
    salary: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Employee No - must be numeric and required
    if (!formData.employeeNo || isNaN(formData.employeeNo)) {
      newErrors.employeeNo = "Employee No is required and must be a number.";
    }

    // Employee Name - required and max length of 100
    if (!formData.employeeName) {
      newErrors.employeeName = "Employee Name is required.";
    }

    // Date of Joining - must match dd/MM/yyyy format
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!formData.dateOfJoining || !dateRegex.test(formData.dateOfJoining)) {
      newErrors.dateOfJoining = "Date of Joining must be in dd/MM/yyyy format.";
    }

    // Salary - required and must be a number
    if (!formData.salary || isNaN(formData.salary)) {
      newErrors.salary = "Salary is required and must be a number.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    try {
      const response = await axios.post("http://localhost:8080/api/emp/save", formData);
      alert("Employee saved successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error saving employee:", error);
      alert("Failed to save employee.");
    }
  };

  const handleClear = () => {
    setFormData({
      employeeNo: "",
      employeeName: "",
      dateOfJoining: "",
      department: "AD",
      salary: "",
    });
    setErrors({});
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#f4f7fa", // Light background for the page
      }}
    >
      <div
        className="container p-4"
        style={{
          backgroundColor: "#ffffff", // White background for the form
          borderRadius: "8px", // Slight border radius for smooth edges
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for the container
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#333" }}>
          Employee Registration
        </h2>

        <div className="mb-3">
          <label>Employee No:</label>
          <input
            type="text"
            name="employeeNo"
            value={formData.employeeNo}
            onChange={handleChange}
            maxLength="10"
            className="form-control"
            placeholder="Enter Employee Number"
          />
          {errors.employeeNo && <small className="text-danger">{errors.employeeNo}</small>}
        </div>

        <div className="mb-3">
          <label>Employee Name:</label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            maxLength="100"
            className="form-control"
            placeholder="Enter Employee Name"
          />
          {errors.employeeName && <small className="text-danger">{errors.employeeName}</small>}
        </div>

        <div className="mb-3">
          <label>Date of Joining:</label>
          <input
            type="text"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            className="form-control"
            placeholder="dd/MM/yyyy"
          />
          {errors.dateOfJoining && <small className="text-danger">{errors.dateOfJoining}</small>}
        </div>

        <div className="mb-3">
          <label>Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="form-control"
          >
            <option value="AD">Administration</option>
            <option value="IT">Information Technology</option>
            <option value="HD">Help Desk</option>
            <option value="HR">Human Resource</option>
            <option value="OP">Operation</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Salary"
          />
          {errors.salary && <small className="text-danger">{errors.salary}</small>}
        </div>

        <div className="d-flex justify-content-between">
          <button onClick={handleSave} className="btn btn-primary">
            Save
          </button>
          <button onClick={handleClear} className="btn btn-secondary">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
