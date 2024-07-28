import { useParams } from "react-router";
import { ProfilePage } from "../pages";
import UsersProfilePage from "../pages/UsersProfilePage";
import { useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/profileSlice";

function ProfileRoute() {
  const { username } = useParams();
  const { profile } = useSelector(getProfile);

  return username === profile?.username ? (
    <ProfilePage />
  ) : (
    <UsersProfilePage />
  );
}
export default ProfileRoute;
