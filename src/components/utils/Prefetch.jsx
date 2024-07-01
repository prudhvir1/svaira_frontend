import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { profileApiSlice } from "../../redux/api/profileApiSlice";
import { store } from "../../redux/store";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");
    store.dispatch(profileApiSlice.endpoints.getProfile.initiate());

    // return () => {
    //   console.log("unsubscribing");
    //   profile.unsubscribe();
    // };
  }, []);

  return <Outlet />;
};
export default Prefetch;
