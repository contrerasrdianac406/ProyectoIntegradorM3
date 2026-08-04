import { renderHome } from "../views/home.js";
import { renderChat } from "../views/chat.js";
import { renderAbout } from "../views/about.js";
import { renderNotFound } from "../views/noFound.js";

const routes = {
    '/': renderHome,
    '/chat': renderChat,
    '/about': renderAbout,
};

export function router(){
    const path = window.location.pathname;
    const renderView = routes[path];

    console.log('Routing to:', path);

    if (renderView){
        renderView ();
    }else{
        renderNotFound();
    }

}

/* funcion que permite cambiar de página */
export function navigateTo(path) {
    history.pushState({}, '', path);// primer argumento también puede ir null el pushstate solo cambia la URL 
    router(); // CRÍTICO — sin esto, la URL cambia pero la vista no,se debe llamar a el Router para poder hacer el cambio de la págína
}