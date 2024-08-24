/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./styles/ProfilePosts.css";
import { useFetchUserPostsMutation } from "../../redux/api/postApiSlice";
import PostCard from "../molecules/PostCard/PostCard";
import { useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/profileSlice";
function ProfilePosts() {
  const [posts, setPosts] = useState([]);
  const [fetchUserPosts, { isLoading, isSuccess, isError }] =
    useFetchUserPostsMutation();

  const { profile } = useSelector(getProfile);

  const fetchPost = async () => {
    const res = await fetchUserPosts(profile?._id).unwrap();
    setPosts(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="ProfilePosts">
      <div className="ProfilePosts-Container">
        {isLoading && <p>Loading...</p>}
        {isSuccess && posts.length === 0 && <p>No Posts to vote...</p>}
        {isSuccess &&
          posts.map((post) => <PostCard key={post._id} post={post} />)}
        {isError && <p>Something went wrong!</p>}
      </div>
    </div>
  );
}
export default ProfilePosts;
