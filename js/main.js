const addImageBtn = document.getElementById("addImageBtn");
const gallery = document.getElementById("gallery");

addImageBtn.addEventListener("click", () => {
  const url = document.getElementById("imageUrl").value;
  const name = document.getElementById("imageName").value;

  if (!url || !name) {
    alert("Por favor ingresa tanto la URL como el nombre de la imagen.")
    return
  }

  const cardHTML = `
    <div class="card">
      <button class="delete-btn">X</button>
      <img src="${url}" alt="${name}" />
      <h4>${name}</h4>
    </div>
  `

  gallery.insertAdjacentHTML("beforeend", cardHTML)

  document.getElementById("imageUrl").value = ""
  document.getElementById("imageName").value = ""
})

gallery.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("delete-btn")) {
    const card = target.closest(".card");
    card.remove();
  }

  if (target.tagName === "IMG") {
    const newUrl = prompt("Ingresa la nueva URL de la imagen:")
    if (newUrl) {
      const newImg = document.createElement("img")
      newImg.src = newUrl;
      newImg.alt = target.alt;
      newImg.style.cursor = "pointer"

      // reemplazar imagen
      target.parentElement.replaceChild(newImg, target);
    }
  }
})

gallery.addEventListener("mouseenter", (e) => {
  if (e.target.classList.contains("card")) {
    e.target.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.05)" }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    )
  }
}, true)

gallery.addEventListener("mouseleave", (e) => {
  if (e.target.classList.contains("card")) {
    e.target.animate(
      [
        { transform: "scale(1.05)" },
        { transform: "scale(1)" }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    )
  }
}, true)