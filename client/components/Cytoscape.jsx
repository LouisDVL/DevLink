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
      selector: "#1",
      style: {
        label: "data(label)",
        width: "80px",
        height: "80px",
        borderWidth: "3px",
        borderColor: "#FF6700",
        backgroundImage: "https://avatars.githubusercontent.com/u/62978181?s=64&v=4",
        backgroundFit: "cover",
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
