import "./styles/UsersProfilePage.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { UsersProfile } from "../organisms";
import { useParams } from "react-router";
import { useGetUsersProfileMutation } from "../../redux/api/profileApiSlice";
// import UsersPosts from "../organisms/UsersPosts";
import { useFetchUserPostsMutation } from "../../redux/api/postApiSlice";

function UsersProfilePage() {
  // const location = useLocation();
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState();
  const [posts, setPosts] = useState([]);

  const [getUsersProfile, { isLoading, isSuccess, isError }] =
    useGetUsersProfileMutation();

  const [fetchUserPosts] = useFetchUserPostsMutation();

  const fetchUsersProfile = async () => {
    const res = await getUsersProfile(username).unwrap();
    setUserProfile(res.data);
    console.log(res.data);
  };

  const fetchPost = async () => {
    const res = await fetchUserPosts(userProfile?._id).unwrap();
    setPosts(res.data);
  };

  useEffect(() => {
    fetchUsersProfile();
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
