const express = require("express");
const router = express.Router();
const { Playlist, validator } = require("../module/playlist");

router.get("/", async (req, res) => {
  const playlist = await Playlist.find({});
  res.send(playlist);
});

router.get("/:id", async (req, res) => {
  try{
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) return res.status(404).send("there is no song by this id");
    res.send(playlist);
  }
  catch(err){
    console.log(err)
  }
 
});

router.post("/new", async (req, res) => {
  const { error } = validator(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const playlist = new Playlist({
    author: req.body.author,
    musicTitle: req.body.musicTitle,
    publishedDate: new Date(req.body.publishedDate).toISOString().split('T')[0],
  });
  await playlist.save();

  if (!playlist) return res.status(404).send("there is no song by this Id");
  console.log(playlist);
  res.send(playlist);
});

router.put("/:id", async (req, res) => {
  const { error } = validator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  const playlist = await Playlist.findByIdAndUpdate(
    req.params.id,
    {
      author: req.body.author,
      musicTitle: req.body.musicTitle,
      publishedDate: new Date(req.body.publishedDate).toISOString().split('T')[0],
    },
    { new: true }
  );

  if (!playlist) return res.status(404).send("there is no song by this Id");
    console.log(playlist)
  res.send(playlist);
});

router.delete("/:id", async (req, res) => {
  const playlist = await Playlist.findByIdAndRemove(req.params.id);

  if (!playlist) return res.status(404).send("there is no song by this id");

  res.send(playlist);
});

module.exports = router;
