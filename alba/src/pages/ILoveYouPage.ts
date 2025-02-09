import { Heart } from "../components/Heart/Heart";
import { Countdown } from "../components/CountDown/Countdown";
import './ILoveYouPage.css';

export function ILoveYouPage() {
  document.body.innerHTML = "";
  const pageContainer = document.createElement("div");
  pageContainer.className = "i-love-you-page";

  // Back arrow (si la necesitas, por ejemplo, posicionada en la esquina superior izquierda)
  const backArrow = document.createElement("a");
  backArrow.href = "/";
  backArrow.className = "back-arrow";
  backArrow.textContent = "←";
  backArrow.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/";
  });
  pageContainer.appendChild(backArrow);

  // Contenedor del corazón
  const heartContainer = document.createElement("div");
  heartContainer.className = "heart-container";
  const heartElement = Heart();
  heartContainer.appendChild(heartElement);
  pageContainer.appendChild(heartContainer);

  // Contenedor del contador
  const countdownContainer = document.createElement("div");
  countdownContainer.className = "countdown-wrapper";
  const countdownElement = new Countdown();
  countdownContainer.appendChild(countdownElement.render());
  pageContainer.appendChild(countdownContainer);

  document.body.appendChild(pageContainer);
}
