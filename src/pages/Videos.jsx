import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import axios from 'axios';
import Youtube, { search } from '../api/youtube';
import FakeYoutube from '../api/localYoutube';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({queryKey: ['videos', keyword], queryFn: () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  }
  // {
    // using Axios -> move to "api" folder
    // return axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    //     .then((res) => res.data.items);


    // Using Fetch!!
    // return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
    //     .then((res) => res.json())
    //     .then((data) => data.items);
  // }
  });


  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
