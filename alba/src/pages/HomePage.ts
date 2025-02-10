import { Envelope } from "../components/Envelope/Envelope";

export function HomePage() {
  document.body.innerHTML = "";
  const container = document.createElement('div');
  container.className = 'home-page';
  
  const envelope = Envelope();
  container.appendChild(envelope);
  
  document.body.appendChild(container);

  // Add responsive styles
  const style = document.createElement('style');
  style.textContent = `
    .home-page {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
      box-sizing: border-box;
    }
    @media (max-width: 768px) {
      .home-page {
        padding: 10px;
      }
    }
  `;
  document.head.appendChild(style);
}
