import './Countdown.css';
import FlipDown from 'flipdown';

export function createCountdown(): HTMLElement {
  const container = document.createElement('div');
  container.id = 'flipdown-container'; // New wrapper
  container.innerHTML = '<div id="flipdown" class="flipdown"></div>';
  return container;
}

export function initializeCountdown(element: HTMLElement): void {
  const targetDate = new Date('2025-01-12T05:30:00').getTime() / 1000;
  
  // Wait for DOM update
  requestAnimationFrame(() => {
    new FlipDown(targetDate, {
      theme: "light",
      headings: ["Días", "Horas", "Minutos", "Segundos"]
    }).start().ifEnded(() => {
      console.log('The countdown has ended!');
    });
  });
}