let selectedFile = null;
let accessToken = null;

// Array to store the text to be revealed and their corresponding timestamps
const textsToReveal = [
    { time: 3, text: "I found a love for me" }, 
    { time: 9, text: "Darling, just dive right in and follow my lead " }, 
    { time: 17, text: "Well, I found a girl, beautiful and sweet" } ,
    { time: 25, text: "Oh, I never knew you were the someone waiting for me" },
    { time: 31, text: "Cause we were just kids when we fell in love" }, 
    { time: 37, text: "Not knowing what it was " }, 
    { time: 41, text: "I will not give you up this time" }, 
    { time: 47, text: "But darling, just kiss me slow" }, 
    { time: 51, text: "Your heart is all I own" }, 
    { time: 55, text: "And in your eyes, you're holding mine" }, 
    { time: 61, text: "Baby, I'm dancing in the dark" }, 
    { time: 69, text: "With you between my arms" }, 
    { time: 73, text: "Barefoot on the grass" }, 
    { time: 77, text: "Listening to our favourite song" }, 
    { time: 81, text: "When you said you looked a mess" }, 
    { time: 83, text: "I whispered underneath my breath" }, 
    { time: 87, text: "But you heard it Darling, you look perfect tonight" }
];
let currentIndex = 0;

async function fetchAccessToken() {
    try {
        const response = await fetch('/token');
        const data = await response.json();
        accessToken = data.accessToken;
    } catch (error) {
        console.error('Error fetching access token:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchAccessToken);

document.getElementById('fileInput').addEventListener('change', function(event) {
    selectedFile = event.target.files[0];
});

document.getElementById('generateButton').addEventListener('click', function() {
    if (selectedFile && selectedFile.type === 'audio/mpeg') {
        addSongToList(selectedFile);
    } else {
        alert('Please upload a valid MP3 file.');
    }
});

function addSongToList(file) {
    const songList = document.getElementById('songList');
    const listItem = document.createElement('li');
    listItem.className = 'glowing-text'; // Apply glowing effect to lyrics text
    listItem.id = 'lyricsText'; // Set an ID to easily access the element later
    listItem.textContent = '';

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = URL.createObjectURL(file);

    const songName = file.name.replace('.mp3', '');

    const songInfo = document.createElement('div');
    songInfo.innerHTML = `
        <strong>${songName}</strong>
        <p>Loading lyrics...</p>
    `;

    songList.appendChild(songInfo);
    songList.appendChild(audio);
    songList.appendChild(listItem);

    // Reset currentIndex for new song
    currentIndex = 0;

    audio.addEventListener('timeupdate', function() {
        revealText(audio.currentTime);
    });

    fetchLyrics(songName, songInfo);
}

function revealText(currentTime) {
    if (currentIndex < textsToReveal.length && currentTime >= textsToReveal[currentIndex].time) {
        const listItem = document.getElementById('lyricsText');
        listItem.textContent = textsToReveal[currentIndex].text;
        currentIndex++;
    }
}

async function fetchLyrics(songName, listItem) {
    try {
        console.log(`Fetching lyrics for song: ${songName}`);
        const searchUrl = `https://api.genius.com/search?q=${encodeURIComponent(songName)}`;
        const searchResponse = await fetch(searchUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!searchResponse.ok) {
            throw new Error(`Search request failed with status ${searchResponse.status}`);
        }

        const searchData = await searchResponse.json();
        console.log('Search data:', searchData);

        if (searchData.response.hits.length > 0) {
            const songId = searchData.response.hits[0].result.id;
            const songUrl = `https://api.genius.com/songs/${songId}`;
            const songResponse = await fetch(songUrl, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (!songResponse.ok) {
                throw new Error(`Song request failed with status ${songResponse.status}`);
            }

            const songData = await songResponse.json();
            console.log('Song data:', songData);

            const lyricsUrl = songData.response.song.url;
            listItem.querySelector('p').innerHTML = `Lyrics found: <a href="${lyricsUrl}" target="_blank">Click here to view</a>`;
        } else {
            listItem.querySelector('p').textContent = 'Lyrics not found.';
        }
    } catch (error) {
        console.error('Error fetching lyrics:', error);
        listItem.querySelector('p').textContent = '';
    }
}
