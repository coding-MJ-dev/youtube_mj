import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({queryKey: ['channel', id], queryFn: () =>
    youtube.channelImageURL(id)}
  );
  return (
    <div>
      {/* {error && subChannelImage(name)}
      {isLoading && subChannelImage(name)} */}
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}


