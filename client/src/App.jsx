import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NewSong from "./pages/NewSong";
import NotFound from "./pages/NotFound";
import SongDetails from "./pages/SongDetails";
import Update from "./pages/Update";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs/new" element={<NewSong />} />
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/songs/update/:id" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
