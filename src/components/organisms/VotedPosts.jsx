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
        <PipeFooter />
      </div>
    </div>
  );
}

function PipeFooter() {
  return (
    <div className="Pipe-Footer">
      <div className="Pipe-Footer-Links">
        <Link>Svaira</Link>
        <Link>About</Link>
        <Link>Blog</Link>
        <Link>Help</Link>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>Contact</Link>
      </div>
      <p>&copy; SVAIRA 2024</p>
    </div>
  );
}
export default VotedPosts;
