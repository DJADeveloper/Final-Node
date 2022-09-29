import React from "react";

const IPAddressForm = () => {
  return (
    <form>
      <input type="text" name="IPAddress" value="IP Address" />
      <input type="text" name="parameters" value="parameters" />
      <div>
        <button> Add Data</button>
        <button> Upload</button>
      </div>
    </form>
  );
};

export default IPAddressForm;
