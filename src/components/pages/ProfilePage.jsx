import "./styles/ProfilePage.css";
import { ProfileCard } from "../organisms";
import ProfilePosts from "../organisms/ProfilePosts";
import ProfileStat from "../atoms/ProfileStat";
import { useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/profileSlice";
import MobileProfileCard from "../organisms/MobileProfileCard";

function ProfilePage() {
  const { profile } = useSelector(getProfile);
  const { isMobile } = useSelector((state) => state.util);

  return (
    <main className="ProfilePage">
      {isMobile ? (
        <>
          <h4
            style={{
              position: "sticky",
              top: "-1px",
              zIndex: "100",
              background: "#111",
              width: "100%",
              textAlign: "center",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            /{profile?.username}
          </h4>
          <MobileProfileCard />
          <ProfileStat
            style={{
              borderTop: "1px solid #888",
              position: "sticky",
              top: "3rem",
              zIndex: "1000",
              paddingTop: ".5rem",
              paddingBottom: "1rem",
              background: "#111",
              width: "100%",
              justifyContent: "space-evenly",
            }}
            posts={profile?.postsCount}
            followers={profile?.followersCount}
            following={profile?.followingCount}
          />
        </>
      ) : (
        <ProfileCard />
      )}
      <ProfilePosts />
    </main>
  );
}
export default ProfilePage;
