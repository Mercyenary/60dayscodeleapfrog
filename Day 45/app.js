const auth = "CpI6YnGSQ05L8rfjLEyf8my1OF2qxdY6p52SY0Iz83BlGVZLVpBUrXyH";
const photoGallery = document.querySelector(".photo-gallery");
const videoGallery = document.querySelector(".video-gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
const more = document.querySelector(".more");
let searchValue;
let page = 1;
let fetchLink;
let currentSearch;

// Event Listeners
searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentSearch = searchValue;
    searchContent(searchValue);
});

more.addEventListener("click", loadMore);

function updateInput(e) {
    searchValue = e.target.value;
}

async function fetchApi(url) {
    const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth,
        },
    });
    const data = await dataFetch.json();
    return data;
}

function generatePhotos(data) {
    data.photos.forEach((photo) => {
        const galleryImg = document.createElement("div");
        galleryImg.classList.add("gallery-img");
        galleryImg.innerHTML = `
        <div class="gallery-info">
            <p>${photo.photographer}</p>
            <a href=${photo.src.original}>Download</a>
        </div>
        <img src="${photo.src.large}"></img>
        `;
        photoGallery.appendChild(galleryImg);
    });
}

function generateVideos(data) {
    data.videos.forEach((video) => {
        const galleryVideo = document.createElement("div");
        galleryVideo.classList.add("gallery-video");
        galleryVideo.innerHTML = `
        <div class="gallery-info">
            <p>${video.user.name}</p>
            <a href=${video.video_files[0].link}>Download</a>
        </div>
        <video controls>
            <source src="${video.video_files[0].link}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        `;
        videoGallery.appendChild(galleryVideo);
    });
}

async function curatedContent() {
    const photoUrl = "https://api.pexels.com/v1/curated?per_page=15&page=1";
    const videoUrl = "https://api.pexels.com/videos/popular?per_page=15&page=1";
    
    const photoData = await fetchApi(photoUrl);
    const videoData = await fetchApi(videoUrl);
    
    generatePhotos(photoData);
    generateVideos(videoData);
}

async function searchContent(query) {
    clear();
    const photoUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;
    const videoUrl = `https://api.pexels.com/videos/search?query=${query}&per_page=15&page=1`;
    
    const photoData = await fetchApi(photoUrl);
    const videoData = await fetchApi(videoUrl);
    
    generatePhotos(photoData);
    generateVideos(videoData);
}

function clear() {
    photoGallery.innerHTML = "";
    videoGallery.innerHTML = "";
    searchInput.value = "";
    page = 1;
}

async function loadMore() {
    page++;
    if (currentSearch) {
        const photoUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
        const videoUrl = `https://api.pexels.com/videos/search?query=${currentSearch}&per_page=15&page=${page}`;
        
        const photoData = await fetchApi(photoUrl);
        const videoData = await fetchApi(videoUrl);
        
        generatePhotos(photoData);
        generateVideos(videoData);
    } else {
        const photoUrl = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
        const videoUrl = `https://api.pexels.com/videos/popular?per_page=15&page=${page}`;
        
        const photoData = await fetchApi(photoUrl);
        const videoData = await fetchApi(videoUrl);
        
        generatePhotos(photoData);
        generateVideos(videoData);
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

curatedContent();

