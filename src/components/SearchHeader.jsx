import React, { useEffect, useState } from 'react';
import { FaYoutube, FaSearch } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const {keyword} = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }
  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header>
      <Link to='/'>
        <FaYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' value={text} onChange={(e)=> setText(e.target.value)}/>
      </form>
      <button><FaSearch /></button>
    </header>
  );
}

