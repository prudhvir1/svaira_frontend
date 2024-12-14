/* eslint-disable react/prop-types */
import {
  useFollowUserMutation,
  useUnFollowUserMutation,
} from "../../redux/api/userApiSlice";
import ProfileAvatar from "../atoms/ProfileAvatar";
import ProfileTitle from "../atoms/ProfileTitle";
import "./styles/UsersProfile.css";

function UsersProfile({ userProfile: profile }) {
  const [followUser, { isError, isSuccess, isLoading }] =
    useFollowUserMutation();
  const [unFollowUser] = useUnFollowUserMutation();

  const handleFollowUser = async () => {
    const res = profile.isFollowing
      ? await unFollowUser(profile._id).unwrap()
      : await followUser(profile._id).unwrap();
    console.log(res.data);
  };

  return (
    <div className="UsersProfile">
      <div className="UsersProfile-Container">
        <div className="UsersProfile-Header">
          <div className="UsersProfile-Header-Container">
            <ProfileAvatar avatar={profile?.avatar} />
            <div className="UsersProfile-Info">
              <div className="UsersProfile-About">
                <ProfileTitle
                  fullname={profile?.fullname}
                  username={profile?.username}
                />
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
      </div>
    </div>
  );
}
export default UsersProfile;
