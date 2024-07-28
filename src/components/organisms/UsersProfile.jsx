/* eslint-disable react/prop-types */
import { useFollowUserMutation } from "../../redux/api/userApiSlice";
import "./styles/UsersProfile.css";

function UsersProfile({ userProfile }) {
  console.log(userProfile);
  return (
    <div className="UsersProfile">
      <div className="UsersProfile-Container">
        <UsersProfile_Header profile={userProfile} />
        <UsersProfile_Posts />
      </div>
    </div>
  );
}
export default UsersProfile;

function UsersProfile_Header({ profile }) {
  const [followUser, { isError, isSuccess, isLoading }] =
    useFollowUserMutation();

  const handleFollowUser = async () => {
    const res = await followUser(profile._id).unwrap();
    console.log(res.data);
  };

  return (
    <div className="UsersProfile-Header">
      <div className="UsersProfile-Header-Container">
        <div className="UsersProfile-Avatar">
          <img src={profile.avatar.url} alt={profile.avatar.filename} />
        </div>
        <div className="UsersProfile-Details">
          <h2>{profile.fullname}</h2>
          <h4>{profile.username}</h4>
        </div>
        <div className="UsersProfile-Follow">
          <button onClick={handleFollowUser}>Follow</button>
        </div>
      </div>
    </div>
  );
}

function UsersProfile_Posts() {
  return <div className="UsersProfile-Posts"></div>;
}
