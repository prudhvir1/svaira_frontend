import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { usePersist } from "../../hooks";
import { selectCurrentToken } from "../../redux/slices/authSlice";
import { useRefreshMutation } from "../../redux/api/authApiSlice";
import Loader from "./Loader";

const PersistLogin = () => {
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError }] =
    useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true) {
      // React 18 Strict Mode

      const verifyRefreshToken = async () => {
        try {
          //const response =
          await refresh();
          //const { accessToken } = response.data
          setTrueSuccess(true);
        } catch (err) {
          console.error(err);
        }
      };

      if (!token && persist) verifyRefreshToken();
    }

    return () => (effectRan.current = true);

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
    content = <Loader />;
  } else if (isError) {
    //persist: yes, token: no
    console.log("error");
    content = <Outlet />;
  } else if (isSuccess && trueSuccess) {
    //persist: yes, token: yes
    console.log("success");
    content = <Outlet />;
  } else if (token && isUninitialized) {
    //persist: yes, token: yes
    console.log("token and uninit");
    console.log(isUninitialized);
    content = <Outlet />;
  }

  return content;
};
export default PersistLogin;
