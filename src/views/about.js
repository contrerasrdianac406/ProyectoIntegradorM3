export function renderAbout() { 
    const app = document.getElementById('app'); app.innerHTML = 
    ` <section class='seccionAbout'> 
    <h2 class='tituloAbout'> Acerca de Karol G </h2> 
    <p class='parrafoAbout'>"¡Conéctate con la energía de la Bichota! <br> Un espacio para chatear, compartir buenas vibras <br> y hablar de todo el universo de Karol G.".</p> 

    <div class='contBotonAbout'> 
    <button class='botonAbout' > 
    <a href="/chat" data-link>Chat</a> </button> 
    </div>
    
    </section> `; }