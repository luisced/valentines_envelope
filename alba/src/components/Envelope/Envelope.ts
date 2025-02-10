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
        <img src="/stamp.webp" alt="Stamp" class="stamp">
        <div class="buttons-container">
          <button class="btn yes-btn">¡Sí!</button>
          <button class="btn no-btn">No</button>
        </div>
      </div>
  `;

  const wrapper = container.querySelector(".envelope-wrapper") as HTMLElement;
  const letter = container.querySelector(".letter") as HTMLElement;
  const heart = container.querySelector(".heart") as HTMLElement;
  const noBtn = container.querySelector(".no-btn") as HTMLButtonElement;
  const yesBtn = container.querySelector(".yes-btn") as HTMLButtonElement;

  // Envelope opening logic
  heart.addEventListener("click", () => {
    if (!wrapper.classList.contains("flap")) {
      wrapper.classList.add("flap");

      letter.addEventListener("transitionend", function handler(e: TransitionEvent) {
        if (e.propertyName === "transform" && !wrapper.classList.contains("final")) {
          wrapper.classList.add("final");
          setTimeout(() => {
            const buttonsContainer = container.querySelector(".buttons-container") as HTMLElement;
            buttonsContainer.style.display = "flex";
          }, 500);
          letter.removeEventListener("transitionend", handler);
        }
      });
    }
  });

  // Bounce animation
  wrapper.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".btn") && !target.closest(".heart")) {
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

  function resetNoButton() {
    noBtn.style.transform = "translate(0, 0)";
  }

  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("mouseout", resetNoButton);
  noBtn.addEventListener("touchstart", (e: TouchEvent) => {
    e.preventDefault(); // Prevent default touch behavior
    moveNoButton();
  });
  noBtn.addEventListener("touchend", resetNoButton);

  // Double-tap detection for NO button (mobile)
  let lastTapTime = 0;

  noBtn.addEventListener("touchstart", (e: TouchEvent) => {
    e.preventDefault(); // Prevent default touch behavior
    moveNoButton();

    // Detect double tap
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastTapTime;

    if (timeDiff < 300 && timeDiff > 0) { // If second tap is within 300ms
      window.history.pushState({}, "", "/error");
      const event = new Event("popstate");
      window.dispatchEvent(event);
    }

    lastTapTime = currentTime;
  });

  // NO button redirect to ErrorPage (Desktop click)
  noBtn.addEventListener("pointerdown", (e: PointerEvent) => {
    e.preventDefault(); // Prevent default behavior
    if (e.pointerType === 'mouse') { // Only redirect on actual clicks, not touch events
      window.history.pushState({}, "", "/error");
      const event = new Event("popstate");
      window.dispatchEvent(event);
    }
  });

  // YES button redirect
  yesBtn.addEventListener("click", () => {
    window.history.pushState({}, "", "/iloveyou");
    const event = new Event("popstate");
    window.dispatchEvent(event);
  });

  return container;
}
