import { useState } from "react";
import styles from "./Like.module.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onClick();
  };
  if (isLiked)
    return (
      <AiFillHeart
        className={styles.btn}
        fill="#ffa6b1"
        size={50}
        onClick={handleLike}
      />
    );
  return (
    <AiOutlineHeart
      className={styles.btn}
      color="#ffa6b1"
      size={50}
      onClick={handleLike}
    />
  );
};

export default Like;
