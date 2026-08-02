export function renderChat() 
{ const app = document.getElementById('app'); app.innerHTML = 
    `<div class="chatApp">
        <seccion class="chatMessages" aria-label="Mensajes">
            <div class="message message--character">Hola, ¿en qué te ayudo?</div>
            <div class="message message--user">Quiero platicar contigo.</div>
            <div class="message message--character">Perfecto, empecemos con Flexbox. Es ideal para layouts de una dimensión?</div>
        </seccion>

        <form class="chatComposer">
            <input 
                class="chatInput" 
                type="text" 
                placeholder="Escribe un mensaje…"
                aria-label="Escribe tu mensaje"
            />
            <button class="chatSend" type="submit">Enviar</button>
        </form>
    </div>`; }