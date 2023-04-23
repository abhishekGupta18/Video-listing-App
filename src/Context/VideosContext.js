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

  return (
    <VideosContext.Provider value={{ videos }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideosContext = () => {
  return useContext(VideosContext);
};
