import React from "react";

function SingleBox(props) {
  const [boolean, setBoolean] = React.useState(false);
  const [XOvalue, setXOvalue] = React.useState("");

  function handleXOvalue() {
    setXOvalue(() => {
      if (XOvalue === "") {
        return props.value1;
      } else return XOvalue;
    });
  }

  function X(id) {
    //function to print X on clicking
    setBoolean((e) => {
      if (e === false) {
        return !e;
      } else return e;
    });
    props.setIndexVal(() => id);
  }
  let styles2 = { color: XOvalue ? "white" : "grey" };
  let styles = { display: boolean ? "" : "none" };
//   console.log(props.resetGame);
  function a() {
    if (!props.resetGame) {
      // console.log(boolean);
      setBoolean(() => false);
      setXOvalue(() => "");
      props.setReset(() => true);
    }
  }
  setTimeout(a, 100);

  return (
    <div>
      <div
        style={styles2}
        key={props.id}
        onClick={() => {
          X(props.id);
          props.handleXO(props.id);
          handleXOvalue(props.value1);
        }}
        className="w-[70px] h-[70px] bg-[#63acaa] m-2 hover:bg-slate-300 duration-300 font-bold text-lg rounded-md "
      >
        <div
          style={styles}
          className="absolute translate-x-8
            translate-y-5 "
        >
          {XOvalue}
        </div>
      </div>
    </div>
  );
}

export default SingleBox;
