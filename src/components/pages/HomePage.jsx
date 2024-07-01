import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../redux/slices/authSlice";
import { selectCurrentProfile } from "../../redux/slices/profileSlice";

function HomePage() {
  const profile = useSelector(selectCurrentProfile);
  const token = useSelector(selectCurrentToken);

  return (
    <div>
      <p>{profile.profile?.fullName}</p>
      <p>{token}</p>
    </div>
  );
}
export default HomePage;
