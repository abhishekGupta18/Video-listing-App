import { createContext, useContext, useEffect, useState } from "react";

import { fakeFetch } from "../Fakefetch";

export const VideosContext = createContext();

export const VideosContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/videos");
      if (response?.status === 200) {
        setVideos(response?.data?.videos);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const addToLike = (id) => {
    // const newVideos = [...videos];
    const likedVideo = videos?.map((item) => {
      if (item.id === id) {
        return { ...item, like: true };
      } else {
        return item;
      }
    });
    setVideos(likedVideo);
  };
  const RemoveFromLike = (id) => {
    const removeVideo = videos?.map((item) => {
      if (item.id === id) {
        return { ...item, like: false };
      } else {
        return item;
      }
    });
    setVideos(removeVideo);
  };

  return (
    <VideosContext.Provider value={{ videos, addToLike, RemoveFromLike }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideosContext = () => {
  return useContext(VideosContext);
};
