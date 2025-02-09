export function ErrorPage(container: HTMLElement) {
  container.innerHTML = `
    <div class="error-page">
      <img src="/perrito_triste.gif" alt="Sad puppy">
      <button onclick="window.history.back()">Go Back</button>
    </div>
  `;

  // Add some basic styles
  const style = document.createElement('style');
  style.textContent = `
    .error-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: var(--bg-color);
    }
    .error-page img {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
    .error-page button {
      padding: 10px 20px;
      font-size: 18px;
      background-color: var(--heart-color);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .error-page button:hover {
      background-color: #a93a4f;
    }
  `;
  document.head.appendChild(style);
}
