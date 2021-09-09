import request from "superagent";

export function getAll() {
  return request
    .get("http://localhost:3000/api/v1/index/getAll")
    .then((data) => {
      return data.body;
    })
    .then((data) => {
      let nodeList = [];
      let newProcessEdges = data.edges.map((elem) => {
        return {
          ...elem,
          id: "" + 1001 + elem.id,
          source: "" + elem.source,
          target: "" + elem.target,
        };
      });
      nodeList = [...data.nodes, ...newProcessEdges];
      return nodeList;
    });
}
