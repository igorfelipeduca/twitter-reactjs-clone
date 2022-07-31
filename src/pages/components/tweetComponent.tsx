import { useState } from "react";
import { Row, Col, Tooltip } from "reactstrap";
import UserImage from "./userImage";
import { LoremIpsum } from "lorem-ipsum";
import "./assets/styles/tweetComponent.css";
import { FiMoreHorizontal, FiShare } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import UserInfoTooltip from "./userInfoTooltip";
import "./assets/styles/userTooltip.css";

const TweetComponent: React.FC = () => {
  const generatedText = () => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 1,
        min: 1,
      },
      wordsPerSentence: {
        max: 32,
        min: 4,
      },
    });

    return lorem.generateSentences(1);
  };

  return (
    <>
      <div className="d-flex pl-3 pt-3 tweet-component hover-effect-component">
        <UserImage id="tooltipOpener" md />

        <div className="ml-3 w-100">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <b>
                <p className="sidebar-screenname mr-1">duca🌹</p>
              </b>
              <span className="sidebar-username">@wluvigor</span>
            </div>

            <FiMoreHorizontal className="ml-5 font-size-20 mr-3 gray-tweet-color" />
          </div>

          <div>
            <p>{generatedText()}</p>
          </div>

          <div>
            <Row>
              <Col>
                <div className="d-flex align-items-center">
                  <div className="comment-tweet-button-wrapper">
                    <FaRegComment className="tweet-actions-button gray-tweet-color comment-tweet-button" />
                  </div>
                  <span className="gray-tweet-color ml-2 font-size-14 pb-3 comment-count-tweet-button">
                    75
                  </span>
                </div>
              </Col>

              <Col>
                <div className="d-flex align-items-center">
                  <AiOutlineRetweet className="tweet-actions-button gray-tweet-color retweet-tweet-button" />
                  <span className="gray-tweet-color ml-2 font-size-14 pb-3 retweet-tweet-button">
                    387
                  </span>
                </div>
              </Col>

              <Col>
                <div className="d-flex align-items-center">
                  <AiOutlineHeart className="tweet-actions-button gray-tweet-color heart-tweet-button" />
                  <span className="gray-tweet-color ml-2 font-size-14 pb-3 heart-tweet-button">
                    2.917
                  </span>
                </div>
              </Col>

              <Col>
                <FiShare className="tweet-actions-button gray-tweet-color" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetComponent;
