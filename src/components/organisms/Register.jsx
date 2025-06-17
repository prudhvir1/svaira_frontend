import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./styles/Register.css";
import { useNavigate } from "react-router";
import { useSignupMutation } from "../../redux/api/authApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fullnameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [signup, { isLoading }] = useSignupMutation();

  useEffect(() => {
    fullnameRef.current.focus();
  }, []);

  const handleFullname = () => {
    setFullname(fullnameRef.current.value);
  };
  const handleUsername = () => {
    setUsername(usernameRef.current.value);
  };
  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };
  const handlePassword = () => {
    setPassword(passwordRef.current.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup({
        fullname,
        username,
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...res.data }));
      navigate("/login");
    } catch (error) {
      console.log(error.data);
    }
  };

  const handleSignup = () => {};

  return (
    <div className="Register">
      <div className="Login-Logo">
        <h3>S.</h3>
        <p>post your poll</p>
      </div>
      <div className="RegisterContainer">
        <h2>Signup</h2>
        <p>
          Welcome to<strong> SVAIRA.</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="inputDiv fullnameBox">
            <input
              type="text"
              placeholder="Fullname"
              name="fullname"
              value={fullname}
              ref={fullnameRef}
              onChange={handleFullname}
              autoComplete="off"
            />
          </div>
          <div tabIndex={1} className="inputDiv usernameBox">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              ref={usernameRef}
              onChange={handleUsername}
              autoComplete="off"
            />
          </div>
          <div className="inputDiv emailBox">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              ref={emailRef}
              onChange={handleEmail}
              autoComplete="off"
            />
          </div>
          {/* <div className="inputDiv phoneBox">
            <input
              type="text"
              placeholder="Phone (optional)"
              name="phone"
              value={phone}
              ref={phoneRef}
              onChange={handlePhone}
              autoComplete="off"
            />
          </div> */}
          <div className="inputDiv passwordBox">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={password}
              ref={passwordRef}
              onChange={handlePassword}
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="EyeBtn"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M22.295 6.31a.75.75 0 0 1 .394.986L22 7l.69.296v.001l-.002.003l-.003.007l-.01.024l-.039.084a13.858 13.858 0 0 1-.727 1.321a15.053 15.053 0 0 1-1.846 2.394l.968.969a.75.75 0 0 1-1.06 1.06l-1.001-1a11.548 11.548 0 0 1-2.274 1.497l.934 1.435a.75.75 0 1 1-1.258.818l-1.089-1.674c-.78.255-1.623.428-2.532.49V16.5a.75.75 0 0 1-1.5 0v-1.775a10.46 10.46 0 0 1-2.46-.466l-1.074 1.65a.75.75 0 1 1-1.258-.818l.913-1.402a11.503 11.503 0 0 1-2.293-1.49l-.96.96a.75.75 0 0 1-1.061-1.06l.924-.924A15.03 15.03 0 0 1 1.514 7.72a9.524 9.524 0 0 1-.188-.388l-.01-.025l-.004-.007v-.003H1.31L2 7l-.69.296a.75.75 0 0 1 1.379-.592v.002l.007.014l.029.063a12.39 12.39 0 0 0 .65 1.177c.475.76 1.197 1.747 2.18 2.662c.867.805 1.928 1.546 3.197 2.034A8.97 8.97 0 0 0 12 13.25a8.963 8.963 0 0 0 3.312-.619c1.262-.497 2.316-1.243 3.175-2.049a13.303 13.303 0 0 0 2.789-3.8l.028-.063l.006-.013v-.001m.985-.394a.75.75 0 0 0-.984.394zM2.69 6.704"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                    <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></path>
                    <path d="M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56c-.267.605-.383 1.264-.383 2.152c0 .888.116 1.547.383 2.152c.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75c4.514 0 7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56c.267-.605.383-1.264.383-2.152c0-.888-.116-1.547-.383-2.152c-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25M3.87 9.162C5.498 7.045 8.15 4.75 12 4.75c3.85 0 6.501 2.295 8.13 4.412c.44.57.696.91.865 1.292c.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25c-3.85 0-6.501-2.295-8.13-4.412c-.44-.57-.696-.91-.865-1.292c-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
          <p>
            By signing up, you agree to our Terms, <br />
            Privacy Policy and Cookies Policy.
          </p>
          <div className="SubmitBtn">
            <button type="submit" onClick={handleSignup} disabled={isLoading}>
              Sign up
            </button>
          </div>
        </form>
      </div>

      <div className="LoginBtn">
        <p>
          Account Exist? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Register;
