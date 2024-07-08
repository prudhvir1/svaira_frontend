import { useSelector } from "react-redux";
import { selectCurrentProfile } from "../../redux/slices/profileSlice";
function ProfileCard() {
  const profile = useSelector(selectCurrentProfile);

  return <div>{profile.profile?.fullname}</div>;
}
export default ProfileCard;
