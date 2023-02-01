import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Profile.css";

const Profile = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
  }, []);

  if (!user) {
    return <div> Loading! </div>;
  }

  return (
    <>
      <h1 className="Profile-name u-textCenter">{user.name}</h1>
      <h1 className="Profile-h1">Overall Statistics</h1>
      <ul>
        <li>Games Played: </li>
        <li>Games Won: </li>
        <li>Games Lost: </li>
        <li>Best Technical Stat: </li>
        <li>Best Networking Stat: </li>
        <li>Best Presentation Stat: </li>
        <li>Best Cooking Stat: </li>
        <li>Best Ed G Tonne Affection: </li>
        <li>Best JP Silverbags Affection: </li>
        <li>Best Martin L Ray Affection: </li>
        <li>Best Sylvia Besk Affection: </li>
      </ul>
      <h1 className="Profile-h1">Achievements</h1>
      <div>Placeholder</div>
    </>
  );
};

export default Profile;
