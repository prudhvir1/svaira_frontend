/* eslint-disable react/prop-types */

import "./styles/ProfileStat.css";
function ProfileStat({ posts, followers, following, style }) {
  return (
    <div className="ProfileStat" style={style}>
      <div className="ProfileStat-Block">
        <p>{posts ? posts : "0"}</p> <p>Posts</p>
      </div>
      <div className="ProfileStat-Block">
        <p>{followers ? followers : "0"}</p> <p>Followers</p>
      </div>
      <div className="ProfileStat-Block">
        <p>{following ? following : "0"}</p> <p>Following</p>
      </div>
    </div>
  );
}
export default ProfileStat;
