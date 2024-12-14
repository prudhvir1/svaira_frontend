/* eslint-disable react/prop-types */
import "./styles/ProfileTitle.css";

function ProfileTitle({ fullname, username }) {
  return (
    <div className="ProfileTitle">
      <h2>{fullname}</h2>
      <p>/{username}</p>
    </div>
  );
}
export default ProfileTitle;
