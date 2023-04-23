import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/allVideos">Videos</NavLink> ||
      <NavLink to="/likedVideos">Liked Videos</NavLink> ||
      <NavLink to="/watchLater">Watch Later</NavLink>
    </>
  );
};
