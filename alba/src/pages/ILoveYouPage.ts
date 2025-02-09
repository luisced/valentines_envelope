import { Heart } from "../components/Heart/Heart";
import { Countdown } from "../components/CountDown/Countdown";
import './ILoveYouPage.css';

export function ILoveYouPage() {
  document.body.innerHTML = "";
  const pageContainer = document.createElement("div");
  pageContainer.className = "i-love-you-page";

  const heartContainer = document.createElement("div");
  heartContainer.className = "heart-container";
  const heartElement = Heart();
  heartContainer.appendChild(heartElement);
  pageContainer.appendChild(heartContainer);

  const countdownContainer = document.createElement("div");
  countdownContainer.className = "countdown-wrapper";
  const countdownElement = new Countdown();
  countdownContainer.appendChild(countdownElement.render());
  pageContainer.appendChild(countdownContainer);

  document.body.appendChild(pageContainer);
}
