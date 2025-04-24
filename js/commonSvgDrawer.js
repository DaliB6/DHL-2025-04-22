import { images } from "./Images.js";

export function redrawSvg(meme, node,imageSvgREFNode) {
    console.log("redraw svg", node, meme);
    const text = node.querySelector("text");
    text.setAttribute("fill", meme.color);
    text.setAttribute("font-size", meme.fontSize);
    text.setAttribute("font-weight", meme.fontWeight);
    text.setAttribute("x", meme.x);
    text.setAttribute("y", meme.y);
    text.setAttribute("text-decoration", meme.underline ? "underline" : "none");
    text.setAttribute("font-style", meme.italic ? "italic" : "normal");
    text.innerHTML = meme.text;
  
    const img = images.find((image) => image.id === meme.imageId);
    let imageSvg = node.querySelector("image");
    if (imageSvg) {
      imageSvg.remove();
    }
    if (img) {
      imageSvgREFNode.setAttribute("xlink:href", img.url);
      node.insertBefore(imageSvgREFNode, text);
      node.setAttribute("viewBox", `0 0 ${img.w} ${img.h}`);
    } else {
      node.setAttribute("viewBox", `0 0 500 500`);
    }
    // node.setAttribute('viewBox',`0 0 ${img?img.w:500} ${img?img.h:500}`)
    // console.log(img);
  }