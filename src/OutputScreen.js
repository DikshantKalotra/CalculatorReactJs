import React from "react";
import { OutputRow } from "./OutputRow";

export const OutputScreen = (props) => {
  return (
    <div className="output-screen">
      <OutputRow name={"upper"} value={props.text.output}/>
      <OutputRow name={"lower"} value={props.text.input}/>
    </div>
  );
};
