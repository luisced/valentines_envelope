import { Heart } from "../components/Heart/Heart";

export function ILoveYouPage() {
  document.body.innerHTML = "";
  const pageContainer = document.createElement("div");
  pageContainer.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
  `;
  
  const heartElement = Heart();
  pageContainer.appendChild(heartElement);
  document.body.appendChild(pageContainer);
}
