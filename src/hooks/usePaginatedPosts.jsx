import { useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

/**
 * Custom hook to fetch paginated posts.
 * @param {Function} fetchPostsAPI - API function from Redux Toolkit (RTK Query).
 * @param {Function} setData - API function from Redux Toolkit (RTK Query).
 * @param {Function} getData - API function from Redux Toolkit (RTK Query).
 * @param {Object} params - Additional params (e.g., userId).
 * @returns {Object} { posts, isLoading, isError, loadMore, inViewRef }
 */
export const usePaginatedPosts = (
  fetchPostsAPI,
  params = {},
  setData,
  getData
) => {
  const dispatch = useDispatch();

  const { ref: inViewRef, inView } = useInView();
  const [fetchPosts, { isError, isLoading, isSuccess }] = fetchPostsAPI();
  const { page, totalPages, data } = useSelector(getData);

  const loadMore = totalPages >= page;

  const fetchMorePosts = useCallback(async () => {
    if (!loadMore) return;

    try {
      const res = await fetchPosts(
        Object.keys(params).length != 0 ? { ...params, page } : page
      ).unwrap();
      dispatch(setData(res.data));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, [fetchPosts, page, loadMore, params]);

  useEffect(() => {
    if (inView) fetchMorePosts();
  }, [inView]);

  return { data, isLoading, isError, isSuccess, loadMore, inViewRef };
};
