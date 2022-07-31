import { LoremIpsum } from "lorem-ipsum";
import "./assets/styles/whatsHappening.css";

const WhatsHContent: React.FC = () => {
  const loremTitle = new LoremIpsum({
    wordsPerSentence: {
      max: 3,
      min: 2,
    },
  });

  const loremContent = new LoremIpsum({
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  });

  const loremTrending = new LoremIpsum({
    wordsPerSentence: {
      max: 3,
      min: 1,
    },
  });

  return (
    <div className="d-flex justify-content-between align-items-center hover-effect-component mt-3">
      <div className="whats-h-title-wrapper">
        <span className="gray-tweet-color font-size-14">
          {loremTitle.generateSentences(1)} • há 3 horas
        </span>

        <p>
          <b>{loremContent.generateSentences(1)}</b>
        </p>

        <span className="gray-tweet-color font-size-12">
          Assuntos do Momento:{" "}
          <span className="blue-tweet-color hover-underline">
            {loremTrending.generateSentences(1)}
          </span>
        </span>
      </div>

      <div>
        <img
          src="https://random.imagecdn.app/500/150"
          alt={loremTitle.generateSentences(1)}
          className="wh-image"
        />
      </div>
    </div>
  );
};

export default WhatsHContent;
