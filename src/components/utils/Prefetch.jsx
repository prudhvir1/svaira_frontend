/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { profileApiSlice } from "../../redux/api/profileApiSlice";
import { store } from "../../redux/store";
import { postApiSlice } from "../../redux/api/postApiSlice";

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(profileApiSlice.endpoints.getProfile.initiate());
  }, []);

  return <Outlet />;
};
export default Prefetch;
