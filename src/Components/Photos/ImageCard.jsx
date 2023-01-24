import "./slider.css";

const Card = ({ src }) => {
  return <img className="image" src={src} draggable="false" alt="pictures" />;
};

export default Card;
