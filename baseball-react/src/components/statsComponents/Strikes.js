import React from "react";

const Strikes = props => {
  return (
    <div>
      Strike Count: {props.strikes}
      <button onClick={props.countStrikes}>Click</button>
    </div>
  );
};

export default Strikes;
