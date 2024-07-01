import { Route, Routes } from "react-router";
import "./App.css";
import {
  CreatePostPage,
  LoginPage,
  HomePage,
  ProfilePage,
  SettingsPage,
} from "./components/pages";
import { Layout, Prefetch, AuthRoutes, PersistLogin } from "./components/utils";
import { Login, Register } from "./components/organisms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<LoginPage />}>
          <Route index path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>

        <Route element={<PersistLogin />}>
          <Route path="/" element={<AuthRoutes />}>
            <Route element={<Prefetch />}>
              <Route index path="Home" element={<HomePage />} />
              <Route path="New-Post" element={<CreatePostPage />} />
              <Route path="Profile" element={<ProfilePage />} />
              <Route path="Settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
