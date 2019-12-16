import React from "react";

const Hits = props => {
  return (
    <div>
      Hit Count: {props.hits}
      <button onClick={props.countHits}>Click</button>
    </div>
  );
};

export default Hits;
