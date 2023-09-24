import React from "react";
import useFetch from "./useFetch";
import SongList from "./songList";
export default function Home() {

  const{data:songs,isPending,error} = useFetch("http://localhost:3000/api/playlist")

  return (
    <div className="home">
      <p className="song_list">list of songs</p>
      {isPending && <div className="song-preview">Loading...</div>}
      <div className="song-preview">{error}</div>
      <SongList songs={songs}/>
    </div>
  );
}
