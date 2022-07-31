import { Card, CardBody } from "reactstrap";
import UserImage from "./userImage";
import "./assets/styles/userTooltip.css";

const WhoFollow: React.FC = () => {
  const ReturnGeneratedUsers: React.FC = () => {
    var list = [{}, {}, {}];

    return (
      <div>
        {list.map((user) => (
          <div className="mt-4 d-flex justify-content-between">
            <div className="d-flex">
              <UserImage md />

              <div className="ml-3">
                <b>
                  <p className="sidebar-screenname mr-1">duca🌹</p>
                </b>
                <span className="sidebar-username">@wluvigor</span>
              </div>
            </div>

            <button className="follow-tooltip-button">Seguir</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-2">
      <Card className="whats-happening-card">
        <CardBody>
          <h5>
            <b>Quem seguir</b>
          </h5>

          <ReturnGeneratedUsers />

          <p className="blue-tweet-color mt-4 hover-underline">Mostrar mais</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default WhoFollow;
