import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./Pages/Header";
import { HomePage } from "./Pages/Home";
import { AllVideos } from "./Pages/AllVideos";
import { LikedVideos } from "./Pages/LikedVideos";
import { WatchLater } from "./Pages/WatchLater";
import { VideoDetails } from "./Pages/VideoDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allVideos" element={<AllVideos />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/allVideos/:videoId" element={<VideoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
