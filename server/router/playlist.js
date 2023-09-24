const express = require("express");
const router = express.Router();
const { Playlist } = require("../module/playlist");

router.get("/", async (req, res) => {
  const playlist = await Playlist.find({});

  res.send(playlist);
});

router.get("/:id", async (req, res) => {
  const playlist = await Playlist.findById(req.params.id);

  res.send(playlist);
});

router.post("/new", async (req, res) => {
  const playlist = new Playlist({
    author: req.body.author,
    musicTitle: req.body.musicTitle,
    publishedDate: req.body.publishedDate,
  });
  await playlist.save();

  if (!playlist) return res.status(404).send("there is no song by this Id");

  res.send(playlist);
});

router.put("/update/:id", async (req, res) => {
  const playlist = await Playlist.findByIdAndUpdate(
    req.params.id,
    {
      author: req.body.author,
      musicTitle: req.body.musicTitle,
      publishedDate: req.body.publishedDate,
    },
    { new: true }
  );

  if (!playlist) return res.status(404).send("there is no song by this Id");
  res.send(playlist);
});

router.delete("/:id", async (req, res) => {
  const playlist = await Playlist.findByIdAndRemove(req.params.id);

  res.send(playlist);
});

module.exports = router;
