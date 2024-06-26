import React, { useState } from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleMouseDown = () => {
    setIsBlurred(true);
  };

  const handleMouseUp = () => {
    setIsBlurred(false);
  };

  return (
    <button
      type="button"
      className={`${styles.btn} ${isBlurred ? styles.blurr : ""}`}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </button>
  );
};

export default Button;
