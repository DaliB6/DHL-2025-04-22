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
    contextNode.appendChild(cloned);
  });
  aNode.style.display = "none";
  routeData.callback();
  return "chagre de la promise d'async";
};
