import React, { useState } from "react";
import { v4 } from "uuid";
import "./App.css";
import GeoFenceForm from "./components/Forms/GeoFenceForm";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import NodeBuild from "./components/NodeBuilder/NodeBuild";
import RightMenu from "./components/RightMenu/RightMenu";

function App() {
  const [nodeType, setNodeType] = useState(null);
  const [data, setData] = useState(null);
  const [nodeList, setNodeList] = useState([]);
  const [selectedNode, setSelectedNode] = useState("");
  const types = [
    "Geo Fence",
    "Country",
    "Device ID",
    "Behaviors",
    "Language",
    "Temporal",
    "IP Address",
    "WIFI",
  ];
  console.log(nodeType, "TYPE");

  //Testing GeoFence Data
  // Need to move to global context:
  const [GeoFenceData, setGeoFenceData] = useState({
    id: "",
    name: "",
    displayName: "",
    drawTool: "",
    radius: "",
    latitude: "",
    longitude: "",
    temporal: "",
    children: [],
  });

  const inputs = [
    {
      id: 1,
      name: "displayName",
      type: "text",
      placeholder: "Geo Fence",
      label: "DISPLAY NAME: (OPTIONAL)",
      required: false,
    },
    {
      id: 2,
      name: "drawTool",
      type: "checkbox",
      label: "Draw Tool",
      required: false,
    },
    {
      id: 3,
      name: "name",
      type: "text",
      placeholder: "Name",
      label: " NAME:",
      required: true,
    },
    {
      id: 4,
      name: "radius",
      type: "number",
      placeholder: "Radius",
      label: "Radius",
      required: true,
    },
    {
      id: 5,
      name: "latitude",
      type: "number",
      placeholder: "Latitude",
      label: "Latitude:",
      required: true,
    },
    {
      id: 6,
      name: "longitude",
      type: "number",
      placeholder: "Longitude",
      label: "Longitude:",
      required: true,
    },
    {
      id: 7,
      name: "temporal",
      type: "date",
      placeholder: "Temporal",
      label: "Temporal:",
      required: true,
    },
  ];

  const GeoFenceHandler = (e) => {
    setGeoFenceData({
      ...GeoFenceData,
      id: v4(),
      [e.target.name]: e.target.value,
    });
  };

  // const bfs = (nodeList, selectedNode, newNode) => {
  //   const queue = [];

  //   queue.push([...nodeList]);

  //   const newQueue = queue[0];
  //   console.log(newQueue, "QUEUE");
  //   if (newQueue.length > 0) {
  //     console.log(newNode, "NewNode");
  //     console.log(newQueue, "NewQueue");
  //     const currentNode = selectedNode.data;
  //     console.log(currentNode, "Current Node");
  //     const filteredNode = nodeList.filter((node) => {
  //       console.log(currentNode.id, "current ID");
  //       console.log(node.id, "NODE ID");
  //       console.log(node.id === currentNode.id, "noding");
  //       if (node.id === currentNode.id) {
  //         const childNode = node.children.push(newNode);

  //         console.log(childNode, "child node");
  //         return { ...queue };
  //       }
  //       console.log(node.children.id, "Child Id");

  //       const len = currentNode.children.length;

  //       for (let i = 0; i < len; i++) {
  //         console.log(i, "loop");
  //         if (node.children.id === currentNode.id) {
  //           const childNode = node.children.push(newNode);
  //           console.log("Nested Child", childNode);
  //         }
  //       }
  //     });
  //     console.log(filteredNode, "Filtered");
  //   }
  //   setNodeList(newQueue);
  //   console.log(nodeList, "newNodeList");
  // };

  const bfs = (nodeList, selectedNode, newNode) => {
    const queue = [];

    queue.push([...nodeList]);

    const newQueue = queue[0];
    console.log(newQueue, "QUEUE");
    if (newQueue.length > 0) {
      console.log(newNode, "NewNode");
      console.log(newQueue, "NewQueue");
      const currentNode = selectedNode.data;
      console.log(currentNode, "Current Node");
      const filteredNode = nodeList.filter((node) => {
        // console.log(currentNode.id, "current ID");
        // console.log(node.id, "NODE ID");
        // console.log(node.id === currentNode.id, "noding");
        const validNodeID = (node) => {
          if (node.children.length > 0) {
            if (node.id === selectedNode) {
              return true;
            }
          }
        };

        const childProps = (node) => {
          for (let child in node) {
            //This is at the Root Level
            console.log(node[child][0].children, "woooooo");
            console.log(node, "I AM A CHILD");

            if (validNodeID(node[child][0])) {
              childProps(node[child]);
            } else {
              console.log(child, node[child]);
            }
          }
        };
        //Run Recursion through tree
        childProps(queue);

        //SOLID CODE
        if (node.id === currentNode.id) {
          const childNode = node.children.push(newNode);

          console.log(childNode, "child node");
          return { ...queue };
        }
        console.log(node.children.id, "Child Id");

        const len = currentNode.children.length;

        for (let i = 0; i < len; i++) {
          console.log(i, "loop");
          if (node.children.id === currentNode.id) {
            const childNode = node.children.push(newNode);
            console.log("Nested Child", childNode);
          }
        }
      });
      console.log(filteredNode, "Filtered");
    }
    setNodeList(newQueue);
    console.log(nodeList, "newNodeList");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setNodeList([...nodeList, GeoFenceData]);
    if (nodeList.length >= 1) {
      bfs(nodeList, selectedNode, GeoFenceData);
    }
    setSelectedNode(null);

    setGeoFenceData({
      name: "",
      id: "",
      displayName: "",
      drawTool: "",
      radius: "",
      latitude: "",
      longitude: "",
      temporal: "",
      children: [],
    });
  };

  console.log(nodeList);
  return (
    <div className="App">
      <LeftMenu setNodeType={setNodeType} />
      <NodeBuild
        nodeList={nodeList}
        setNodeList={setNodeList}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
      {nodeList.map((node) => {
        node.children.map((params) => {
          console.log(params.name);
        });
      })}
      <RightMenu
        nodeType={nodeType}
        nodeList={nodeList}
        setNodeList={setNodeList}
        GeoFenceData={GeoFenceData}
        setGeoFenceData={setGeoFenceData}
        inputs={inputs}
        GeoFenceHandler={GeoFenceHandler}
        handleSubmit={handleSubmit}
        inputType={inputs.type}
        selectedNode={selectedNode}
      />
    </div>
  );
}

export default App;
