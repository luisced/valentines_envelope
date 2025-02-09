import { Candlelight } from "../components/Candlelight";
import { Envelope } from "../components/Envelope/Envelope";

export function HomePage() {
  document.body.innerHTML = "";
  const envelopeElement = Envelope();
  document.body.appendChild(envelopeElement);
}
