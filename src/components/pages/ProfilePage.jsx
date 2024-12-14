import "./styles/ProfilePage.css";
import { ProfileCard } from "../organisms";
import ProfilePosts from "../organisms/ProfilePosts";
import ProfileStat from "../atoms/ProfileStat";
import { useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/profileSlice";

function ProfilePage() {
  const { profile } = useSelector(getProfile);
  return (
    <main className="ProfilePage">
      <ProfileCard />
      <ProfileStat
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "1000",
          paddingBottom: "1rem",
          background: "#111",
          width: "100%",
        }}
        posts={profile?.postsCount}
        followers={profile?.followersCount}
        following={profile?.followingCount}
      />
      <ProfilePosts />
    </main>
  );
}
export default ProfilePage;
