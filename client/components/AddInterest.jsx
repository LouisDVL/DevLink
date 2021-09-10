import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { sendInterestNode } from "../actions/nodes";

function AddInterest(props) {
  const { nodeId } = useParams();
  const { nodes, dispatch, waiting } = props;
  const [interest, setInterest] = useState("");
  const history = useHistory();
  function setInterestOptions() {
    let interestOptions = nodes.filter(
      (elem) => elem.img === null && typeof elem.id == "number"
    );
    return interestOptions.map((opt, index) => {
      return <option key={"" + (7777 + index)} value={opt.label} />;
    });
  }

  function getPerson() {
    return nodes.filter((item) => item.id == nodeId);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(sendInterestNode(nodeId, interest, history));
  }

  let options = setInterestOptions();
  let person = getPerson()[0];
  return (
    <>
      {waiting ? (
        <div className="spinner"></div>
      ) : (
        <div className="container">
          <div className="content">
            <label>
              Choose an interest for {person.label} from this list:{" "}
            </label>
            <br />
            <input
              list="interests"
              type="search"
              name="myInterests"
              onChange={(e) => {
                setInterest(e.target.value);
              }}
            />
            <datalist id="interests">{options}</datalist>
            <button className="submitButton" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </div>
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

export default connect(mapStateToProps)(AddInterest);
