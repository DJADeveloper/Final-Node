import React from "react";

const WIFIForm = () => {
  return (
    <form>
      <input type="text" name="Wifi" value="Wifi" />
      <label>Node Type</label>
      <select>
        <option>BSSID</option>
      </select>
      <input type="text" name="parameters" value="parameters" />
      <button> Add Data</button>
      <button> Upload</button>
    </form>
  );
};

export default WIFIForm;
