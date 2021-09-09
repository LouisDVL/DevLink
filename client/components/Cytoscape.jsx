import CytoscapeComponent from "react-cytoscapejs";
import React, { useEffect } from "react";
import { getAll } from "../api/nodes";
import { connect } from "react-redux";
import { getAllNodes } from "../actions/nodes";

function Cytoscape(props) {
  const layout = { name: "random" };
  const { nodes, dispatch, waiting } = props;

  useEffect(() => {
    dispatch(getAllNodes());
  }, []);

  const stylesheet = [
    {
      selector: "node",
      style: {
        label: "data(label)",
      },
    },
  ];

  function setElements() {
    if (nodes.length != 0) {
      return nodes.map((elem) => {
        console.log(elem);
        return {
          data: {
            ...elem,
          },
        };
      });
    }
    return;
  }

  console.log(nodes);

  let elements = setElements();
  console.log(elements);
  return (
    <>
      {waiting ? (
        <h1>Loading</h1>
      ) : (
        <CytoscapeComponent
          stylesheet={stylesheet}
          elements={elements}
          style={{ width: "600px", height: "600px" }}
          layout={layout}
        />
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    nodes: state.nodes,
    waiting: state.waiting,
  };
}

export default connect(mapStateToProps)(Cytoscape);
