/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { accessTokenSelector } from "../../redux/slices/authSlice";
import { useRefreshMutation } from "../../redux/api/authApiSlice";
import { useEffect } from "react";
import ScreenLoader from "../organisms/ScreenLoader";

function AuthRoutes() {
  const token = useSelector(accessTokenSelector);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError }] =
    useRefreshMutation();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      }
    };

    if (!token) verifyRefreshToken();

    // eslint-disable-next-line
  }, []);

  let content;
  if (isLoading) {
    //persist: yes, token: no
    console.log("loading");
    content = <ScreenLoader />;
  } else if (isError) {
    //persist: yes, token: no
    console.log("error");
    content = <Navigate to="/login" replace />;
  } else if (isSuccess && token) {
    //persist: yes, token: yes
    console.log("success");
    content = <Outlet />;
  } else if (token && isUninitialized) {
    //persist: yes, token: yes
    console.log("token and uninit");
    content = <Outlet />;
  }

  return content;
}
export default AuthRoutes;
