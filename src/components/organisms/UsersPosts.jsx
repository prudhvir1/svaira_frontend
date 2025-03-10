/* eslint-disable react/prop-types */
import "./styles/UsersPosts.css";
import PostCard from "../molecules/PostCard/PostCard";
import { useFetchUserPostsMutation } from "../../redux/api/postApiSlice";
import MasonryLayout from "../utils/MasonryLayout";
import Loader from "../utils/Loader";
import { setUserPosts } from "../../redux/slices/postSlice";
import { usePaginatedPosts } from "../../hooks/usePaginatedPosts";

function UsersPosts({ userId }) {
  const { data, isError, isSuccess, inViewRef, loadMore } = usePaginatedPosts(
    useFetchUserPostsMutation,
    { userId },
    setUserPosts,
    (state) => state.post.user
  );

  return (
    <div className="UsersPosts">
      <MasonryLayout>
        {isSuccess && data.length === 0 && <p>No Posts Available...</p>}
        {data.map((post) => (
          <PostCard key={post._id} post={post} isPipe={false} />
        ))}
        {isError && <p>Something went wrong!</p>}
        {loadMore && !isError && <Loader ref={inViewRef} />}
      </MasonryLayout>
    </div>
  );
}

export default UsersPosts;
