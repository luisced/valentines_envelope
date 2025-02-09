import { HomePage } from "../pages/HomePage";
import { ILoveYouPage } from "../pages/ILoveYouPage";
import { ErrorPage } from "../pages/ErrorPage";
import { Envelope } from "../components/Envelope/Envelope";

type ComponentFunction = () => HTMLElement | void;

export function startRouter() {
  let contentContainer: HTMLDivElement;

  const createContentContainer = () => {
    contentContainer = document.createElement('div');
    contentContainer.id = 'content-container';
    document.body.appendChild(contentContainer);
  };

  const appendComponent = (component: ReturnType<ComponentFunction>) => {
    if (component instanceof HTMLElement) {
      contentContainer.appendChild(component);
    }
  };

  const handleRoute = () => {
    const path = window.location.pathname;
    contentContainer.innerHTML = "";

    if (path === "/") {
      appendComponent(Envelope());
    } else if (path === "/iloveyou") {
      appendComponent(ILoveYouPage());
    } else if (path === "/error") {
      appendComponent(ErrorPage());
    } else {
      // Handle 404 or other routes
      appendComponent(HomePage());
    }
  };

  createContentContainer();
  window.addEventListener("popstate", handleRoute);
  handleRoute();
}
