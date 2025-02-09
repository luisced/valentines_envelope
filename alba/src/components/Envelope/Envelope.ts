import "./Envelope.css";

export function Envelope(): HTMLElement {
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `
      <div class="envelope-wrapper">
        <div class="envelope">
          <div class="letter">
            <div class="text">
              <strong>Querida Albita,</strong>
              <p>¿Quieres ser mi San Valentín?</p>
              <p class="sincerely">Con Amor, Luis.</p>
            </div>
          </div>
        </div>
        <div class="heart"></div>
        <img src="/stamp.png" alt="Stamp" class="stamp">
        <div class="buttons-container">
          <button class="btn yes-btn">¡Sí!</button>
          <button class="btn no-btn">No</button>
        </div>
      </div>
  `;

  const wrapper = container.querySelector(".envelope-wrapper")!;
  const letter = container.querySelector(".letter")!;
  const heart = container.querySelector(".heart")!;
  const noBtn = container.querySelector(".no-btn")!;
  const yesBtn = container.querySelector(".yes-btn")!;

  // Envelope opening logic
  heart.addEventListener("click", () => {
    if (!wrapper.classList.contains("flap")) {
      wrapper.classList.add("flap");

      letter.addEventListener("transitionend", function handler(e) {
        if (e.propertyName === "transform" && !wrapper.classList.contains("final")) {
          wrapper.classList.add("final");
          setTimeout(() => {
            container.querySelector(".buttons-container")!.style.display = "flex";
          }, 500);
          letter.removeEventListener("transitionend", handler);
        }
      });
    }
  });

  // Bounce animation
  wrapper.addEventListener("click", (e) => {
    if (!e.target!.closest(".btn") && !e.target!.closest(".heart")) {
      wrapper.classList.add("bounce");
      setTimeout(() => wrapper.classList.remove("bounce"), 600);
    }
  });

  // NO button evasive behavior
  function moveNoButton() {
    const moveX = Math.random() * 100 - 50;
    const moveY = Math.random() * 100 - 50;
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }

  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("mouseout", () => {
    noBtn.style.transform = "translate(0, 0)";
  });

  // NO button sad GIF
  noBtn.addEventListener("click", () => {
    document.body.innerHTML = "";
    const img = document.createElement("img");
    img.src = "/perrito_triste.gif";
    img.alt = "Perrito triste";
    img.style.position = "absolute";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.maxWidth = "100%";
    img.style.height = "auto";
    document.body.appendChild(img);
  });

  // YES button redirect
  yesBtn.addEventListener("click", () => {
    window.history.pushState({}, "", "/iloveyou");
    const event = new Event("popstate");
    window.dispatchEvent(event);
  });

  return container;
}
