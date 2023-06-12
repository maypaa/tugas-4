import { useState } from "react";
import "./Charge.css";

const Charge = (props) => {
  const [liked, setLiked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.pict} alt={props.name} />
      <button className={`like-button ${liked ? "liked" : ""}`} onClick={handleLike}>
        {liked ? "Batal suka" : "Suka"}
      </button>
      <button
        className={`description-button ${showDescription ? "hide" : "show"}`}
        onClick={handleToggleDescription}
      >
        {showDescription ? "Sembunyikan Deskripsi" : "Selengkapnya"}
      </button>   
      {showDescription && <p>{props.desk}</p>}
    </div>
  );
};

export default Charge;