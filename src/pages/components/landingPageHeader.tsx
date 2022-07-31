import { BsStars } from "react-icons/bs";
import "./assets/styles/landingPageHeader.css";

const LandingPageHeader: React.FC = () => {
  return (
    <>
      <div className="blurred-bkg" />

      <div className="d-flex justify-content-between align-items-center landing-header p-2 sticky">
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
    </>
  );
};

export default LandingPageHeader;
