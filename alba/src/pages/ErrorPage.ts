export function ErrorPage() {
  const container = document.createElement('div');
  container.className = 'error-page';
  container.innerHTML = `
    <img src="/perrito_triste.gif" alt="Sad puppy">
    <button id="analeButton">Añale</button>
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

  // Add click event listener to the button
  const analeButton = container.querySelector('#analeButton');
  if (analeButton) {
    analeButton.addEventListener('click', () => {
      window.history.pushState({}, '', '/');
      const event = new Event('popstate');
      window.dispatchEvent(event);
    });
  }

  return container;
}
