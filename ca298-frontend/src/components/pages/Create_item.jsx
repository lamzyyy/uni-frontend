import React, { useState } from "react";
import Loading from "../base/loading";
import Navbar from "../base/navbar";

const CreateItem = ({ endpoint, fields, Component, ValidateItemData }) => {
  const [isLoading, setLoading] = useState(false);
  const initialFormData = Object.fromEntries(
    fields.map((field) => [field, ""])
  );
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState([]);
  const api_url = process.env.REACT_APP_API_URL;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (ValidateItemData(setErrors, formData)) {
      try {
        setLoading(true);
        const response = await fetch(`${api_url}${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        setLoading(false);
        console.log("Form submitted successfully");
        setFormData(initialFormData);
      } catch (error) {
        console.error("Error submitting form:", error);
        setLoading(false);
      }
    } else {
      console.log("Form data is invalid. Errors:", errors);
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        {isLoading ? (
            <Loading />
        ) : (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={handleSubmit}>
              <Component Data={formData} Change={handleChange} />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md mt-4 hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div>
          <h3>Error:</h3>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CreateItem;
