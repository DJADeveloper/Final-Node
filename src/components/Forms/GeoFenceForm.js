import React, { useState } from "react";
import { v4 } from "uuid";

const GeoFenceForm = ({
  nodeList,
  setNodeList,
  GeoFenceData,
  setGeoFenceData,
  inputs,
  GeoFenceHandler,
  handleSubmit,
  inputType,
  selectedNode,
}) => {
  console.log(GeoFenceData);
  console.log(NodeList);
  return (
    <form className="form " onSubmit={handleSubmit}>
      <h3>GEO Fence Node:</h3>
      {inputs.map((input) => (
        <div key={input.id}>
          <label>{input.label}</label>
          <input
            type={inputType}
            className="form-control"
            key={input.id}
            {...input}
            value={GeoFenceData[input.name]}
            onChange={GeoFenceHandler}
            required={input.required}
          />
        </div>
      ))}

      <button
        className="btn btn-primary my-2"
        disabled={selectedNode === null}
        type="submit"
      >
        Add Data
      </button>
    </form>
  );
};

export default GeoFenceForm;
