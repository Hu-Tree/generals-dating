import React from "react";
import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "./NavBar.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "718159611952-1cqno013kmj0avh78nki59hfctlgovqt.apps.googleusercontent.com";

/**
 * propTypes
 * @param {string} userId id of current logged in user
 * @param {function} handleLogin
 * @param {function} handleLogout
 */
const NavBar = (props) => {
  return (
    <>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <nav className="NavBar-container">
          <div className="NavBar-title u-inlineBlock"> {"Unexpected♡Internships"}</div>
          <div className="NavBar-linkContainer u-inlineBlock">
            <Link to="/" className="NavBar-link">
              Game
            </Link>
            {props.userId && (
              <Link to={`/profile/${props.userId}`} className="NavBar-link">
                Profile
              </Link>
            )}
            <Link to="/leaderboard/" className="NavBar-link">
              Leaderboards
            </Link>
          </div>
          <div className="u-inlineBlock NavBar-googleContainer">
            {props.userId ? (
              <button
                onClick={() => {
                  googleLogout();
                  props.handleLogout();
                }}
              >
                Logout
              </button>
            ) : (
              <GoogleLogin onSuccess={props.handleLogin} onError={(err) => console.log(err)} />
            )}
          </div>
        </nav>
      </GoogleOAuthProvider>
      <div className="NavBarSpacer"></div>
    </>
  );
};

export default NavBar;
