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
  
  // Handle multiple description fields
  const descriptionEl = document.getElementById("painting-description");
  let fullDescription = "";
  
  if (painting.description) {
    fullDescription = painting.description;
  } else {
    // Combine description1, description2, description3, description4
    for (let i = 1; i <= 4; i++) {
      const desc = painting[`description${i}`];
      if (desc) {
        if (fullDescription) fullDescription += "\n\n";
        fullDescription += desc;
      }
    }
  }
  
  descriptionEl.textContent = fullDescription;
} else {
  document.querySelector(".painting-container").innerHTML = "<p>Painting not found.</p>";
}