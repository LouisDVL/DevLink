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
        width: "80px",
        height: "80px",
        borderWidth: "3px",
        borderColor: "#FF6700",
      },
    },
    {
      selector: "#5, #6, #7, #8, #9",
      style: {
        backgroundColor: "#EBEBEB",
        label: "data(label)",
        rectangle: "true",
        shape: "rectangle",
        width: "120px",
        height: "30px",
        borderWidth: "3px",
        borderColor: "#FF6700",
        textHalign: "center",
        textValign: "center",
      },
    },
    {
      selector: "edge-line",
      style: {
        lineColor: "#FF6700",
      },
    },
  ];

  function setElements() {
    if (nodes.length != 0) {
      return nodes.map((elem) => {
        return {
          data: {
            ...elem,
          },
        };
      });
    }
    return;
  }

  let elements = setElements();
  return (
    <>
      {waiting ? (
        <div className="spinner"></div>
      ) : (
        <div className="container">
          <CytoscapeComponent
            stylesheet={stylesheet}
            elements={elements}
            style={{ width: "100vw", height: "100vh" }}
            layout={layout}
            cy={(cy) => {
              cy.on("click", "node", (event) => {
                console.log(event.target._private.data.id);
              });
            }}
          />
        </div>
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
