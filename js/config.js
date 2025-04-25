import { loadEditor } from "../vues/editor/editor.js";
import { loadList } from "../vues/list/list.js";

export const REST_ADR = "http://localhost:5679";
export const routes = [
  {
    name: "home",
    path: "/",
    templateUrl: "/vues/home/home.html",
  },
  {
    name: "editor",
    path: /^\/editor(\/(?<id>\d+))?\/?$/,
    templateUrl: "/vues/editor/Editor.html",
    onContentLoaded: loadEditor,
  },
  {
    name: "list",
    path: /^\/((list)|(thumbnail))\/?$/,
    templateUrl: "/vues/list/List.html",
    onContentLoaded: loadList,
  },
  {
    name: "list",
    path: "/listcanvas",
    templateUrl: "/vues/list/ListCanvas.html",
    onContentLoaded: async (route) => {
      const module = await import("../vues/list/listcanvas.js");
      module.loadListCanvas(route);
    },
  },
];
