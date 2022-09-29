import React, { useState } from "react";

const CountryForm = () => {
  const [countryData, setCountryData] = useState({
    name: "",
    attributes: {
      parameters: "",
      test: "",
    },
    children: [],
  });

  const handleChange = (e) => {
    setCountryData({
      ...countryData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        value={countryData.attributes.test}
      />
      <label>Search:</label>
      <input
        type="text"
        name="parameters"
        onChange={handleChange}
        value={countryData.attributes.parameters}
      />
      <button> Add Data</button>
      <button> Upload</button>
    </form>
  );
};

export default CountryForm;
