/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./styles/ProfileStat.css";
function ProfileStat({ posts, followers, following }) {
  return (
    <div className="ProfileStat">
      <div className="ProfileStat-Block">
        <p>{posts}</p> <p>Posts</p>
      </div>
      <div className="ProfileStat-Block">
        <p>{followers}</p> <p>Followers</p>
      </div>
      <div className="ProfileStat-Block">
        <p>{following}</p> <p>Following</p>
      </div>
    </div>
  );
}
export default ProfileStat;
