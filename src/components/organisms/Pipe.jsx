import "./styles/Pipe.css";
import { useEffect } from "react";
import { useFetchPipePostsMutation } from "../../redux/api/postApiSlice";
import { Link } from "react-router-dom";
import PostCard from "../molecules/PostCard/PostCard";
import { useInView } from "react-intersection-observer";
import { setPipePosts } from "../../redux/slices/postSlice";
import { useDispatch, useSelector } from "react-redux";

function Pipe() {
  const dispatch = useDispatch();

  const [fetchPipePosts, { isSuccess, isError }] = useFetchPipePostsMutation();
  const { page, totalPages, data } = useSelector((state) => state.post.pipe);
  const { ref: inViewRef, inView } = useInView();

  const fetchPost = async () => {
    try {
      const res = await fetchPipePosts(page).unwrap();
      dispatch(setPipePosts(res.data));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page <= totalPages && inView) fetchPost();
  }, [inView]);

  return (
    <section className="Pipe">
      <div className="Pipe-Container">
        {isSuccess && data.length === 0 && <p>No Posts Available</p>}
        {data.map((post) => (
          <PostCard key={post._id} post={post} isPipe={true} />
        ))}
        {isError && <p>Something went wrong!</p>}
        {page < totalPages + 1 && !isError && (
          <div ref={inViewRef} className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <PipeFooter />
      </div>
    </section>
  );
}

const PipeFooter = () => {
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
};

export default Pipe;
