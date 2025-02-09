import { Heart } from "../components/Heart/Heart";
import { Countdown } from "../components/CountDown/Countdown";
import './ILoveYouPage.css';

export function ILoveYouPage() {
  document.body.innerHTML = "";
  const pageContainer = document.createElement("div");
  pageContainer.className = "i-love-you-page";

  // Heart container (full screen)
  const heartContainer = document.createElement("div");
  heartContainer.className = "heart-container";
  const heartElement = Heart();
  heartContainer.appendChild(heartElement);
  pageContainer.appendChild(heartContainer);

  // Overlay container for back arrow and countdown
  const overlayContainer = document.createElement("div");
  overlayContainer.className = "overlay-container";

  // Back arrow
  const backArrow = document.createElement("a");
  backArrow.href = "/";
  backArrow.className = "back-arrow";
  backArrow.textContent = "←";
  backArrow.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/";
  });
  overlayContainer.appendChild(backArrow);

  // Countdown container
  const countdownContainer = document.createElement("div");
  countdownContainer.className = "countdown-wrapper";
  const countdownElement = new Countdown();
  countdownContainer.appendChild(countdownElement.render());
  overlayContainer.appendChild(countdownContainer);

  pageContainer.appendChild(overlayContainer);
  document.body.appendChild(pageContainer);
}
