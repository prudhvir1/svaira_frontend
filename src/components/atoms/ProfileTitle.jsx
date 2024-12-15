/* eslint-disable react/prop-types */
import "./styles/ProfileTitle.css";

function ProfileTitle({ fullname, bio }) {
  return (
    <div className="ProfileTitle">
      <div className="ProfileTitle-Container">
        <h3>{fullname}</h3>
        {bio ? <p>{bio}</p> : <p style={{ color: "#999" }}>Add Bio</p>}
      </div>
    </div>
  );
}
export default ProfileTitle;
