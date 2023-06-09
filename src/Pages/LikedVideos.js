import { NavLink } from "react-router-dom";
import { useVideosContext } from "../Context/VideosContext";

import "./LikedVideos.css";
export const LikedVideos = () => {
  const { videos, RemoveFromLike } = useVideosContext();
  return (
    <div>
      <h1>List of all liked videos</h1>
      <ul>
        {videos
          ?.filter((item) => item.like)
          .map(({ id, title, description, url, thumbnail, duration }) => (
            <article style={{ listStyle: "none" }}>
              <img src={thumbnail} alt={title} />
              <h3>{title}</h3>
              <p>
                <NavLink to={`/allVideos/${id}`}>Watch here</NavLink>
              </p>
              <button onClick={() => RemoveFromLike(id)}>
                Remove from like
              </button>
            </article>
          ))}
      </ul>
    </div>
  );
};
