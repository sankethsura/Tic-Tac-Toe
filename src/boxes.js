import React from "react";
import SingleBox from "./indivisualBoxes";

function Boxes(props) {
  let arrId = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const boxes = [];
  //creating 3 boxes in loop
  for (let i = 0; i < 3; i++) {
    boxes.push(
      <SingleBox
        key={i}
        id={arrId[props.j][i]}
        handleXO={props.handleXO}
        iniXO={props.iniXO}
        setIniXO={props.setIniXO}
        value1={props.value1}
        indexVal={props.indexVal}
        setIndexVal={props.setIndexVal}
        reset ={props.reset}
        resetGame ={props.resetGame}
        setReset = {props.setReset}
      />
    );
  }

  return <div className="flex row-span-3 m-2">{boxes}</div>;
}

export default Boxes;
