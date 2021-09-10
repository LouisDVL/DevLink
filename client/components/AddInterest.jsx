import React from "react";
import { useParams } from "react-router-dom";

function AddInterest(props) {
  const { nodeId } = useParams();
  return <h1>Hello {nodeId}</h1>;
}

export default AddInterest;
