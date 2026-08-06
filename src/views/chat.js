import { initChatEngine } from "../engine/chatEngine.js";
import { PERSONAS } from "../services/prompts.js";

function renderPersonaOptions() {
  return Object.entries(PERSONAS)
    .map(([key, persona]) => `<option value="${key}">${persona.label}</option>`)
    .join("");
}

export function renderChat() 
{ const app = document.getElementById('app'); app.innerHTML = `
    <section class="class="ai-chat-section">
        <h2>💬 Mi chat</h2>
        <div class="ai-chat-header">
        <select id="persona-select">
        ${renderPersonaOptions()}
        </select>
        </div>

        <div class="chat-container">
        <div id="chat-messages" class="chat-messages"></div>
        <p id="status" class="chat-status"></p>
        <div class="chatComposer">
            <input id="chat-input"class="chatInput" type="text" placeholder="Escribe un mensaje…"/>
            <button id="send-btn class="chatSend" type="submit">Enviar</button>
        </div>
        </div>

        <p id="token-usage" class="token-usage"></p>
    </section>
    ` ; 
}