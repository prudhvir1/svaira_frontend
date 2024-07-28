/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./styles/ProfilePosts.css";
import PostCard from "../molecules/PostCard";
import { useFetchUserPostsMutation } from "../../redux/api/postApiSlice";
function ProfilePosts() {
  const [posts, setPosts] = useState([]);
  const [fetchPosts, { isLoading, isSuccess, isError }] =
    useFetchUserPostsMutation();

  const fetchPost = async () => {
    const res = await fetchPosts().unwrap();
    setPosts(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="ProfilePosts">
      <div className="ProfilePosts-Container">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
export default ProfilePosts;
