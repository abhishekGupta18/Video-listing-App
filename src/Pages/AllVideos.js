import { useVideosContext } from "../Context/VideosContext";
import { VideoCard } from "./VideosCard";

export const AllVideos = () => {
  const { videos } = useVideosContext();
  return (
    <div>
      <ul
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "100px",
        }}
      >
        {videos?.map((item) => (
          <li style={{ listStyle: "none" }}>
            <VideoCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
