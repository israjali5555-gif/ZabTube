function googleLogin() { alert("Google Login setup next step me Firebase + Google OAuth ke saath connect hoga."); }

function searchVideo() { const input = document.getElementById("searchInput"); const query = input ? input.value.trim() : "";

if (!query) { alert("Please enter video name"); return; }

alert("Searching for: " + query + "\nNext step me YouTube API se real videos fetch honge."); }

const demoVideos = [ { title: "Featured Video Demo", channel: "Demo Channel", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, { title: "Nature Beautiful Video", channel: "Nature Channel", embed: "https://www.youtube.com/embed/ysz5S6PUM-U" }, { title: "Classic Public Video", channel: "Open Library", embed: "https://www.youtube.com/embed/jNQXAC9IVRw" } ];

function loadVideos() { const container = document.getElementById("videoContainer");

if (!container) return;

container.innerHTML = "";

demoVideos.forEach(video => { const card = document.createElement("div"); card.className = "card";

card.innerHTML = `
  <iframe src="${video.embed}" allowfullscreen></iframe>
  <div class="content">
    <h3>${video.title}</h3>
    <div class="meta">${video.channel} • Free Video Library</div>
  </div>
`;

container.appendChild(card);

}); }

window.onload = function () { loadVideos(); };

window.addEventListener("load", function () {
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  if (userName && userEmail) {
    document.getElementById("user-info").innerHTML = `
      <h3>Welcome, ${userName}</h3>
      <p>${userEmail}</p>
      <button onclick="logoutUser()">Logout</button>
    `;
  }
});
