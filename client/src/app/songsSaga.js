import { call, put, takeEvery } from "redux-saga/effects";
import {
  deleteSongFailure,
  deleteSongSuccess,
  createSongFailure,
  createSongSuccess,
  getSongsFailure,
  getSongsSuccess,
  updateSongSuccess,
  updateSongFailure,
} from "./songSlice";
import { deleteSong, createSong, getSongs } from "./api";

function* getSongsAction() {
  try {
    const data = yield getSongs();
    yield put(getSongsSuccess(data));
  } catch (err) {
    yield put(getSongsFailure(err.message));
  }
}
function* createSongAction(action) {
  try {
    const data = yield createSong(action.payload.songs);
    yield put(createSongSuccess(data));
  } catch (err) {
    yield put(createSongFailure(err.message));
  }
}



function* deleteSongAction(action) {
  try {
    yield deleteSong(action.payload.id);
    yield put(deleteSongSuccess());
  } catch (err) {
    yield put(deleteSongFailure(err.message));
  }
}

function* updateSongAction(action){
  try {
    const response = yield call(()=>fetch(`http://localhost:3000/songs/${action.payload.id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload.songs),
    }))
    const data = yield response.json()
    yield put(updateSongSuccess(data))
  }
  catch(err){
    yield put(updateSongFailure(err))
  }
}



function* SongsSaga() {
  yield takeEvery("songs/getSongsFetch", getSongsAction);
  yield takeEvery("songs/createSongFetch", createSongAction);
  yield takeEvery("songs/deleteSongFetch", deleteSongAction);
  yield takeEvery("songs/updateSongFetch", updateSongAction);
}

export default SongsSaga;
