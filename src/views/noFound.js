export function renderNotFound() { 
    const app = document.getElementById('app'); app.innerHTML = 
    ` <section class='nofound'> 
    <h2 class='nofoundTitulo' >404 — Esta ruta no existe en Chat con Karol G</h2>
    <h3 class='nofoundParrafo'>Revisá la URL, o volvé al <a href="/" data-link>inicio</a>.</h3>
    </section> `; }