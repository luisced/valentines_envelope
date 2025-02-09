import { Heart } from "../components/Heart/Heart";

export function ILoveYouPage() {
  document.body.innerHTML = ""; 
  const heartElement = Heart();
  document.body.appendChild(heartElement);
}
