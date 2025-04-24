import { loadList } from "./List.js";
import { loadEditor } from "./editor.js";

export const routes = [
  {
    name: "list",
    titre: "thumbnail",
    path: "/list",
    templateUrl: "/vues/List.html",
    loaderJS: loadList,
  },
  {
    name: "editor",
    titre: "edit meme",
    path: /\/editor(\/(?<id>\d+)?)?/,
    templateUrl: "/vues/List.html",
    loaderJS: loadEditor,
  },
  {
    name: "thanks",
    titre: "remerciements",
    path: "/thanks",
    template: `<h1>Merci a tous les participants</h1>`
  },
];
