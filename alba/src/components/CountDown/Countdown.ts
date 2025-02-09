import './Countdown.css';

export class Countdown {
  private element: HTMLElement;
  private intervalId: number | null = null;

  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'countdown-container';
    this.createCountdownStructure();
  }

  private createCountdownStructure() {
    this.element.innerHTML = `
      <h1>Nuestro Aniversario</h1>
      <ul>
        <li><span id="days"></span>días</li>
        <li><span id="hours"></span>horas</li>
        <li><span id="minutes"></span>minutos</li>
        <li><span id="seconds"></span>segundos</li>
      </ul>
      <div class="emoji">
        <span>Te amooo ❤️😊</span>
      </div>
    `;
  }

  private updateCountdown() {
    const countDownDate = this.getNextMonthlyAnniversary();

    this.intervalId = window.setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.element.querySelector('#days')!.textContent = days.toString();
      this.element.querySelector('#hours')!.textContent = hours.toString();
      this.element.querySelector('#minutes')!.textContent = minutes.toString();
      this.element.querySelector('#seconds')!.textContent = seconds.toString();

      if (distance < 0) {
        clearInterval(this.intervalId!);
        this.element.querySelector('ul')!.style.display = 'none';
        this.element.querySelector('.emoji')!.style.display = 'block';
        setTimeout(() => this.restartCountdown(), 5000);
      }
    }, 1000);
  }

  private getNextMonthlyAnniversary(): Date {
    const now = new Date();
    const nextAnniversary = new Date(now.getFullYear(), now.getMonth(), 12, 17, 30, 0);
    
    if (now > nextAnniversary) {
      nextAnniversary.setMonth(nextAnniversary.getMonth() + 1);
    }

    return nextAnniversary;
  }

  private restartCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.element.querySelector('ul')!.style.display = 'flex';
    this.element.querySelector('.emoji')!.style.display = 'none';
    this.updateCountdown();
  }

  public render(): HTMLElement {
    this.updateCountdown();
    return this.element;
  }
}
