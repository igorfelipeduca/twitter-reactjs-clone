import { useState } from "react";
import "../assets/styles/landing.css";
import { BsStars, BsImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { TbCalendarTime } from "react-icons/tb";
import { BiMap } from "react-icons/bi";
import UserImage from "./userImage";
import "./assets/styles/tweetBar.css";

const TweetBar: React.FC = () => {
  const [tweetText, setTweetText] = useState("");

  const RetornarBotaoTweet: React.FC = () => {
    if (tweetText === "") {
      return (
        <button className="small-tweet-button" disabled>
          Tweetar
        </button>
      );
    } else {
      return <button className="small-tweet-button">Tweetar</button>;
    }
  };

  return (
    <div className="tweet-bar">
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center sticky">
          <h5>
            <b>Página Inicial</b>
          </h5>

          <div
            className="hover-effect-component rounded-component p-3 ml-5 d-flex justify-content-center"
            style={{ cursor: "pointer" }}
          >
            <BsStars className="font-size-18" />
          </div>
        </div>

        <div className="mt-3 d-flex align-items-center">
          <UserImage md />

          <div>
            <input
              className="tweet-ghost-input ml-3"
              placeholder="O que está acontecendo?"
              value={tweetText}
              onChange={(e) => {
                setTweetText(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="ml-5 d-flex mt-2 justify-content-between align-items-center">
          <div className="d-flex">
            <div className="d-flex ml-3">
              <div
                className="twitter-blue-icon d-flex justify-content-center p-1"
                style={{ cursor: "pointer" }}
              >
                <BsImage className="font-size-18" />
              </div>
            </div>

            <div className="d-flex ml-3">
              <div
                className="twitter-blue-icon d-flex justify-content-center p-1"
                style={{ cursor: "pointer" }}
              >
                <AiOutlineGif className="font-size-18" />
              </div>
            </div>

            <div className="d-flex ml-3">
              <div
                className="twitter-blue-icon d-flex justify-content-center p-1"
                style={{ cursor: "pointer" }}
              >
                <RiBarChartHorizontalFill className="font-size-18" />
              </div>
            </div>

            <div className="d-flex ml-3">
              <div
                className="twitter-blue-icon d-flex justify-content-center p-1"
                style={{ cursor: "pointer" }}
              >
                <BsEmojiSmile className="font-size-18" />
              </div>
            </div>

            <div className="d-flex ml-3">
              <div
                className="twitter-blue-icon d-flex justify-content-center p-1"
                style={{ cursor: "pointer" }}
              >
                <TbCalendarTime className="font-size-18" />
              </div>
            </div>

            <div className="d-flex ml-3">
              <div
                className="twitter-blue-icon d-flex justify-content-center p-1"
                style={{ cursor: "pointer" }}
              >
                <BiMap className="font-size-18" />
              </div>
            </div>
          </div>

          <div>
            <RetornarBotaoTweet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetBar;
