/**
 * class pour la manipulation du REST
 */
class Images extends Array {
    //ici je met l'url des ressources sur le srveur REST pour y acceder
    ressourcePath;
    /**
     * constructeur d'images
     * @param {string} ressourcePath chemin dans le REST des images
     */
    constructor(ressourcePath) {
        super();
        this.ressourcePath = ressourcePath;

    }
    /**
     * remplacement d'image
     * @param {object} origineImage image a remplacer
     * @param {object} newImage image de substitution
     * @returns {object} image remplacé
     */
    replaceImage(origineImage, newImage) {
        return origineImage;
    }
}
/**
 * instance principales de toutes les images de l'app
 */
const images = new Images();