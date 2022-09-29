import React from "react";

const BehaviorForm = () => {
  return (
    <form>
      <input type="text" name="behavior" value="Behavior" />
      <label for="">Enter:</label>
      <input type="text" name="parameters" value="parameters" />
      <button> Add Data</button>
      <button> Upload</button>
    </form>
  );
};

export default BehaviorForm;
