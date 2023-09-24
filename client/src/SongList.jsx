import React from "react";

export default function songList({songs}) {
  return (
    <div>
      {songs.map((song, i) => (
        <div className="song-preview" key={i}>
          <h2>{song.author}</h2>
          <p>{song.musicTitle}</p>
          <p>{song.publishedDate}</p>
        </div>
      ))}
    </div>
  );
}
