import "./assets/styles/tweetExtraAside.css";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { Collapse, Row, Col } from "reactstrap";
import SearchBarCollapse from "./searchBarCollapse";
import WhatsHappening from "./whatsHappening";
import WhoFollow from "./whoFollow";

const TweetExtraAside: React.FC = () => {
  const [activeInput, setActiveInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleInputActiveState = () => {
    setActiveInput(true);
    setIsOpen(!isOpen);
  };

  const returnWrapperClasses = () => {
    if (activeInput)
      return "active-search-tweet-wrapper d-flex align-items-center";
    else return "search-tweet-wrapper d-flex align-items-center";
  };

  const returnSearchIconClasses = () => {
    if (activeInput) return "blue-tweet-color font-size-18";
    else return "gray-tweet-color font-size-18";
  };

  return (
    <div className="p-4">
      <div className={returnWrapperClasses()}>
        <FiSearch className={returnSearchIconClasses()} />

        <input
          type="text"
          className="aside-tweet-search ml-3"
          placeholder="Buscar no Twitter"
          onClick={toggleInputActiveState}
        />
      </div>

      <Collapse isOpen={isOpen}>
        <SearchBarCollapse />
      </Collapse>

      <div className="mt-3">
        <WhatsHappening />
      </div>

      <div className="mt-3">
        <WhoFollow />
      </div>

      <div className="ml-3">
        <Row style={{ maxWidth: 400 }}>
          <Col md={4}>
            <span className="small-info-text">Termos de Serviço</span>
          </Col>
          <Col md={5}>
            <span className="small-info-text">Política de Privacidade</span>
          </Col>
          <Col md={4}>
            <span className="small-info-text">Política de cookies</span>
          </Col>
          <Col md={4}>
            <span className="small-info-text">Acessibilidade</span>
          </Col>
          <Col md={5}>
            <span className="small-info-text">Informações de anúncios</span>
          </Col>
          <Col md={4}>
            <span className="small-info-text">Mais ...</span>
          </Col>
          <Col md={4}>
            <span className="small-info-text">@2022 Duca, Igor</span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TweetExtraAside;
