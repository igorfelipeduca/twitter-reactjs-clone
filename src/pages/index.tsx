import "./assets/styles/landing.css";
import { Helmet } from "react-helmet";
import TweetBar from "./components/tweetBar";
import TweetCountDiaglog from "./components/tweetCountDialog";
import TweetComponent from "./components/tweetComponent";

const LandingPage: React.FC = () => {
  const GenerateTweets: React.FC = () => {
    var tweetlist = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
      <div>
        {tweetlist.map((tweet) => (
          <TweetComponent />
        ))}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Página Inicial / Twitter</title>
      </Helmet>

      <main className="main-content-wrapper">
        <TweetBar />

        <div>
          <TweetCountDiaglog />
        </div>

        <GenerateTweets />
      </main>
    </>
  );
};

export default LandingPage;
