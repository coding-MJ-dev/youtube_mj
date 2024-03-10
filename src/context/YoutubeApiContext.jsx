import React, { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import FakeYoutube from '../api/localYoutubeClient';
import FakeYoutubeClient from '../api/localYoutubeClient';

export const YoutubeApiContext = createContext();


// const youtube = new Youtube();
const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({children}) {
  return <YoutubeApiContext.Provider value={{youtube}}>
    {children }
  </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}