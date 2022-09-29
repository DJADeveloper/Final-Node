import React from "react";
import "../LeftMenu/leftMenu.css";

const LeftMenu = ({ setNodeType }) => {
  const nodeTypes = [
    "Geo Fence",
    "Country",
    "Device ID",
    "Behaviors",
    "Language",
    "Temporal",
    "IP Address",
    "WIFI",
  ];
  return (
    <div className="leftMenu">
      <form className="form">
        <label>project name</label>
        <input type="text" />
        <label>project type</label>
        <select>
          <option>Query</option>
        </select>
        <label>temporal</label>
        <input type="date" />
        <button className="btn btn-dark" type="submit">
          Add Node
        </button>
      </form>
      <hr />
      <h3>ADD Nodes:</h3>
      {nodeTypes.map((type) => (
        <button
          className="btn btn-dark my-2"
          key={type}
          onClick={() => setNodeType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default LeftMenu;
