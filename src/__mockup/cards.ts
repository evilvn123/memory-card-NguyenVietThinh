import { ICard, Status } from "../interfaces/Card";
import angular from "../img/angular.svg";
import aurelia from "../img/aurelia.svg";
import backbone from "../img/backbone.svg";
import ember from "../img/ember.svg";
import react from "../img/react.svg";
import vue from "../img/vue.svg";

const images = [angular, aurelia, backbone, ember, react, vue];

const generateCards = (): ICard[] => {
  const duplicateCards: ICard[] = images.concat(images).map((item, index) => ({
    id: index,
    image: item,
    status: Status.FACE_DOWN,
    value: `${item}`,
  }));
  return duplicateCards.sort(() => Math.random() - 0.5);
};
export default generateCards();
