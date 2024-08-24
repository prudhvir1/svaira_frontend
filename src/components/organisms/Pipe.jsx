import "./styles/Pipe.css";
import { useEffect, useState } from "react";
import { useFetchPipePostsMutation } from "../../redux/api/postApiSlice";
import { Link } from "react-router-dom";
import PostCard from "../molecules/PostCard/PostCard";

function Pipe() {
  const [posts, setPosts] = useState([]);
  const [fetchPipePosts, { isLoading, isSuccess, isError }] =
    useFetchPipePostsMutation();

  const fetchPost = async () => {
    const res = await fetchPipePosts().unwrap();
    setPosts(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="Pipe">
      <div className="Pipe-Container">
        {isLoading && <p>Loading...</p>}
        {isSuccess && posts.length === 0 && <p>No Posts to vote...</p>}
        {isSuccess &&
          posts.map((post) => <PostCard key={post._id} post={post} />)}
        {isError && <p>Something went wrong!</p>}
        <PipeFooter />
      </div>
    </section>
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

export default Pipe;
