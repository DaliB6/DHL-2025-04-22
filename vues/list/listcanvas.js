import { images } from "../../js/metier/Images.js";
import { memes } from "../../js/metier/Memes.js";

export const loadListCanvas = async (routeData) => {
  const contextNode = routeData.contextNode.querySelector("#List");
  const aNode = contextNode.querySelector("a");
  const prAll = await Promise.all([memes.promiseMemes, images.promiseImages]);
  prAll[0].forEach((element) => {
    const cloned = aNode.cloneNode(true);
    cloned.id += element.id;
    cloned.href += element.id;
    cloned.querySelector("div").innerHTML =
      element.text.length > 0 ? element.text : "(pas de text)";
    const img = prAll[1].find((i) => i.id === element.imageId);

    /**
     * @type HTMLCanvasElement
     */
    let cnv = contextNode.querySelector("canvas");
    cnv.height = img ? img.h : 500;
    cnv.width = img ? img.w : 500;
    /**
     * @type RenderingContext
     */
    let ctx = cnv.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = element.color;
    ctx.font = "bold " + element.fontSize + "px arial";
    //@ts-ignore
    ctx.fillText(element.text, element.x, element.y);
    ctx.fill();
    ctx.closePath();
    contextNode.appendChild(cloned);
  });
  aNode.style.display = "none";
  routeData.callback();
  return "chagre de la promise d'async";
};
