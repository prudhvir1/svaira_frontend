/* eslint-disable react/prop-types */
import { useFollowUserMutation } from "../../redux/api/userApiSlice";
import "./styles/UsersProfile.css";

function UsersProfile({ userProfile }) {
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
          <img src={profile.avatar.url} alt={profile.username} />
        </div>
        <div className="UsersProfile-Info">
          <div className="UsersProfile-About">
            <div className="UsersProfile-About-Name">
              <h2>{profile.fullname}</h2>
              <h4>/{profile.username}</h4>
            </div>
            <div className="UsersProfile-Follow">
              <div
                className="UsersProfile-FollowBtn"
                onClick={handleFollowUser}
              >
                {profile.isFollowing ? (
                  <button className="UsersProfile-FollowBtn-Following">
                    Following
                  </button>
                ) : (
                  <button className="UsersProfile-FollowBtn-Follow">
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="UserProfile-Desc">
            {profile?.bio ? (
              <p className="UserProfile-Desc-Main">{profile.bio}</p>
            ) : (
              <p className="UserProfile-Desc-Default">Bio</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function UsersProfile_Posts() {
  return <div className="UsersProfile-Posts"></div>;
}
