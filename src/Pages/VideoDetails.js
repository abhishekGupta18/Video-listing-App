import { useParams } from "react-router-dom";
import { useVideosContext } from "../Context/VideosContext";

import "./VideoDetails.css";
export const VideoDetails = () => {
  const { videos } = useVideosContext();
  const { videoId } = useParams();
  const findVideo = videos?.find((item) => item.id === Number(videoId));
  const { id, title, description, url, thumbnail, duration } = findVideo;
  return (
    <article>
      <img src={thumbnail} alt={title} width="200px" height="200px" />
      <h3>{title}</h3>
      <p>
        <strong>Video Link: </strong>
        {url}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>
        <strong>Duration: </strong>
        {duration}
      </p>
      <div>
        <button>Liked</button>
        <button>Watch later</button>
      </div>
    </article>
  );
};
