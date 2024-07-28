
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  lyrics: String
});

const Song = mongoose.model('Song', songSchema);


app.post('/add-song', async (req, res) => {
  const { title, artist } = req.body;

 
  const lyrics = await generateLyrics(title, artist);

  const newSong = new Song({ title, artist, lyrics });
  await newSong.save();

  res.send(newSong);
});

async function generateLyrics(title, artist) {
    try {
      const response = await axios.get(``);
      return response.data.lyrics;
    } catch (error) {
      console.error('Error generating lyrics:', error);
      return 'Lyrics not available';
    }
  }
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
