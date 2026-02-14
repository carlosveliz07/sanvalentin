document.addEventListener("DOMContentLoaded", () => {
  window.musica = document.getElementById("musica");
  window.sonando = false;

  const imgs = document.querySelectorAll(".slider img");
  let idx = 0;

  setInterval(() => {
    imgs[idx].classList.remove("active");
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add("active");
  }, 3000);

  // Lluvia romántica
  setInterval(() => {
    const el = document.createElement("div");
    el.className = "float";
    el.textContent = Math.random() > 0.5 ? "❤️" : "🐻";
    el.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 7000);
  }, 350);
});

function toggleMusica() {
  sonando ? musica.pause() : musica.play();
  sonando = !sonando;
}

function mostrarCarta() {
  document.getElementById("sliderBox").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("carta").style.display = "block";
}

function volver() {
  document.getElementById("carta").style.display = "none";
  document.getElementById("sliderBox").style.display = "block";
  document.getElementById("buttons").style.display = "flex";
}
