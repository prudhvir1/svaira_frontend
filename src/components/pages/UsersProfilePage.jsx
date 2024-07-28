import { useEffect, useState } from "react";
import { UsersProfile } from "../organisms";
import { useLocation, useParams } from "react-router";
import { useGetUsersProfileMutation } from "../../redux/api/profileApiSlice";

function UsersProfilePage() {
  // const location = useLocation();
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState();

  const [getUsersProfile, { isLoading, isSuccess, isError }] =
    useGetUsersProfileMutation();

  const fetchUsersProfile = async () => {
    const res = await getUsersProfile(username).unwrap();
    setUserProfile(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchUsersProfile();
  }, []);

  return (
    <main className="UsersProfilePage">
      {isLoading && <p>Loading...</p>}
      {isSuccess && <UsersProfile userProfile={userProfile} />}
      {isError && <p>User not found!</p>}
    </main>
  );
}
export default UsersProfilePage;
