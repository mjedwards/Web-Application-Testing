import React from "react";

const Fouls = props => {
  return (
    <div>
      Foul Count: {props.fouls > 2 ? 0 : props.fouls}
      <button onClick={props.countFouls}>Click</button>
    </div>
  );
};

export default Fouls;
