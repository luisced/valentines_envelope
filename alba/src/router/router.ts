import { HomePage } from "../pages/HomePage";
import { HeartPage } from "../pages/HeartPage";

export function startRouter() {
  const path = window.location.pathname;

  if (path === "/") {
    HomePage();
  } else if (path === "/heart") {
    HeartPage();
  }
}
