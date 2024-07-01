import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/api/authApiSlice";
import { useNavigate } from "react-router";
import { setCredentials } from "../../redux/slices/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const profile = useSelector(selectCurrentProfile);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleUsernameChange = () => setUsername(usernameRef.current.value);
  const handlePasswordChange = () => setPassword(passwordRef.current.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res.data }));
      navigate("/Home");
    } catch (error) {
      console.log(error.data);
    }
  };
  const handleForgotPassword = () => {};
  const handleCreateAccount = () => {
    navigate("/Register");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="Username">
          <input
            type="text"
            name="username"
            ref={usernameRef}
            placeholder="Username/Email/Phone"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="off"
          />
        </div>
        <div className="Password">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            ref={passwordRef}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>
        <div className="SubmitBtn">
          <button type="submit" disabled={isLoading}>
            Login
          </button>
          {isLoading && <p>Loading..</p>}
        </div>
      </form>
      <p onClick={handleForgotPassword}>Forgot Password</p>
      <p onClick={handleCreateAccount}>Create new account</p>
    </div>
  );
}

export default Login;
