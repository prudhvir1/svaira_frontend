import "./styles/UsersPosts.css";
import { useEffect, useState } from "react";
import PostCard from "../molecules/PostCard/PostCard";
import { useFetchUserPostsMutation } from "../../redux/api/postApiSlice";

function UsersPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [fetchUserPosts, { isLoading, isSuccess, isError }] =
    useFetchUserPostsMutation();

  const fetchPost = async () => {
    const res = await fetchUserPosts(userId).unwrap();
    setPosts(res.data);
    console.log(res.data);
  };

  // const user = useSelector((state) => state[apiSlice.reducerPath]);
  // console.log(user);
  // // const { usersProfile } = useSelector(getUsersProfile);

  useEffect(() => {
    if (userId) fetchPost();
  }, [userId]);

  return (
    <div className="UsersPosts">
      <div className="UsersPosts-Container">
        {isLoading && <p>Loading...</p>}
        {isSuccess && posts.length === 0 && <p>No Posts to vote...</p>}
        {isSuccess &&
          posts.map((post) => <PostCard key={post._id} post={post} />)}
        {isError && <p>Something went wrong!</p>}
      </div>
    </div>
  );
}
export default UsersPosts;
