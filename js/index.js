import router, { routeAnalyze } from "./Router.js";
import { errorRoutes, routes } from "./routes.js";
function loadJs(evt) {
  console.log(evt);
  const jsLoaded = document.querySelector("#js-loaded");
  jsLoaded.innerHTML = "JS OK";
  jsLoaded.style.backgroundColor = "skyblue";
  jsLoaded.style.color = "tomato";
  jsLoaded.remove();
  router.initRoutes(routes, errorRoutes, "main");
  routeAnalyze();
  router.mapRouterLinks("navbar");
}
 

document.addEventListener("DOMContentLoaded", loadJs);
