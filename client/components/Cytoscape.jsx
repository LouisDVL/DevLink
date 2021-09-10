import CytoscapeComponent from "react-cytoscapejs";
import React, { useEffect } from "react";
import { getAll } from "../api/nodes";
import { connect } from "react-redux";
import { getAllNodes } from "../actions/nodes";
import { useHistory } from "react-router-dom";

function Cytoscape(props) {
  const layout = { name: "random" };
  const { nodes, dispatch, waiting } = props;
  const history = useHistory();

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
            style={{ width: "600px", height: "600px" }}
            layout={layout}
            cy={(cy) => {
              cy.on("click", "node", (event) => {
                console.log(event.target._private.data.id);
                history.push(`/addInterest/${event.target._private.data.id}`);
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
