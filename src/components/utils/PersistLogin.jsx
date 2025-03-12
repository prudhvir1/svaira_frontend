import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePersist } from "../../hooks";
import { selectCurrentToken } from "../../redux/slices/authSlice";
import { useRefreshMutation } from "../../redux/api/authApiSlice";
import Loader from "./Loader";

const PersistLogin = () => {
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError }] =
    useRefreshMutation();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
        setTrueSuccess(true);
      } catch (err) {
        console.error(err);
      }
    };

    if (!token && persist) verifyRefreshToken();

    // eslint-disable-next-line
  }, []);

  let content;
  if (!persist) {
    // persist: no
    console.log("no persist");
    content = <Outlet />;
  } else if (isLoading) {
    //persist: yes, token: no
    console.log("loading");
    // localStorage.setItem("isLoggedIn", false);
    content = <Loader />;
  } else if (isError) {
    //persist: yes, token: no
    console.log("error");
    localStorage.setItem("isLoggedIn", false);
    content = <Outlet />;
  } else if (isSuccess && trueSuccess) {
    //persist: yes, token: yes
    console.log("success");
    localStorage.setItem("isLoggedIn", true);
    content = <Outlet />;
  } else if (token && isUninitialized) {
    //persist: yes, token: yes
    console.log("token and uninit");
    console.log(isUninitialized);
    localStorage.setItem("isLoggedIn", true);
    content = <Outlet />;
  }

  return content;
};
export default PersistLogin;
