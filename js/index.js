import {loadEditor} from './editor.js'

function loadJs(evt) {
    // console.log(arguments);
    console.log(evt);
    var jsLoaded = document.querySelector('#js-loaded');
    jsLoaded.innerHTML = "JS OK";
    jsLoaded.style.backgroundColor = "skyblue";
    jsLoaded.style.color = "tomato";
    jsLoaded.remove();
    loadEditor();
}

document.addEventListener('DOMContentLoaded', loadJs);