/* eslint-disable react/prop-types */
import {
  useFollowUserMutation,
  useUnFollowUserMutation,
} from "../../redux/api/userApiSlice";
import ProfileAvatar from "../atoms/ProfileAvatar";
import ProfileStat from "../atoms/ProfileStat";
import ProfileTitle from "../atoms/ProfileTitle";
import "./styles/UsersProfile.css";

function UsersProfile({ profile, setProfile }) {
  const [followUser, { isLoading }] = useFollowUserMutation();
  const [unFollowUser, { isLoading: isUnfollowLoading }] =
    useUnFollowUserMutation();

  const handleFollowUser = async () => {
    const res = profile.isFollowing
      ? await unFollowUser(profile._id).unwrap()
      : await followUser(profile._id).unwrap();

    console.log(Boolean(res?.data?.profile));

    if (res?.success && Boolean(res?.data?.profile)) {
      setProfile((prev) => ({
        ...prev,
        followersCount: prev.followersCount + 1,
        isFollowing: !prev.isFollowing,
      }));
    } else {
      setProfile((prev) => ({
        ...prev,
        followersCount: prev.followersCount - 1,
        isFollowing: !prev.isFollowing,
      }));
    }
  };

  return (
    <div className="UsersProfile">
      <div className="UsersProfile-Container">
        <div className="UsersProfile-Header">
          <div className="UsersProfile-Header-Container">
            <ProfileAvatar avatar={profile?.avatar} />
            <div className="UsersProfile-Info">
              <div className="UsersProfile-About">
                <ProfileTitle fullname={profile?.fullname} bio={profile?.bio} />
                <ProfileStat
                  posts={profile?.postsCount}
                  followers={profile?.followersCount}
                  following={profile?.followingCount}
                />
                <div className="UsersProfile-Follow">
                  <div
                    className="UsersProfile-FollowBtn"
                    onClick={handleFollowUser}
                  >
                    <button
                      className={`UsersProfile-FollowBtn-${
                        profile?.isFollowing ? "Following" : "Follow"
                      }`}
                      disabled={isLoading || isUnfollowLoading}
                    >
                      {(isLoading || isUnfollowLoading) && (
                        <span className="loader"></span>
                      )}
                      {profile?.isFollowing ? "Following" : "Follow"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UsersProfile;
