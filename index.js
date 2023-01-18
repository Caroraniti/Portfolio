const modo = document.querySelector("#modo");
modo.onclick=()=>{
    const body = document.querySelector("body")
    const input = document.querySelector("input")
    body.classList.toggle("modo-oscuro");
    input.classList.toggle("modo-oscuro");
}
