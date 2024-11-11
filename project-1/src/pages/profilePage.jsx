import React from "react";
import Menu from "../component/Menu.jsx";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  let { facebookID, YouTubeID } = useParams();
  return (
    <div>
      <Menu />
      <p>YouTube={YouTubeID}</p>
      <p>facebookID={facebookID}</p>
      <h1>Hello world</h1>
    </div>
  );
};

export default ProfilePage;
