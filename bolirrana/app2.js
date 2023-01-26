
const contenedorBlur = document.querySelector(".contenedor-blur")

const blur = document.querySelector(".blur")

const comoJugar = document.querySelector(".h3-comojugar")
const parrafo = document.querySelector(".parrafo-introduccion")
const boton = document.querySelector(".boton-empezae")
const titulo = document.querySelector(".h2-bolirrana")

const escogerModoDeJuegoH2 = document.createElement("h2");
const botonCasual = document.createElement("button")
const boton_competitivo = document.createElement("button")

const divOpciones = document.createElement("div")
const escogerModoDeGruposH2 = document.createElement("h2")
const botonIndividual = document.createElement("button")
const botonEquipos = document.createElement("button")
const botonEquiposACiegas = document.createElement("button")

divOpciones.appendChild(botonIndividual)
divOpciones.appendChild(botonEquipos)
divOpciones.appendChild(botonEquiposACiegas)
console.log(divOpciones.childNodes)

const h2EligeNumeroDeJugadores = document.createElement("h2")
const inputNumeroDeJugadores = document.createElement("input")
const botonSiguiente = document.createElement("button")


boton.addEventListener("click",()=>{
    titulo.classList.add("animate__backOutUp")
    parrafo.classList.add("animate__backOutDown")
    comoJugar.classList.add("animate__backOutDown")
    boton.classList.add("animate__backOutDown")

    setTimeout(()=>{
        titulo.remove()
        parrafo.remove()
        comoJugar.remove()
        boton.remove()    
        
        document.querySelector(".blur").appendChild(escogerModoDeJuegoH2)
        escogerModoDeJuegoH2.classList.add("animate__backInDown")
        escogerModoDeJuegoH2.classList.add("elije_modo")
        escogerModoDeJuegoH2.innerHTML="Elije el modo de juego:"

        setTimeout(()=>{

                document.querySelector(".blur").appendChild(botonCasual)
                botonCasual.classList.add("animate__backInUp")
                botonCasual.classList.add("boton_casual")
                botonCasual.innerHTML="Casual 😎"

                document.querySelector(".blur").appendChild(boton_competitivo)
                boton_competitivo.classList.add("animate__backInUp")
                boton_competitivo.classList.add("boton_competitivo")
                boton_competitivo.innerHTML="Competitivo 🏆"
        },900)
    }, 250) 

})



botonCasual.addEventListener("click",()=>{
    botonCasual.classList.replace("animate__backInUp","animate__backOutRight")
    boton_competitivo.classList.replace("animate__backInUp","animate__backOutDown")
    escogerModoDeJuegoH2.classList.replace("animate__backInDown","animate__backOutUp")
    
    setTimeout(()=>{
        botonCasual.remove()
        boton_competitivo.remove()
        escogerModoDeJuegoH2.remove()

        document.querySelector(".blur").appendChild(escogerModoDeGruposH2)
        escogerModoDeGruposH2.classList.add("animate__backInDown")
        escogerModoDeGruposH2.classList.add("elije_modo2")
        escogerModoDeGruposH2.innerHTML="Escoge el modo de agrupacion:"
        setTimeout(()=>{
            
            blur.appendChild(botonIndividual)
            botonIndividual.classList.add("animate__backInUp")
            botonIndividual.classList.add("boton_individual")
            botonIndividual.innerHTML="Individual 👤"

            blur.appendChild(botonEquipos)
            botonEquipos.classList.add("animate__backInUp")
            botonEquipos.classList.add("boton_equipos")
            botonEquipos.innerHTML="Equipos 👥"

            blur.appendChild(botonEquiposACiegas)
            botonEquiposACiegas.classList.add("animate__backInUp")
            botonEquiposACiegas.classList.add("boton_equiposACiegas")
            botonEquiposACiegas.innerHTML="Equipos a ciegas 👥❓"
        },800)
    },250)

})

boton_competitivo.addEventListener("click",()=>{
    botonCasual.classList.replace("animate__backInUp","animate__backOutDown")
    boton_competitivo.classList.replace("animate__backInUp","animate__backOutDown")
    escogerModoDeJuegoH2.classList.replace("animate__backInDown","animate__backOutUp")
    
    setTimeout(()=>{
        botonCasual.remove()
        boton_competitivo.remove()
        escogerModoDeJuegoH2.remove()

        document.querySelector(".blur").appendChild(escogerModoDeGruposH2)
        escogerModoDeGruposH2.classList.add("animate__backInDown")
        escogerModoDeGruposH2.classList.add("elije_modo")
        escogerModoDeGruposH2.innerHTML="Escoge el modo de agrupacion:"
        setTimeout(()=>{
            document.querySelector(".blur").appendChild(botonIndividual)
            botonIndividual.classList.add("animate__backInUp")
            botonIndividual.classList.add("boton_individual")
            botonIndividual.innerHTML="Individual 👤"

            document.querySelector(".blur").appendChild(botonEquipos)
            botonEquipos.classList.add("animate__backInUp")
            botonEquipos.classList.add("boton_equipos")
            botonEquipos.innerHTML="Equipos 👥"

            document.querySelector(".blur").appendChild(botonEquiposACiegas)
            botonEquiposACiegas.classList.add("animate__backInUp")
            botonEquiposACiegas.classList.add("boton_equipos")
            botonEquiposACiegas.innerHTML="Equipos 👥"
        },800)
    },250)

})

botonIndividual.addEventListener("click",()=>{
    botonIndividual.classList.replace("animate__backInUp","animate__backOutRight")
    botonEquipos.classList.replace("animate__backInUp","animate__backOutDown")
    botonEquiposACiegas.classList.replace("animate__backInUp","animate__backOutDown")
    escogerModoDeGruposH2.classList.replace("animate__backInDown","animate__backOutUp")

    setTimeout(()=>{
        botonEquipos.remove()
        botonIndividual.remove()
        botonEquiposACiegas.remove()
        escogerModoDeGruposH2.remove()

        document.querySelector(".blur").appendChild(h2EligeNumeroDeJugadores)
        h2EligeNumeroDeJugadores.classList.add("animate__backInDown")
        h2EligeNumeroDeJugadores.classList.add("elije_numero_jugadores")
        h2EligeNumeroDeJugadores.innerHTML="Escriba el numero de jugadores: "

        setTimeout(()=>{
            document.querySelector(".blur").appendChild(inputNumeroDeJugadores)
            inputNumeroDeJugadores.classList.add("animate__backInUp")
            inputNumeroDeJugadores.classList.add("input_numero_jugadores")

            document.querySelector(".blur").appendChild(botonSiguiente)
            botonSiguiente.classList.add("animate__backInUp")
            botonSiguiente.classList.add("boton_siguiente")
            
            botonSiguiente.innerHTML="Siguiente: "

        },900)
    },250)
    botonSiguiente.addEventListener("click",()=>{
        alert("hola como va")
    })
})