import "./styles/ProfileCard.css";
import { useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/profileSlice";
function ProfileCard() {
  const { profile } = useSelector(getProfile);

  return (
    <div className="ProfileCard">
      <div className="ProfileCard-Container">
        <div className="ProfileCard-Avatar">
          <img src={profile?.avatar?.url} alt={profile?.avatar?.filename} />
        </div>
        <div className="ProfileCard-Details">
          <div className="ProfileCard-Details-Name">
            <h1>{profile?.fullname}</h1>
            <p>/{profile?.username}</p>
          </div>
          <div className="ProfileCard-Details-Info">
            <div className="ProfileCard-Details-Info-Block">
              <p>{profile?.postsCount}</p> <p>Posts</p>
            </div>
            <div className="ProfileCard-Details-Info-Block">
              <p>{profile?.followersCount}</p> <p>Followers</p>
            </div>
            <div className="ProfileCard-Details-Info-Block">
              <p>{profile?.followingCount}</p> <p>Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
