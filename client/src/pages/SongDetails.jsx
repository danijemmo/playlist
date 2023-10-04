import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SongDetailStyle } from "../styles/songDetailsStyle";
import { useDispatch, useSelector } from "react-redux";

export default function SongDetails() {
  const { id } = useParams();
  const { songs: song, isLoading, error } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:'songs/getSongsFetch'})
  },[dispatch])

  const singleSong = song.filter((song) => song._id === id)[0];
 
  return (
    <div>
      <SongDetailStyle>
        {isLoading && <div>Loading...</div>}
        <div className="y">{error} </div>
        <h1>song detail - {singleSong.musicTitle}</h1>
        <p>Artist Name: {singleSong.artist}</p>
        <p>Music Title: {singleSong.musicTitle}</p>
        <p>this song is released in {singleSong.publishedDate}</p>
      </SongDetailStyle>
    </div>
  );
}
