import React from "react";

const Balls = props => {
  return (
    <div>
      Ball Count: {props.balls}
      <button onClick={props.countBalls}>Click</button>
    </div>
  );
};

export default Balls;
