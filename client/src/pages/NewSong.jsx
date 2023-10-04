import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewSongStyle } from "../styles/NewSongStyle";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewSong() {
  const [artist, setArtist] = useState("");
  const [musicTitle, setMusicTitle] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const { isLoading } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const handelSubmit = () => {
    const song = { artist, musicTitle, publishedDate };
    dispatch({ type: "songs/createSongFetch", payload: { songs: song } });
    toast.success("song Add successfully");
  };
  return (
    <div>
      <ToastContainer />
      <NewSongStyle>
        <h1>Add Song</h1>
        <form onSubmit={handelSubmit}>
          <label htmlFor="">artist</label>
          <input
            type="text"
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <label htmlFor="">music Title</label>
          <input
            type="text"
            required
            value={musicTitle}
            onChange={(e) => setMusicTitle(e.target.value)}
          />
          <label htmlFor="">published Date</label>
          <input
            type="date"
            required
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
          {!isLoading && <button>add Song</button>}
          {isLoading && <button>adding Song.....</button>}
        </form>
      </NewSongStyle>
    </div>
  );
}
