import { useDispatch, useSelector } from "react-redux";
import ProfileAvatarEditCard from "../molecules/ProfileAvatarEditCard";
import "./styles/MobileProfileEdit.css";
import { getModalData, profileEditModal } from "../../redux/slices/modalSlice";
import { useState } from "react";
import { useUpdateProfileMutation } from "../../redux/api/profileApiSlice";
import { eventEmitter } from "../utils/eventEmitter";

function MobileProfileEdit() {
  const { data } = useSelector(getModalData);
  const [profile, setProfile] = useState(data);
  const dispatch = useDispatch();

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

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

  const handleGenderChange = (gender) => {
    setProfile((prev) => ({ ...prev, gender }));
  };

  const handleUpdateProfile = async () => {
    const { fullname, bio, gender, dateOfBirth } = profile;
    const updatedProfile = { fullname, bio, gender, dateOfBirth };

    try {
      const res = await updateProfile(updatedProfile).unwrap();
      if (res.success) {
        eventEmitter.emit("updateProfile");
        dispatch(profileEditModal({ value: false }));
      }
    } catch (error) {
      console.log(error?.data?.message);
    }
  };

  return (
    <div className="MobileProfileEdit">
      <div className="MobileProfileEdit-Container">
        <h1>Edit Profile</h1>
        <div className="MobileProfileEdit-Avatar">
          <ProfileAvatarEditCard avatar={profile?.avatar?.url} />
        </div>
        <div className="MobileProfileEdit-Name">
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Name"
            value={profile?.fullname}
            onChange={handleNameChange}
          />
        </div>
        <div className="MobileProfileEdit-Bio">
          <label htmlFor="bio">Bio</label>
          <textarea
            placeholder="Bio"
            name="bio"
            value={profile?.bio}
            onChange={handleBioChange}
          ></textarea>
        </div>
        <div className="MobileProfileEdit-DateOfBirth">
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
        <div className="MobileProfileEdit-Gender">
          <h5>Gender</h5>
          <div className="MobileProfileEdit-Gender-Options">
            <div className="Gender-Container">
              {["Male", "Female", "Other"].map((gender) => (
                <button
                  key={gender}
                  className="Gender-Label"
                  style={{
                    background: profile.gender === gender ? "#101010" : "",
                  }}
                  onClick={() => handleGenderChange(gender)}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="MobileProfileEdit-Buttons">
          <button
            className="cancel"
            onClick={() => dispatch(profileEditModal({ value: false }))}
          >
            Cancel
          </button>
          <button
            className="update"
            onClick={handleUpdateProfile}
            disabled={isLoading}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
export default MobileProfileEdit;
