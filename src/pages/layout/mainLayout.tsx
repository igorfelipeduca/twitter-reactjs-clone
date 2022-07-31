import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import TweetExtraAside from "../components/tweetExtraAside";
import LandingPageHeader from "../components/landingPageHeader";

const MainLayout: React.FC = () => {
  return (
    <>
      <main className="d-flex">
        <div className="sticky">
          <Sidebar />
        </div>
        <div>
          <LandingPageHeader />
          <Outlet />
        </div>
        <div className="sticky">
          <TweetExtraAside />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
