import { HomePage } from "../pages/HomePage";
import { ILoveYouPage } from "../pages/ILoveYouPage";
import { ErrorPage } from "../pages/ErrorPage";
import { Envelope } from "../components/Envelope/Envelope";

export function startRouter() {
  const handleRoute = () => {
    const path = window.location.pathname;
    document.body.innerHTML = "";

    if (path === "/") {
      document.body.appendChild(Envelope());
    } else if (path === "/iloveyou") {
      document.body.appendChild(ILoveYouPage());
    } else if (path === "/error") {
      document.body.appendChild(ErrorPage());
    } else {
      // Handle 404 or other routes
      document.body.appendChild(HomePage());
    }
  };

  window.addEventListener("popstate", handleRoute);
  handleRoute();
}
