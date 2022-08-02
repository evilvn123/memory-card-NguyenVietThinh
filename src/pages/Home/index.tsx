import { useEffect, useState } from "react";
import { ICard, Status } from "../../interfaces/Card";
import Game from "../../components/Game";
import generateCards from "../../__mockup/cards";
import "./styles.scss";

const Home = () => {
  const [cards, setCards] = useState<ICard[]>(generateCards);
  const [faceUpCards, setFaceUpCards] = useState<ICard[]>([]);

  useEffect(() => {
    const openCards = cards.filter(
      (card: ICard) => card.status === Status.FACE_UP
    );
    setFaceUpCards(openCards);
  }, [cards]);

  useEffect(() => {
    faceUpCards.length >= 2 &&
      setTimeout(() => {
        setCards((previousCards: ICard[]): ICard[] =>
          previousCards.map((card: ICard) =>
            card.status === Status.FACE_UP
              ? {
                  ...card,
                  status:
                    faceUpCards[0].value === faceUpCards[1].value
                      ? Status.LOCK
                      : Status.FACE_DOWN,
                }
              : card
          )
        );
      }, 700);
  }, [faceUpCards]);

  const handleClick = (cardId: number) => {
    faceUpCards.length < 2 &&
      setCards((previousCards: ICard[]): ICard[] =>
        previousCards.map((card: ICard) =>
          card.id === cardId && card.status === Status.FACE_DOWN
            ? { ...card, status: Status.FACE_UP }
            : card
        )
      );
  };

  return (
    <div className="page">
      <div title="title" className="title">
        GAME
      </div>
      <div data-testid="cardList" className="cards">
        {cards.map((card: ICard) => {
          return <Game key={card.id} item={card} onClick={handleClick} />;
        })}
      </div>
    </div>
  );
};

export default Home;
