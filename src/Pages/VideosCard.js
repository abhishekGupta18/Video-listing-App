import { NavLink } from "react-router-dom";

import { useVideosContext } from "../Context/VideosContext";

import "./VideosCard.css";

export const VideoCard = ({
  id,
  title,
  description,
  url,
  thumbnail,
  duration,
}) => {
  const { addToLike, watchLater } = useVideosContext();
  return (
    <article>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>
        <NavLink to={`/allVideos/${id}`}>Watch here</NavLink>
      </p>
      <div>
        <button onClick={() => addToLike(id)}>Liked</button>
        <button onClick={() => watchLater(id)}>Watch later</button>
      </div>
    </article>
  );
};
