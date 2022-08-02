import { PropsWithChildren } from "react";
import "./styles.scss";

interface Props {
  isFaceUp: boolean;
}

const Card = ({ children, isFaceUp }: PropsWithChildren<Props>) => {
  return (
    <div data-testid="card" className={`card ${isFaceUp ? "face-up" : ""}`}>
      {children}
    </div>
  );
};

export default Card;
