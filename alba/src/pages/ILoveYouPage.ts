import { Heart } from "../components/Heart/Heart";
import { Countdown } from "../components/CountDown/Countdown";
import { Video } from "../components/Video/Video";
import './ILoveYouPage.css';

export function ILoveYouPage() {
  document.body.innerHTML = "";
  const pageContainer = document.createElement("div");
  pageContainer.className = "i-love-you-page";

  // Back arrow
  const backArrow = document.createElement("a");
  backArrow.href = "/";
  backArrow.className = "back-arrow";
  backArrow.textContent = "←";
  backArrow.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/";
  });
  pageContainer.appendChild(backArrow);

  // Heart container
  const heartContainer = document.createElement("div");
  heartContainer.className = "heart-container";
  heartContainer.appendChild(Heart());
  pageContainer.appendChild(heartContainer);

  // Video component
  pageContainer.appendChild(Video());

  // Countdown container
  const countdownContainer = document.createElement("div");
  countdownContainer.className = "countdown-wrapper";
  countdownContainer.appendChild(new Countdown().render());
  pageContainer.appendChild(countdownContainer);

  document.body.appendChild(pageContainer);
}