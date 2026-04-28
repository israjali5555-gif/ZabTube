function searchVideo() {
  const input = document.getElementById("searchInput");
  const query = input ? input.value.trim() : "";

  if (!query) {
    alert("Please enter video name");
    return;
  }

  const container = document.getElementById("videoContainer");
  if (!container) return;

  container.innerHTML = "";

  const searchResults = [
    {
      title: query + " - Trending Video",
      channel: "ZABTUBE Search",
      thumb: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      views: "2.1M views • Today",
      time: "10:25"
    },
    {
      title: query + " - Recommended Video",
      channel: "Recommended Channel",
      thumb: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      views: "980K views • This Week",
      time: "08:40"
    },
    {
      title: query + " - Global Feed",
      channel: "Global Videos",
      thumb: "https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg",
      views: "4.7M views • Popular",
      time: "12:14"
    }
  ];

  renderVideos(searchResults);
}

const demoVideos = [
  {
    title: "Featured Demo Video Full HD Quality",
    channel: "Demo Channel",
    thumb: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    views: "2.1M views • 2 days ago",
    time: "10:25"
  },
  {
    title: "Beautiful Nature Relaxing Video",
    channel: "Nature Channel",
    thumb: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    views: "980K views • 1 week ago",
    time: "08:40"
  },
  {
    title: "Classic Public Library Video",
    channel: "Open Library",
    thumb: "https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    views: "4.7M views • 5 days ago",
    time: "12:14"
  }
];

function renderVideos(videos) {
  const container = document.getElementById("videoContainer");
  if (!container) return;

  container.innerHTML = "";

  videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = function () {
      window.location.href = "video.html";
    };

    card.innerHTML = `
      <div class="thumbnail">
        <img src="${video.thumb}">
        <div class="duration">${video.time}</div>
      </div>

      <div class="card-content">
        <img class="channel-img" src="https://i.pravatar.cc/100?img=5">

        <div class="video-info">
          <h3>${video.title}</h3>
          <div class="meta">
            ${video.channel}<br>
            ${video.views}
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

window.onload = function () {
  renderVideos(demoVideos);
};
