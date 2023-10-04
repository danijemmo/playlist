import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NewSongStyle } from "../styles/NewSongStyle";

export default function Update() {
  const { id } = useParams();

  const [artist, setArtist] = useState();
  const [musicTitle, setMusicTitle] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const { songs: song, isLoading } = useSelector((state) => state.songs);

  const singleSong = song.filter((song) => song._id === id)[0];
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handelUpdate = (e)=>{
    e.preventDefault();
    const song = {artist, musicTitle, publishedDate}
    if (window.confirm("are you sure you want to update ?")) {
      dispatch({type:'songs/updateSongFetch', payload:{id:id, songs: song}})
      navigate('/')
    }
    else{
      navigate('/')
    }

  }

  return (
    <div className="new_song">
      <NewSongStyle>
      <h1>Update Song</h1>
      <form onSubmit={handelUpdate}>
        <label htmlFor="">artist</label>
        <input
          type="text"
          required
          placeholder={singleSong.artist}
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <label htmlFor="">music Title</label>
        <input
          type="text"
          required
          placeholder={singleSong.musicTitle}
          value={musicTitle}
          onChange={(e) => setMusicTitle(e.target.value)}
        />
        <label htmlFor="">published Date</label>
        <input
          type="date"
          required
          placeholder={singleSong.publishedDate}
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
        />
        {!isLoading && <button>update</button>}
        {isLoading && <button>updating.....</button>}
      </form>
      </NewSongStyle>
    </div>
  );
}
