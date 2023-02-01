import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Profile.css";

const Profile = (props) => {
  const [user, setUser] = useState();
  const [metaStats, setMetaStats] = useState({});

  useEffect(() => {
    get(`/api/user`, { userid: props.userId }).then((userObj) => {
      setUser(userObj);
      get("/api/userStats", { user_id: props.userId }).then((metaStatsObj) => {
        setMetaStats(metaStatsObj);
      });
    });
  }, []);

  if (!user) {
    return <div> Loading! </div>;
  }

  return (
    <div className="ProfileContainer">
      <h1 className="Profile-name u-textCenter">{user.name}</h1>
      <h1 className="Profile-h1">Overall Statistics</h1>
      <ul>
        <li>Games Played: {metaStats.games_played}</li>
        <li>Best Technical Stat: {metaStats.best_technical}</li>
        <li>Best Networking Stat: {metaStats.best_networking}</li>
        <li>Best Presentation Stat: {metaStats.best_presentation}</li>
        <li>Best Cooking Stat: {metaStats.best_cooking}</li>
        <li>Best Ed G Tonne Affection: {metaStats.best_rep1}</li>
        <li>Best JP Silverbags Affection: {metaStats.best_rep2}</li>
        <li>Best Martin L Ray Affection: {metaStats.best_rep3}</li>
        <li>Best Sylvia Besk Affection: {metaStats.best_rep4}</li>
      </ul>
      Share your profile link with your friends!
      {/* <h1 className="Profile-h1">Achievements</h1>
      <div>Placeholder</div> */}
    </div>
  );
};

export default Profile;
