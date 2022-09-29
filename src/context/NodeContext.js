import React, { createContext, useState } from "react";

export const NodeContext = createContext("");

export const NodeProvider = ({ children }) => {
  const [nodeList, setNodeList] = useState([]);
  const [nodeType, setNodeType] = useState(null);
  const [data, setData] = useState(null);
  const [selectedNode, setSelectedNode] = useState("");

  const breathFirstSearch = (nodeList, selectedNode, newNode) => {
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
        console.log(currentNode.id, "current ID");
        console.log(node.id, "NODE ID");
        console.log(node.id === currentNode.id, "noding");
        if (node.id === currentNode.id) {
          const addNode = node.children.push(newNode);
          node = addNode;
          console.log(node, "child node");
          return node;
        }
      });
      console.log(filteredNode, "Filtered");
    }
    setNodeList(newQueue);
    console.log(nodeList, "newNodeList");
  };

  return (
    <NodeContext.Provider
      value={{
        nodeList,
        setNodeList,
        nodeType,
        setNodeType,
        selectedNode,
        setSelectedNode,
        breathFirstSearch,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};
