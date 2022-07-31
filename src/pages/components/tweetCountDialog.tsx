import { useEffect, useState } from "react";
import "./assets/styles/tweetCount.css";

type tweetCountDialogProps = {
  tweets?: number;
  hidden?: boolean;
};

const TweetCountDiaglog: React.FC<tweetCountDialogProps> = ({
  tweets,
  hidden,
}) => {
  const [tweetCount, setTweetCount] = useState(0);

  useEffect(() => {
    if (!tweets) {
      setTweetCount(Math.floor(Math.random() * 1000));
    }
  }, [tweets, hidden]);

  return (
    <div
      className="d-flex align-items-center justify-content-center tweet-count-wrapper hover-effect-component"
      hidden={hidden}
    >
      <p className="blue-tweet-color">
        {`Mostrar ${tweets ? tweets : tweetCount} Tweets`}
      </p>
    </div>
  );
};

export default TweetCountDiaglog;
