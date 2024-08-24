import "./styles/ActivityPage.css";
import VotedPosts from "../organisms/VotedPosts";
import { Route, Routes } from "react-router";
import { ViewPost } from "../organisms";

function ActivityPage() {
  return (
    <div className="ActivityPage">
      <VotedPosts />
      {/* <Routes>
        <Route path="post/:post" element={<ViewPost />} />
      </Routes> */}
    </div>
  );
}
export default ActivityPage;
