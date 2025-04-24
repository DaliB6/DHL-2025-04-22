//import { errors, routes } from "./routes.js";

const errors = {
  404: {
    name: "404",
    titre: "404 not found",
    template: `<h1>404 NOT FOUND</h1>`,
  },
  500: {
    name: "500",
    titre: "500 internal server error",
    template: `<h1>500 INTERNAL SERVER ERROR</h1>`,
  },
};
export class Router {
  #routerNodeId;
  set contextNodeId(value){
    this.#routerNodeId = value;
  }
  #currentRoute;
  #currentPath = "/";
  #routes;
  set routes(value){
    this.#routes=value;
  }
  get path() {
    return this.#currentPath;
  }
  constructor(routes) {
    this.#routes = routes;
  }
  initRouter(contextNodeId,documentContext){
    this.#routerNodeId=contextNodeId;
    this.#currentPath=location.pathname;
    this.navigate(this.#currentPath);
    this.#fixLinksByEvents(documentContext);
  }
  navigate(path) {
    this.#currentPath = path;
    this.#currentRoute = this.#routes.find((route) => {
      if (route.path instanceof RegExp) {
        let m = route.path.exec(path.replace(location.origin,''));
        if (undefined !== m) {
          this.#currentRoute.params = m.groups;
          history.pushState(undefined, undefined, path);
          return true;
        } else {
          return false;
        }
      } else if (route.path === path.replace(location.origin,'')) {
        history.pushState(undefined, undefined, path);
        return true;
      } else {
        return false;
      }
    });
    if (undefined === this.#currentRoute) {
      this.#currentRoute = errors[404];
    }
    if (this.#currentRoute.template) {
      this.#loadInnerFromRouteTemplate();
    } else {
      fetch(location.origin + this.#currentRoute.templateUrl)
        .then((r) => r.text())
        .then((h) => {
          this.#currentRoute.template = h;
          this.#loadInnerFromRouteTemplate();
        });
    }
  }
  #loadInnerFromRouteTemplate() {
    document.querySelector('#'+this.#routerNodeId).innerHTML = this.#currentRoute.template;
    if (
      undefined !== this.#currentRoute.loaderJS &&
      typeof this.#currentRoute.loaderJS === "function"
    ) {
      this.#currentRoute.loaderJS();
    }
    this.#fixLinksByEvents(document.querySelector('#'+this.#routerNodeId));
  }
  #fixLinksByEvents(contextNode) {
    contextNode.querySelectorAll("a").forEach((element) => {
      element.addEventListener("click", (evt) => {
        evt.preventDefault();
        this.navigate(evt.target.href);
      });
    });
  }
}
export const router = new Router();
