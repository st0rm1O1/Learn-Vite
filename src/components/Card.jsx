import React, { useState, useCallback } from "react";
import style from "./Card.module.css";
import closeIcon from "../assets/icons/close.svg";

function Card({
  image = "https://placehold.co/200x200",
  title = "N/A",
  description = "N/A",
  draggable = false,
  onRemove = () => {},
}) {
  const [removing, setRemoving] = useState(false);

  const handleOnRemove = useCallback(() => {
    setRemoving(true);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (removing) {
      onRemove();
    }
  }, [removing, onRemove]);

  return (
    <div
      className={`${style.card} ${!removing ? style.card_animation : ""} ${
        removing ? style.card_removal_animation : ""
      }`}
      onAnimationEnd={handleTransitionEnd}
    >
      <img
        className={style.card_icon}
        src={closeIcon}
        alt="Close"
        draggable={false}
        loading="lazy"
        onClick={handleOnRemove}
      />
      <img
        className={style.card_image}
        src={image}
        alt="Profile"
        draggable={draggable}
        loading="lazy"
      />
      <h2 className={style.card_title}>{title}</h2>
      <p className={style.card_description}>{description}</p>
    </div>
  );
}

export default React.memo(Card);
