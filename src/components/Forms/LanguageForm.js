import React from "react";

const LanguageForm = () => {
  return (
    <form>
      <input type="text" name="deviceId" value="Device ID" />
      <input type="text" name="parameters" value="parameters" />
      <button> Add Data</button>
      <button> Upload</button>
    </form>
  );
};

export default LanguageForm;
