function searchVideo() {
  const input = document.getElementById("searchInput");
  const query = input ? input.value.trim() : "";

  if (!query) {
    alert("Please enter video name");
    return;
  }

  alert("Searching for: " + query);

  const container = document.getElementById("videoContainer");

  if (!container) return;

  container.innerHTML = `
    <div class="card" onclick="window.location.href='video.html'">
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
      <div class="card-content">
        <h3>${query} - Search Result Video</h3>
        <div class="meta">ZABTUBE Search • Live Result</div>
      </div>
    </div>

    <div class="card" onclick="window.location.href='video.html'">
      <iframe src="https://www.youtube.com/embed/ysz5S6PUM-U" allowfullscreen></iframe>
      <div class="card-content">
        <h3>${query} - Trending Video</h3>
        <div class="meta">Trending Channel • Popular</div>
      </div>
    </div>

    <div class="card" onclick="window.location.href='video.html'">
      <iframe src="https://www.youtube.com/embed/jNQXAC9IVRw" allowfullscreen></iframe>
      <div class="card-content">
        <h3>${query} - Recommended Video</h3>
        <div class="meta">Recommended • Global Feed</div>
      </div>
    </div>
  `;
}

const demoVideos = [
  {
    title: "Featured Video Demo",
    channel: "Demo Channel",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Beautiful Nature Video",
    channel: "Nature Channel",
    embed: "https://www.youtube.com/embed/ysz5S6PUM-U"
  },
  {
    title: "Classic Public Video",
    channel: "Open Library",
    embed: "https://www.youtube.com/embed/jNQXAC9IVRw"
  }
];

function loadVideos() {
  const container = document.getElementById("videoContainer");

  if (!container) return;

  container.innerHTML = "";

  demoVideos.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = function () {
      window.location.href = "video.html";
    };

    card.innerHTML = `
      <iframe src="${video.embed}" allowfullscreen></iframe>
      <div class="card-content">
        <h3>${video.title}</h3>
        <div class="meta">${video.channel} • Free Video Library</div>
      </div>
    `;

    container.appendChild(card);
  });
}

window.onload = function () {
  loadVideos();
};
