function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const paintingId = parseInt(getQueryParam("id"));
const painting = paintings.find(p => p.id === paintingId);

if (painting) {
  document.title = `${painting.title} - Artist Name`;
  document.getElementById("painting-img").src = painting.image;
  document.getElementById("painting-img").alt = painting.title;
  document.getElementById("painting-title").textContent = painting.title;
  document.getElementById("painting-medium").textContent = painting.medium;
  document.getElementById("painting-dimensions").textContent = painting.dimensions;
  document.getElementById("painting-description").textContent = painting.description;
} else {
  document.querySelector(".painting-container").innerHTML = "<p>Painting not found.</p>";
}