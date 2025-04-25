import { redrawSvg } from "./commonSvgDrawer.js";
import { images } from "./Images.js";
import { memes } from "./Memes.js";

const loadListDatas = (node) => {
  const contextNode = node.querySelector("#List");
  const templateNode = contextNode.querySelector("#meme-link-");
  templateNode.style.display = "none";

//   Promise.all([memes.promiseMemes, images.promiseImages]).then((resp) => {resp[0].
    memes.forEach((m) => {
      const clonedNode = templateNode.cloneNode(true);
      clonedNode.style.display = "flex";
      clonedNode.id += m.id;
      clonedNode.href += m.id;

      redrawSvg(m, clonedNode.querySelector("svg"),clonedNode.querySelector("svg image"));

      clonedNode.querySelector(".list-titre").innerHTML = m.text;
      contextNode.appendChild(clonedNode);
    });
//   });
};

export function loadList(node) {
  loadListDatas(node);
}
