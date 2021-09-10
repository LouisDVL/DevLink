import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function AddInterest(props) {
  const { nodeId } = useParams();
  const { nodes } = props;
  function setInterestOptions() {
    let interestOptions = nodes.filter(
      (elem) => elem.img === null && typeof elem.id == "number"
    );
    return interestOptions.map((opt) => {
      return <option value={opt.label} />;
    });
  }

  let options = setInterestOptions();
  return (
    <div className="container">
      <div className="content">
        <label>Choose an interest from this list: </label>
        <br />
        <input list="interests" type="search" name="myInterests" />
        <datalist id="interests">{options}</datalist>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    nodes: state.nodes,
  };
}

export default connect(mapStateToProps)(AddInterest);
