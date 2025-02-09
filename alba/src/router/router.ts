import { HomePage } from "../pages/HomePage";
import { ILoveYouPage} from "../pages/ILoveYouPage"

export function startRouter() {
  const path = window.location.pathname;

  if (path === "/") {
    HomePage();
  } else if (path === "/iloveyou") {
    ILoveYouPage();
  }
}
