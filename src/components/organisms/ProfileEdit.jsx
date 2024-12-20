import { useDispatch, useSelector } from "react-redux";
import ProfileAvatarEditCard from "../molecules/ProfileAvatarEditCard";
import "./styles/ProfileEdit.css";
import { getPostData, profileEditModal } from "../../redux/slices/modalSlice";
import { useState } from "react";

function ProfileEdit() {
  const { data } = useSelector(getPostData);
  const [profile, setProfile] = useState(data);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    const fullname = e.target.value;
    if (fullname.length <= 150) setProfile((prev) => ({ ...prev, fullname }));
  };
  const handleBioChange = (e) => {
    const bio = e.target.value;
    if (bio.length <= 150) setProfile((prev) => ({ ...prev, bio }));
  };
  const handleDateOfBirthChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      dateOfBirth: e.target.value,
    }));
  };
  const handleGenderChange = (e) => {
    setProfile((prev) => ({ ...prev, gender: e.target.value }));
  };

  const handleUpdateProfile = () => {};

  return (
    <div className="ProfileEdit">
      <div className="ProfileEdit-Container">
        <div className="ProfileEdit-Avatar">
          <ProfileAvatarEditCard avatar={profile?.avatar?.url} />
        </div>
        <div className="ProfileEdit-Name">
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Name"
            value={profile?.fullname}
            onChange={handleNameChange}
          />
        </div>
        <div className="ProfileEdit-Bio">
          <label htmlFor="bio">Bio</label>
          <textarea
            placeholder="Bio"
            name="bio"
            value={profile?.bio}
            onChange={handleBioChange}
          ></textarea>
        </div>
        <div className="ProfileEdit-DateOfBirth">
          <label htmlFor="dateOfBirth">Birthday</label>
          <input
            type="date"
            name="dateOfBirth"
            id=""
            min="1900-01-01"
            value={profile?.dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div className="ProfileEdit-Gender">
          <h5>Gender</h5>
          <div className="ProfileEdit-Gender-Options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={profile.gender === "Male"}
                onChange={handleGenderChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={profile.gender === "Female"}
                onChange={handleGenderChange}
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={profile.gender === "Other"}
                onChange={handleGenderChange}
              />
              Other
            </label>
          </div>
        </div>
        <div className="ProfileEdit-Buttons">
          <button
            className="cancel"
            onClick={() => dispatch(profileEditModal({ value: false }))}
          >
            Cancel
          </button>
          <button className="update">Update</button>
        </div>
      </div>
    </div>
  );
}
export default ProfileEdit;
