import { NavLink } from "react-router-dom";

import "./VideosCard.css";
export const VideoCard = ({
  id,
  title,
  description,
  url,
  thumbnail,
  duration,
}) => {
  return (
    <article>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>
        <NavLink to={`/allVideos/${id}`}>Watch here</NavLink>
      </p>
      <div>
        <button>Liked</button>
        <button>Watch later</button>
      </div>
    </article>
  );
};
