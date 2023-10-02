import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SongList from "../component/SongList";
import NotFound from "./NotFound";
import { Title, LoadingError } from "../styles/homeStyle";

export default function Home() {
  const { songs, error, isLoading } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  console.log(error);
  useEffect(() => {
    dispatch({ type: "songs/getSongsFetch" });
  }, [dispatch]);

  return (
    <div>
      <Title>
        <p>list of songs</p>
      </Title>
      <LoadingError>{isLoading && <div>Loading...</div>}</LoadingError>
      {error ? (
        <LoadingError>
          <div>
            <NotFound err={error} />
          </div>
        </LoadingError>
      ) : (
        <SongList songs={songs} />
      )}
    </div>
  );
}
