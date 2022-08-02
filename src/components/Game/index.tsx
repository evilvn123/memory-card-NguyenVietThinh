import Card from "../Card";
import { ICard, Status } from "../../interfaces/Card";
import "./styles.scss";
import jsLogo from "../../img/js-badge.svg";

interface Props {
  item: ICard;
  onClick: (id: number) => void;
}

const Game = (props: Props) => {
  const { item, onClick } = props;
  return (
    <div
      data-testid="memoryCard"
      className="memory-card"
      onClick={() => {
        onClick(item.id);
      }}
    >
      <Card isFaceUp={item.status !== Status.FACE_DOWN}>
        <div className="card__front">
          <img data-testid="frontImage" src={jsLogo} alt="logo"></img>
        </div>
        <div className="card__back">
          <img data-testid="backImage" src={item.image} alt={item.value}></img>
        </div>
      </Card>
    </div>
  );
};

export default Game;
