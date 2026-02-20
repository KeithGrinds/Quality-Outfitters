// Luxury Hamburger
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Particle text animation
document.querySelectorAll(".particle-heading").forEach(heading => {
  heading.innerHTML = heading.textContent
    .split("")
    .map(letter => `<span class="letter">${letter}</span>`)
    .join("");

  const letters = heading.querySelectorAll(".letter");

  letters.forEach(letter => {
    letter.addEventListener("mouseover", () => {
      letter.style.textShadow = "0 0 15px #d4af37, 0 0 30px #fff4c2";
      letter.style.transform = "translateY(-5px)";
    });

    letter.addEventListener("mouseout", () => {
      letter.style.textShadow = "none";
      letter.style.transform = "translateY(0)";
    });
  });
});
