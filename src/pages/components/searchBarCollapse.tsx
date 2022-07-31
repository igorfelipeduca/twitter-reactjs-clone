import { Card, CardBody } from "reactstrap";
import UserImage from "./userImage";
import "./assets/styles/collapseCard.css";
import { FiX } from "react-icons/fi";

const SearchBarCollapse: React.FC = () => {
  const ReturnGeneratedResults: React.FC = () => {
    var list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
      <div>
        {list.map((result) => (
          <div className="p-2 d-flex justify-content-between align-items-center w-100 hover-effect-component w-100 mb-2">
            <div className="d-flex">
              <UserImage md />

              <div className="ml-3">
                <div>
                  <b>
                    <p className="sidebar-screenname mr-1">duca🌹</p>
                  </b>
                  <span className="sidebar-username">@wluvigor</span>
                </div>
              </div>
            </div>

            <FiX className="blue-tweet-color" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card
      className="tweet-aside-collaps"
      style={{
        boxShadow: "0px 0px 16px -3px rgba(255,255,255,0.19)",
        background: "#15202b",
        maxHeight: 500,
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <CardBody>
        <div className="d-flex justify-content-between">
          <h5>
            <b>Recente</b>
          </h5>

          <div>
            <p className="blue-tweet-color blue-hover-effect-component clean-all-text">
              Limpar tudo
            </p>
          </div>
        </div>

        <ReturnGeneratedResults />
      </CardBody>
    </Card>
  );
};

export default SearchBarCollapse;
