import React, { useRef, useState, useContext, useEffect } from "react";
import Tree from "react-d3-tree";
import "../NodeBuilder/nodeBuild.css";
import { NodeContext } from "../NodeContext/NodeContext";

const svgSquare = {
  shape: "node",
  shapeProps: {
    x: -10,
    y: -10,
    height: 30,
    width: 50,
  },
};

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

function NodeLabel(node) {
  const { nodeData } = node;
  const hasChildren = nodeData.children;
  const btnStyle = {
    background: hasChildren ? "#03A9F4" : "",
    cursor: hasChildren ? "pointer" : "default",
  };
  return (
    <button className="btn" style={btnStyle}>
      {nodeData.name}
    </button>
  );
}

const NodeBuild = ({
  nodeList,
  setNodeList,
  selectedNode,
  setSelectedNode,
}) => {
  const treeContainer = useRef();
  const tree = useRef();

  // const [selectedNode, setSelectedNode] = useState("");
  const startNode = [
    {
      name: "",
    },
  ];

  const [dimensions, setDimensions] = useState({
    width: innerWidth,
    height: innerHeight,
  });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (treeContainer.current) {
      setDimensions(treeContainer.current.getBoundingClientRect());
    }
  }, [treeContainer]);

  useEffect(() => {
    console.log(dimensions);
    setTranslate({
      x: dimensions.width / 2,
      y: dimensions.height / 2 / 2,
    });
  }, [dimensions]);

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
        console.log(currentNode.id, "current ID");
        console.log(node.id, "NODE ID");
        console.log(node.id === currentNode.id, "noding");
        if (node.id === currentNode.id) {
          const addNode = node.children.push(newNode);
          node = addNode;

          console.log(node, "child node");
        }
      });
      console.log(filteredNode, "Filtered");
    }
    setNodeList(newQueue);
    console.log(nodeList, "newNodeList");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bfs(nodeList, selectedNode, nodeList[-1]);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const currentNodeID = selectedNode;
  //   const nodeTree = tree.state.data;
  //   const newTree = fsb(currentNodeID, nodeTree, newNodeItem);

  //   console.log(nodeList, "NEW TREE");
  //   newTree && setNodeList(newTree);
  // };

  // CONSOLE LOGS
  console.log(nodeList, "NODE LIST");
  console.log(selectedNode, "Selected");
  console.log(tree, "TREE");
  console.log(Object.entries(nodeList), "ENTRIES");
  const entries = Object.entries(nodeList);

  return (
    <div>
      {/* <button onClick={() => addNodeItem}>Start Node Building</button>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form> */}

      <div className=" d-flex tree">
        <div
          id="treeWrapper"
          className="nodeBuild"
          ref={treeContainer}
          style={{ width: innerWidth, height: innerHeight }}
        >
          <Tree
            data={nodeList.length > 0 ? nodeList : startNode}
            ref={tree}
            translate={translate}
            // zoom={0.5}
            nodeSvgShape={svgSquare}
            style={{ height: "600px", width: "600px" }}
            orientation="vertical"
            allowForeignObjects
            pathFunc="elbow"
            onNodeClick={(nodeData) => {
              setSelectedNode(nodeData);
            }}
            nodeLabelComponent={{
              render: <NodeLabel className="myLabelComponentInSvg" />,
              foreignObjectWrapper: {
                y: -10,
                x: -50,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NodeBuild;
