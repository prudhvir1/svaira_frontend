import { Route, Routes, useLocation } from "react-router";
import { LoginPage, HomePage, SettingsPage } from "./components/pages";
import { Prefetch, AuthRoutes } from "./components/utils";
import { Login, Register } from "./components/organisms";
import ViewPost from "./components/organisms/ViewPost";
import ProfileRoute from "./components/utils/ProfileRoute";
import { DashLayout, Layout } from "./components/layouts";
import ActivityPage from "./components/pages/ActivityPage";

function App() {
  const location = useLocation();
  const state = location.state || {};

  return (
    <>
      <Routes location={state.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route element={<LoginPage />}>
            <Route index path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Private Routes */}
          {/* <Route element={<PersistLogin />}> */}
          <Route element={<AuthRoutes />}>
            <Route element={<Prefetch />}>
              {/* Main Start */}
              <Route path="/" element={<DashLayout />}>
                <Route path="" element={<HomePage />} />
                <Route path="activity" element={<ActivityPage />} />
                <Route path=":username" element={<ProfileRoute />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
              {/* Main End */}
              {<Route path="/post/:post" element={<ViewPost />} />}
            </Route>
          </Route>
        </Route>
        {/* Private Routes End */}
        {/* </Route> */}
      </Routes>
      {state.backgroundLocation && (
        <Routes>
          <Route path="/post/:post" element={<ViewPost />} />
        </Routes>
      )}
    </>
  );
}

export default App;
