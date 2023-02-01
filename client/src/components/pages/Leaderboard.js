import React, { useState, useEffect } from "react";
import { get } from "../../utilities.js";

import "../../utilities.css";
import "./Leaderboard.css";

const Leaderboard = (props) => {
  const [leaderboard, setLeaderboard] = useState({
    overallrep: [{ name: "NaN", overallrep: NaN }],
    rep1: [{ name: "NaN", best_rep1: NaN }],
    rep2: [{ name: "NaN", best_rep2: NaN }],
    rep3: [{ name: "NaN", best_rep3: NaN }],
    rep4: [{ name: "NaN", best_rep4: NaN }],
    overallskill: [{ name: "NaN", overallskill: NaN }],
    gamesplayed: [{ name: "NaN", games_played: NaN }],
  });

  useEffect(() => {
    get("/api/leaderboard-profiles").then((result) => {
      setLeaderboard(result);
    });
  }, []);

  return (
    <>
      <div className="leaderboardContainer">
        <div className="leaderboard">
          <div>
            <h1>Best Overall Reputation</h1>
          </div>
          {leaderboard["overallrep"].map((value, index) => {
            return (
              <div className={"u-flex u-flex-alignCenter leaderboardPair"}>
                <span className="leaderboardNames u-bold">{value.name + ":"}</span>
                <span className="leaderboardContent">{value.overallrep}</span>
              </div>
            );
          })}
        </div>
        <div className="leaderboard">
          <div>
            <h1>Best Ed G Tonne Reputation</h1>
          </div>
          {leaderboard["rep1"].map((value, index) => {
            return (
              <div className={"u-flex u-flex-alignCenter leaderboardPair"}>
                <span className="leaderboardNames u-bold">{value.name + ":"}</span>
                <span className="leaderboardContent">{value["best_rep1"]}</span>
              </div>
            );
          })}
        </div>
        <div className="leaderboard">
          <div>
            <h1>Best JP Silverbags Reputation</h1>
          </div>
          {leaderboard["rep2"].map((value, index) => {
            return (
              <div className={"u-flex u-flex-alignCenter leaderboardPair"}>
                <span className="leaderboardNames u-bold">{value.name + ":"}</span>
                <span className="leaderboardContent">{value["best_rep2"]}</span>
              </div>
            );
          })}
        </div>
        <div className="leaderboard">
          <div>
            <h1>Best Martin L Ray Reputation</h1>
          </div>
          {leaderboard["rep3"].map((value, index) => {
            return (
              <div className={"u-flex u-flex-alignCenter leaderboardPair"}>
                <span className="leaderboardNames u-bold">{value.name + ":"}</span>
                <span className="leaderboardContent">{value.best_rep3}</span>
              </div>
            );
          })}
        </div>
        <div className="leaderboard">
          <div>
            <h1>Best Sylvia Besk Reputation</h1>
          </div>
          {leaderboard["rep4"].map((value, index) => {
            return (
              <div className={"u-flex u-flex-alignCenter leaderboardPair"}>
                <span className="leaderboardNames u-bold">{value.name + ":"}</span>
                <span className="leaderboardContent">{value.best_rep4}</span>
              </div>
            );
          })}
        </div>
        <div className="leaderboard">
          <div>
            <h1>Most Games Played</h1>
          </div>
          {leaderboard["gamesplayed"].map((value, index) => {
            return (
              <div className={"u-flex u-flex-alignCenter leaderboardPair"}>
                <span className="leaderboardNames u-bold">{value.name + ":"}</span>
                <span className="leaderboardContent">{value.games_played}</span>
              </div>
            );
          })}
        </div>
        <div className="leaderboard">
          <div>
            <h1>Best Overall Skill</h1>
          </div>
          {leaderboard["overallskill"].map((value, index) => {
            return (
              <div className={"u-flex u-flex-alignCenter leaderboardPair"}>
                <span className="leaderboardNames u-bold">{value.name + ":"}</span>
                <span className="leaderboardContent">{value.overallskill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
