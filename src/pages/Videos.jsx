import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const {keyword} = useParams();
  return (
    <div>
      <p>Videos {keyword ? `${keyword}` : 'hot trend'}</p>
    </div>
  );
}

