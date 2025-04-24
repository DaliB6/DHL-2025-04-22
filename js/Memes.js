import { Meme } from "./Meme.js";

const REST_ADR = "http://localhost:5679";
class Memes extends Array {
  static #RessourcesPath = "/memes";
  /**
   * promise de chargement
   * @type Promise<Memes>
   */
  #loadPromise = undefined;
  get promiseMemes(){
    if(undefined===this.#loadPromise)return this.loadRessources();
    return this.#loadPromise;
}
  constructor() {
    super(arguments);
  }
  loadRessources() {
    if (this.#loadPromise === undefined) {
      this.#loadPromise = fetch(`${REST_ADR}${Memes.#RessourcesPath}`)
        .then((r) => r.json())
        .then((ms) => {
          this.splice(0);
          ms.forEach((element) => {
            const meme = new Meme();
            Object.assign(meme, element);
            this.push(meme);
          });
          return this;
        });
    }
    return this.#loadPromise;
  }
  /**
   * recherche par Id
   * @param {number} id 
   * @returns {Meme}
   */
  findById(id){
    return this.find(e=>e.id===id);  
  }
}
export const memes = new Memes();
memes.loadRessources();
