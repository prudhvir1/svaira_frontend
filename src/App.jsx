import { Route, Routes } from "react-router";
import {
  LoginPage,
  HomePage,
  ProfilePage,
  SettingsPage,
  ChatPage,
} from "./components/pages";
import { Layout, Prefetch, AuthRoutes, PersistLogin } from "./components/utils";
import { Login, Register } from "./components/organisms";
import DashLayout from "./components/utils/DashLayout";
import TrendingPage from "./components/pages/TrendingPage";
import ViewPost from "./components/organisms/ViewPost";
import UsersProfilePage from "./components/pages/UsersProfilePage";
import ProfileRoute from "./components/utils/ProfileRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route element={<LoginPage />}>
          <Route index path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>

        {/* Private Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<AuthRoutes />}>
            <Route element={<Prefetch />}>
              {/* Main Start */}
              <Route element={<DashLayout />}>
                <Route path="/" element={<HomePage />}>
                  <Route path="Post/:id" element={<ViewPost />} />
                </Route>
                <Route path=":username" element={<ProfileRoute />} />
                <Route path="Trending" element={<TrendingPage />} />
                <Route path="Chat" element={<ChatPage />} />
                <Route path="Settings" element={<SettingsPage />} />
                {/* <Route path=":username" element={<UsersProfilePage />} /> */}
              </Route>
              {/* Main End */}
            </Route>
          </Route>
        </Route>
        {/* Private Routes End */}
      </Route>
    </Routes>
  );
}

export default App;
