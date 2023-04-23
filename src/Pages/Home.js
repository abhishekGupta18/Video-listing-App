import { NavLink } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
      <h1>Welcome To Video Library</h1>
      <h3>To browse all videos, click on below button or go to videos page</h3>
      <button>
        <NavLink to="/allVideos">Explore Videos</NavLink>
      </button>
    </>
  );
};
