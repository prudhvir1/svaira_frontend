import "./styles/VotedPosts.css";
import { useEffect, useState } from "react";
import PostCard from "../molecules/PostCard/PostCard";
import { useFetchVotedPostsMutation } from "../../redux/api/postApiSlice";
import { Link } from "react-router-dom";

function VotedPosts() {
  const [posts, setPosts] = useState([]);
  const [fetchVotedPosts, { isError, isLoading, isSuccess }] =
    useFetchVotedPostsMutation();

  const fetchPosts = async () => {
    const res = await fetchVotedPosts().unwrap();
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="VotedPosts">
      <div className="VotedPosts-Container">
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
          posts.map((post) => <PostCard key={post._id} post={post} />)}
        {isError && <p>Something went wrong!</p>}
      </div>
    </div>
  );
}

export default VotedPosts;
