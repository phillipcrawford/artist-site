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
  document.getElementById("painting-description").innerHTML = painting.description;

  // Show price section only if painting has a price
  const priceSection = document.getElementById("painting-price-section");
  if (painting.price) {
    document.getElementById("painting-price").textContent = painting.price;
    priceSection.style.display = "block";
  } else {
    priceSection.style.display = "none";
  }

  // Set the back link to the main gallery
  const backLink = document.getElementById("back-link");
  backLink.href = "gallery.html";
} else {
  document.querySelector(".painting-container").innerHTML = "<p>Painting not found.</p>";
}