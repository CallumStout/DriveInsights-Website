function createPlaceholder(text) {
  const div = document.createElement("div");
  div.className = "shot placeholder";
  div.textContent = text;
  return div;
}

document.getElementById("year").textContent = new Date().getFullYear();