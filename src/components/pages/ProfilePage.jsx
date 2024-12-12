import "./styles/ProfilePage.css";
import { ProfileCard } from "../organisms";
import ProfilePosts from "../organisms/ProfilePosts";

function ProfilePage() {
  return (
    <main className="ProfilePage">
      <ProfileCard />
      <ProfilePosts />
    </main>
  );
}
export default ProfilePage;
