import "./styles/ProfilePage.css";
import { ProfileCard } from "../organisms";
import ProfilePosts from "../organisms/ProfilePosts";

function ProfilePage() {
  return (
    <main className="ProfilePage">
      <section>
        <ProfileCard />
      </section>
      <section>
        <ProfilePosts />
      </section>
    </main>
  );
}
export default ProfilePage;
