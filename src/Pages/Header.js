import { NavLink } from "react-router-dom";

import { useVideosContext } from "../Context/VideosContext";

export const Header = () => {
  const { videos } = useVideosContext();

  const totalLikedVideos = videos?.filter((item) => item.like);
  const totalWatchLaterVideos = videos?.filter((item) => item.watchLater);
  return (
    <div style={{ marginTop: "20px" }}>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/allVideos">Videos</NavLink> ||
      <NavLink to="/likedVideos">
        Liked Videos({totalLikedVideos.length})
      </NavLink>{" "}
      ||
      <NavLink to="/watchLater">
        Watch Later({totalWatchLaterVideos.length})
      </NavLink>
    </div>
  );
};
