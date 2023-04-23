import { NavLink } from "react-router-dom";
import { useVideosContext } from "../Context/VideosContext";

export const WatchLater = () => {
  const { videos } = useVideosContext();
  return (
    <div>
      <h1>Watch Later</h1>
      <ul>
        {videos
          ?.filter((item) => item?.watchLater)
          .map(({ id, title, description, url, thumbnail, duration }) => (
            <article style={{ listStyle: "none" }}>
              <img src={thumbnail} alt={title} />
              <h3>{title}</h3>
              <p>
                <NavLink to={`/allVideos/${id}`}>Watch here</NavLink>
              </p>
            </article>
          ))}
      </ul>
    </div>
  );
};
