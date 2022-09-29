import React from "react";
import "../RightMenu/rightMenu.css";
import GeoFenceForm from "../Forms/GeoFenceForm";
import CountryForm from "../Forms/CountryForm";
import DeviceIDForm from "../Forms/DeviceIDForm";
import BehaviorForm from "../Forms/BehaviorForm";
import LanguageForm from "../Forms/LanguageForm";
import IPAddressForm from "../Forms/IPAddressForm";
import WIFIForm from "../Forms/WIFIForm";

const RightMenu = ({
  nodeType,
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
  const nodeTypeForms = {
    "Geo Fence": (
      <GeoFenceForm
        nodeList={nodeList}
        setNodeList={setNodeList}
        GeoFenceData={GeoFenceData}
        setGeoFenceData={setGeoFenceData}
        inputs={inputs}
        GeoFenceHandler={GeoFenceHandler}
        handleSubmit={handleSubmit}
        inputType={inputType}
        selectedNode={selectedNode}
      />
    ),
    Country: <CountryForm />,
    "Device ID": <DeviceIDForm />,
    Behavior: <BehaviorForm />,
    Language: <LanguageForm />,
    "IP Address": <IPAddressForm />,
    WIFI: <WIFIForm />,
  };

  return (
    <div className="rightMenu">
      {nodeTypeForms[nodeType]}
      <hr />
      <h4>Total: </h4>
      {/* Rendering SelectNode Children */}

      {/* {selectedNode !== null && selectedNode.data.children.length > 0
        ? selectedNode.data.children.map((node) => {
            return (
              <div>
                <ul className="list-unstyled text-light d-flex justify-content-between">
                  <li>name: {node.name}</li>
                  <li> radius: {node.radius}</li>
                  <li>display name: {node.displayName}</li>
                </ul>
                <hr className="text-light" />
              </div>
            );
          })
        : null} */}
    </div>
  );
};

export default RightMenu;
