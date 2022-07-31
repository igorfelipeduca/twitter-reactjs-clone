import { Card, CardBody } from "reactstrap";
import WhatsHContent from "./whatsHContent";

const WhatsHappening: React.FC = () => {
  const ReturnGeneratedWH: React.FC = () => {
    var list = [{}, {}, {}, {}, {}];

    return (
      <div>
        {list.map((wh) => (
          <WhatsHContent />
        ))}
      </div>
    );
  };

  return (
    <div className="p-2">
      <Card className="whats-happening-card">
        <CardBody>
          <h5>
            <b>O que está acontecendo</b>
          </h5>

          <div className="mt-3">
            <ReturnGeneratedWH />
          </div>

          <p className="blue-tweet-color mt-4 hover-underline">Mostrar mais</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default WhatsHappening;
