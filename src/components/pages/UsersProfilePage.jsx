import "./styles/UsersProfilePage.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { UsersProfile } from "../organisms";
import { useParams } from "react-router";
import { useGetUsersProfileMutation } from "../../redux/api/profileApiSlice";
import { eventEmitter } from "../utils/eventEmitter";

function UsersProfilePage() {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState();

  const [getUsersProfile, { isLoading, isSuccess, isError }] =
    useGetUsersProfileMutation();

  const fetchUsersProfile = async () => {
    const res = await getUsersProfile(username).unwrap();
    setUserProfile(res.data);
  };

  useEffect(() => {
    fetchUsersProfile();
    eventEmitter.on("followUser", fetchUsersProfile);
  }, []);

  const UsersPosts = lazy(() => import("../organisms/UsersPosts"));

  return (
    <main className="UsersProfilePage">
      {isLoading && <p>Loading...</p>}
      {isSuccess && (
        <>
          <UsersProfile userProfile={userProfile} />
          <Suspense fallback={<p>Loading</p>}>
            <UsersPosts userId={userProfile?._id} />
          </Suspense>
        </>
      )}

      {isError && <p>User not found!</p>}
    </main>
  );
}
export default UsersProfilePage;
