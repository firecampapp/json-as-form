import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import JSONForm from "../src/index";

const App = () => {
  let JSONState = [
    /*{
      key: "name",
      value: "Nishchit",
      type: "string"
    },
    {
      key: "file",
      value: "",
      type: "file"
    },
    {
      key: "is available?",
      value: false,
      type: "boolean"
    }*/
  ];

  let JSONObj = {
    // name: "Nishchit"
  };
  let [state, setState] = useState(JSONObj);
  let [jsonArr, setJsonArr] = useState(JSONState);

  return (
    <div>
      <pre>{JSON.stringify(state, 4, 4)}</pre>
      <JSONForm
        json={state}
        fixedKeys={[]}
        debug={false}
        autoAddRow={true}
        onChange={v => {
          // console.log(v);
          setState(v);
        }}
        rowInterpolator={row => {
          console.log("row interpolator", row);
          if (row.value == "Dhanani") row.value = "Firecamp";
          return row;
        }}
      />

      <JSONForm
        json={jsonArr}
        fixedKeys={[]}
        debug={false}
        autoAddRow={true}
        onChange={v => {
          // console.log(v);
          setJsonArr(v);
        }}
        rowInterpolator={row => {
          console.log("row interpolator", row);
          if (row.value == "Dhanani") row.value = "Firecamp";
          return row;
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
