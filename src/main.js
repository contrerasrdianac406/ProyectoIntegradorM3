import { navigateTo, router } from "./router/router.js";

document.addEventListener("click", (event) => {
    /* Valida si el link corresponde a los que he creado */
    const link = event.target.closest('a[data-link]')

    if(link){
        /* Se frena el comportamiento */
        event.preventDefault()
        const url = link.getAttribute("href")
        navigateTo(url)
    }
})

/* maneja los de atras y adelante */
window.addEventListener("popstate", () =>{
    router()
})

document.addEventListener("DOMContentLoaded", () =>{
    router()
})