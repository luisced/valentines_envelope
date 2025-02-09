import { HomePage } from "../pages/HomePage";
import { ILoveYouPage } from "../pages/ILoveYouPage";
import { Envelope } from "../components/Envelope/Envelope";

export function startRouter() {
  const handleRoute = () => {
    const path = window.location.pathname;

    if (path === "/") {
      document.body.innerHTML = "";
      document.body.appendChild(Envelope());
    } else if (path === "/iloveyou") {
      ILoveYouPage();
    } else {
      // Handle 404 or other routes
      HomePage();
    }
  };

  window.addEventListener("popstate", handleRoute);
  handleRoute();
}
