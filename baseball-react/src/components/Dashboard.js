import React from "react";
import Balls from "../components/statsComponents/Balls";
import Strikes from "../components/statsComponents/Strikes";
import Fouls from "../components/statsComponents/Fouls";
import Hits from "../components/statsComponents/Hits";

const Dashboard = props => {
  return (
    <div>
      Keep track of stats:
      <Balls balls={props.balls} countBalls={props.countBalls} />
      <Strikes strikes={props.strikes} countStrikes={props.countStrikes} />
      <Fouls fouls={props.fouls} countFouls={props.countFouls} />
      <Hits hits={props.hits} countHits={props.countHits} />
    </div>
  );
};

export default Dashboard;
