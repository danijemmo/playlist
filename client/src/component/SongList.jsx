import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SongPreview,
  List,
  EditUpdateButton,
  Button,
} from "../styles/songsListStyle";

export default function songList({ songs }) {
  const refreshPage = () => {
    window.location.reload(false);
  };

  const dispatch = useDispatch();

  const handleDelete = (songId) => {
    useEffect(()=>{
      if (window.confirm("are you sure you want to delete ?")) {
        dispatch({ type: "songs/deleteSongFetch", payload: { id: songId } });
        refreshPage();
        toast.success("song deleted successfully");
      }
    },[dispatch])
  };

  return (
    <div>
      <ToastContainer />
      {songs.map((song) => (
        <div key={song._id}>
          <SongPreview>
            <div>
              <List>
                <Link to={`/songs/${song._id}`}>
                  <p>{song.author}</p>
                  <p>{song.musicTitle}</p>
                  <p>{song.publishedDate}</p>
                  <img src={song.coverImagePath} alt="" />
                </Link>
              </List>
            </div>

            <div>
              <EditUpdateButton>
                <Link to={`/songs/update/${song._id}`}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <Button
                  onClick={() => {
                    handleDelete(song._id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </EditUpdateButton>
            </div>
          </SongPreview>
        </div>
      ))}
    </div>
  );
}
