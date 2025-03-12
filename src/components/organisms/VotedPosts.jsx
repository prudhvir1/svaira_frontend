import "./styles/VotedPosts.css";
import PostCard from "../molecules/PostCard/PostCard";
import { useFetchVotedPostsMutation } from "../../redux/api/postApiSlice";
import { setVotedPosts } from "../../redux/slices/postSlice";
import MasonryLayout from "../utils/MasonryLayout";
import Loader from "../utils/Loader";
import { usePaginatedPosts } from "../../hooks/usePaginatedPosts";

function VotedPosts() {
  const { data, isError, isSuccess, inViewRef, loadMore } = usePaginatedPosts(
    useFetchVotedPostsMutation,
    {},
    setVotedPosts,
    (state) => state.post.voted
  );

  return (
    <div className="VotedPosts">
      <MasonryLayout>
        {isSuccess && data.length === 0 && <p>No Posts Available...</p>}
        {data.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
        {isError && <p>Something went wrong!</p>}
      </MasonryLayout>
      {loadMore && !isError && <Loader ref={inViewRef} />}
    </div>
  );
}

export default VotedPosts;
