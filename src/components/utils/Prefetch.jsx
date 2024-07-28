/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { profileApiSlice } from "../../redux/api/profileApiSlice";
import { store } from "../../redux/store";
import { postApiSlice } from "../../redux/api/postApiSlice";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");
    store.dispatch(profileApiSlice.endpoints.getProfile.initiate());
    // store.dispatch(postApiSlice.endpoints.fetchPosts.initiate());

    // return () => {
    //   console.log("unsubscribing");
    //   profile.unsubscribe();
    // };
  }, []);

  return <Outlet />;
};
export default Prefetch;
