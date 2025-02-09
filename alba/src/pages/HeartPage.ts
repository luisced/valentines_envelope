import { Heart } from "../components/Heart/Heart";

export function HeartPage() {
  document.body.innerHTML = ""; 
  const heartElement = Heart();
  document.body.appendChild(heartElement);
}
