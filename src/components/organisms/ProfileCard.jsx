import "./styles/ProfileCard.css";
import { useDispatch, useSelector } from "react-redux";
import ProfileAvatar from "../atoms/ProfileAvatar";
import ProfileTitle from "../atoms/ProfileTitle";
import ProfileStat from "../atoms/ProfileStat";
import {
  profileEditModal,
  settingsMenuModal,
} from "../../redux/slices/modalSlice";
import Settings from "./Settings";

function ProfileCard() {
  const { profile } = useSelector((state) => state.profile);
  const { isSettingsMenuModal } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  return (
    <div className="ProfileCard">
      <div className="ProfileCard-Container">
        <div className="ProfileCard-Left">
          <ProfileAvatar avatar={profile?.avatar} />

          <div className="ProfileCard-Details">
            <ProfileTitle fullname={profile?.fullname} bio={profile?.bio} />
            <ProfileStat
              posts={profile?.postsCount}
              followers={profile?.followersCount}
              following={profile?.followingCount}
            />
          </div>
        </div>
        <div className="ProfileCard-Right">
          <div className="ProfileCard-Options">
            <button
              className="edit-btn"
              onClick={() =>
                dispatch(profileEditModal({ value: true, data: profile }))
              }
            >
              Edit profile
            </button>
            <button
              className="settings-btn"
              onClick={() => dispatch(settingsMenuModal(true))}
            >
              <SettingsIcon />
            </button>
            {isSettingsMenuModal && <Settings />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;

function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361c0 .558-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453c.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"></path>
      </g>
    </svg>
  );
}
