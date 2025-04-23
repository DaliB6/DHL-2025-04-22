const REST_ADR = 'http://localhost:5679'
/**
 * class pour la manipulation du REST
 */
class Images extends Array {
    //ici je met l'url des ressources sur le srveur REST pour y acceder
    #ressourcePath;
    /**
     * constructeur d'images
     * @param {string} ressourcePath chemin dans le REST des images
     */
    constructor(ressourcePath = '/images') {
        super();
        this.#ressourcePath = ressourcePath;

    }/**
     * chargement rest des datas d'images
     */
    loadRessources(callback) {
        fetch(REST_ADR + this.#ressourcePath)
            .then(r => r.json())
            .then((arr) => {
                this.splice(0);
                this.push(...arr);
                console.table(this)
                callback(this);
            })
    }

}
/**
 * instance principales de toutes les images de l'app
 */
const images = new Images();
images.loadRessources(()=>{});
