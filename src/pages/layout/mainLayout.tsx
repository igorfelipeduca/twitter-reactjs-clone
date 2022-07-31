import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import TweetExtraAside from "../components/tweetExtraAside";

const MainLayout: React.FC = () => {
  return (
    <>
      <main className="d-flex">
        <div className="sticky">
          <Sidebar />
        </div>
        <Outlet />
        <div className="sticky">
          <TweetExtraAside />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
