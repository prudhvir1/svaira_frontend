import "./styles/ProfilePosts.css";
import { useFetchUserPostsMutation } from "../../redux/api/postApiSlice";
import PostCard from "../molecules/PostCard/PostCard";
import { useSelector } from "react-redux";
import { setProfilePosts } from "../../redux/slices/postSlice";
import MasonryLayout from "../utils/MasonryLayout";
import Loader from "../utils/Loader";
import { usePaginatedPosts } from "../../hooks/usePaginatedPosts";

function ProfilePosts() {
  const { profile } = useSelector((state) => state.profile);
  const { data, isError, isSuccess, inViewRef, loadMore } = usePaginatedPosts(
    useFetchUserPostsMutation,
    { userId: profile?._id },
    setProfilePosts,
    (state) => state.post.profile
  );

  return (
    <div className="ProfilePosts">
      <MasonryLayout>
        {isSuccess && data.length === 0 && <p>No Posts to vote...</p>}
        {data.map((post) => (
          <PostCard key={post._id} post={post} isPipe={false} />
        ))}
        {isError && <p>Something went wrong!</p>}
        {loadMore && !isError && <Loader ref={inViewRef} />}
      </MasonryLayout>
    </div>
  );
}

export default ProfilePosts;
