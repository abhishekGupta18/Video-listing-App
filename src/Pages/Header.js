import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/allVideos">Videos</NavLink> ||
      <NavLink to="/likedVideos">Liked Videos</NavLink> ||
      <NavLink to="/watchLater">Watch Later</NavLink>
    </div>
  );
};
