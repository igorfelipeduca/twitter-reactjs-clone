import UserImage from "./userImage";
import "./assets/styles/userTooltip.css";

const UserInfoTooltip: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <UserImage md className="mr-5" />

        <button className="follow-tooltip-button">Seguir</button>
      </div>

      <div className="d-flex justify-content-start">
        <div className="mt-2 d-flex align-items-center flex-column">
          <b>
            <h5 className="">duca🌹</h5>
          </b>

          <span className="gray-tweet-color tooltip-username">@wluvigor</span>
        </div>
      </div>

      <div className="d-flex justify-content-start mt-2">
        <p>falo merda e trabalho com programação</p>
      </div>

      <div className="d-flex justify-content-start mt-2">
        <div className="d-flex mr-4">
          <b>
            <p>544</p>
          </b>
          <p className="gray-tweet-color ml-2">Seguindo</p>
        </div>

        <div className="d-flex">
          <b>
            <p>4.3 mi</p>
          </b>
          <p className="gray-tweet-color ml-2">Seguidores</p>
        </div>
      </div>
    </>
  );
};

export default UserInfoTooltip;
