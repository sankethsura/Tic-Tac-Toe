import "./App.css";
import Boxes from "./boxes";
import React from "react";
import { useEffect } from "react";

function App() {
  const [arr, setArr] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [iniXO, setIniXO] = React.useState(true);
  const [indexVal, setIndexVal] = React.useState("");
  const value1 = iniXO ? "X" : "0";
  const [resetGame,setReset] = React.useState(true)
  const [win ,setWin] = React.useState("Nobody")
  const [object, setObject] = React.useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });

  function empty() {
    return {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
    };
  }

  useEffect(() => {
    setObject((old) => {
      return {
        ...old,
        [indexVal]: value1,
      };
    });
  }, [value1]);

  function handleXO(e) {
    if (arr.includes(e)) {
      setIniXO((e) => !e);
      setArr((prev) => {
        return prev.filter((val, index) => {
          return val !== e;
        });
      });
    }
  }

  let allBoxes = [];
  for (let j = 0; j < 3; j++) {
    allBoxes.push(
      <Boxes
        key={j}
        j={j}
        handleXO={handleXO}
        iniXO={iniXO}
        setIniXO={setIniXO}
        value1={value1}
        indexVal={indexVal}
        setIndexVal={setIndexVal}
        reset ={reset}
        resetGame ={resetGame}
        setReset = {setReset}
      />
    );
  }
  function reset(){
    setArr(()=>[1, 2, 3, 4, 5, 6, 7, 8, 9])
    setIniXO(()=>true)
    setIndexVal(()=>"")
    setObject(()=>empty())
    setReset((e)=>!e)
  }
  // console.log(arr)
  //LOGIC
  if (object[1] && object[2] && object[3]) {
    if (object[1] === object[2] && object[2] == object[3]) {
      wining(object[1])
      // setObject(()=>empty())
    }
  }
  if (object[4] && object[5] && object[6]) {
    if (object[4] === object[5] && object[5] == object[6]) {
      wining(object[4])
    }
  }
  if (object[7] && object[8] && object[9]) {
    if (object[7] === object[8] && object[8] == object[9]) {
      wining(object[7])
    }
  }
  if (object[1] && object[4] && object[7]) {
    if (object[1] === object[4] && object[4] == object[7]) {
      wining(object[1])
    }
  }
  if (object[2] && object[5] && object[8]) {
    if (object[2] === object[5] && object[5] == object[8]) {
      wining(object[2])
    }
  }
  if (object[3] && object[6] && object[9]) {
    if (object[3] === object[6] && object[6] == object[9]) {
      wining(object[3])
    }
  }
  if (object[1] && object[5] && object[9]) {
    if (object[1] === object[5] && object[5] == object[9]) {
      wining(object[1])
    }
  }
  if (object[7] && object[5] && object[3]) {
    if (object[7] === object[5] && object[5] == object[3]) {
      wining(object[7])
    }
  }
  function wining(val){
    setWin(()=>val)
    reset()
  }
  console.log(win)
  //
  return (
    <div className="App mx-[10%] flex flex-col items-center">
      <div className="font-bold text-3xl underline py-10 w-[350px] rounded-lg">
        Tic-Tac-Toe
      </div>
      <div className="bg-slate-200 p-10 rounded-md">{allBoxes}</div>
      <div className="font-extrabold text-lg">Result : {win} {" "} Lost the previous game</div>
      <div className="font-semibold text-lg p-5 bg-slate-200 m-5 flex rounded-xl">
        It's <div className="text-[#63acaa] px-2">"{value1}"</div>'s turns
      </div>
      <div onClick={reset} className="font-semibold text-lg p-5 bg-slate-200 m-5 rounded-xl">
        Restart Game
      </div>
    </div>
  );
}

export default App;
