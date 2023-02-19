var textoComprobador = "inicio"
var iniciocasualindividual = false
var iniciocasualequipos = false
var iniciocasualequiposaciegas = false
var iniciocompetitivoindividual = false
var iniciocompetitivoequipos = false
var iniciocompetitivoequiposaciegas = false

const contenedorBlur = document.querySelector(".contenedor-blur")

const blur = document.querySelector(".blur")

// pantalla inicial:

const comoJugar = document.querySelector(".h3-comojugar")
const parrafo = document.querySelector(".parrafo-introduccion")
const boton = document.querySelector(".boton-empezae")
const titulo = document.querySelector(".h2-bolirrana")

// Modo de juego:

const escogerModoDeJuegoH2 = document.createElement("h2");
const botonCasual = document.createElement("button")
const boton_competitivo = document.createElement("button")

// Que es esto?

const queEsCasual = document.createElement("p")
const queEsCompetitivo = document.createElement("p")

const queEsIndividual = document.createElement("p")
const queEsEquipos = document.createElement("p")
const queEsEquiposACiegas = document.createElement("p")

// Modo de agrupacion:

const divOpciones = document.createElement("div")
const escogerModoDeGruposH2 = document.createElement("h2")
const botonIndividual = document.createElement("button")
const botonEquipos = document.createElement("button")
const botonEquiposACiegas = document.createElement("button")

// Numero de jugadores: 

const h2EligeNumeroDeJugadores = document.createElement("h2")
const inputNumeroDeJugadores = document.createElement("input")
const botonSiguiente = document.createElement("button")

// Numero de jugadores por equipo:

const h2EligeNumeroDeJugadoresPorEquipo = document.createElement("h2")
const input_numero_jugadores_por_equipo = document.createElement("input")

// Menu jugadores:

const h2_Jugadores = document.createElement("h2")
const h3_jugadores_aviso = document.createElement("h3")
const boton_empezar_juego = document.createElement("button")

const h2_puntos_a_alcanzar = document.createElement("h2")
const h3_mensaje_puntso = document.createElement("h3")
const input_puntos = document.createElement("input")

// Alerta nombre de jugadores:

const alertaJugadores = document.createElement("p")
const alertaPuntaje = document.createElement("p")

// Alerta numero de jugadores:

const alerta = document.createElement("p")

// Inicio juego:

const mensajeJuego = document.createElement("p")
const mensaje_juegoRegistoPuntos = document.createElement("p")

const botonFlexContainer = document.createElement("div")
const boton30 = document.createElement("button")
const boton50 = document.createElement("button")
const boton40 = document.createElement("button")
const boton150 = document.createElement("button")
const boton200 = document.createElement("button")
const boton300 = document.createElement("button")

const botonRegistrarPuntaje = document.createElement("button")
const botonSiguientejugador = document.createElement("button")

const flexContainerAbajo = document.createElement("div")

const botonJugarDeNuevo = document.createElement("button")

// Boton introduccion:

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

                document.querySelector(".blur").appendChild(queEsCasual)
                queEsCasual.classList.add("que_es_casual")
                queEsCasual.innerHTML = "Modo casual: todos los equipos juegan a la vez, solo hay 1 ronda"

                document.querySelector(".blur").appendChild(boton_competitivo)
                boton_competitivo.classList.add("animate__backInUp")
                boton_competitivo.classList.add("boton_competitivo")
                boton_competitivo.innerHTML="Competitivo 🏆"

                document.querySelector(".blur").appendChild(queEsCompetitivo)
                queEsCompetitivo.classList.add("que_es_competitivo")
                queEsCompetitivo.innerHTML = `Modo competitivo: En cada ronda se disputaran 2 equipos, el ganador, pasara a la siguiente ronda. <br> Las rondas se definen dependiendo de la cantidad de equipos que haya`
        },900)
    }, 250) 

})

// Botones:

botonCasual.addEventListener("click",()=>{
    textoComprobador += "casual"                     
    console.log(textoComprobador)

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

            blur.appendChild(queEsIndividual)
            queEsIndividual.classList.add("que_es_individual")
            queEsIndividual.innerHTML = "Individual: modo todos contra todos, gana la persona que primero alcanze la meta de puntos"

            blur.appendChild(botonEquipos)
            botonEquipos.classList.add("animate__backInUp")
            botonEquipos.classList.add("boton_equipos")
            botonEquipos.innerHTML="Equipos 👥"

            blur.appendChild(queEsEquipos)
            queEsEquipos.classList.add("que_es_equipos")
            queEsEquipos.innerHTML = "Equipos: gana el equipo que consiga primero la meta de puntos"

            blur.appendChild(botonEquiposACiegas)
            botonEquiposACiegas.classList.add("animate__backInUp")
            botonEquiposACiegas.classList.add("boton_equiposACiegas")
            botonEquiposACiegas.innerHTML="Equipos a ciegas 👥❓"

            blur.appendChild(queEsEquiposACiegas)
            queEsEquiposACiegas.classList.add("que_es_equipos_a_ciegas")
            queEsEquiposACiegas.innerHTML = "Equipos a ciegas: moto incognito, nadie sabe en que equipo esta, gana el equipo que primero alcanze la meta de puntos"
        },800)
    },250)

})

boton_competitivo.addEventListener("click",()=>{
    textoComprobador += "competitivo"
    console.log(textoComprobador)

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
            
            blur.appendChild(queEsIndividual)
            queEsIndividual.classList.add("que_es_individual")
            queEsIndividual.innerHTML = "Individual: modo todos contra todos, gana la persona que primero alcanze la meta de puntos"

            blur.appendChild(botonEquipos)
            botonEquipos.classList.add("animate__backInUp")
            botonEquipos.classList.add("boton_equipos")
            botonEquipos.innerHTML="Equipos 👥"

            blur.appendChild(queEsEquipos)
            queEsEquipos.classList.add("que_es_equipos")
            queEsEquipos.innerHTML = "Equipos: gana el equipo que consiga primero la meta de puntos"

            blur.appendChild(botonEquiposACiegas)
            botonEquiposACiegas.classList.add("animate__backInUp")
            botonEquiposACiegas.classList.add("boton_equiposACiegas")
            botonEquiposACiegas.innerHTML="Equipos a ciegas 👥❓"

            blur.appendChild(queEsEquiposACiegas)
            queEsEquiposACiegas.classList.add("que_es_equipos_a_ciegas")
            queEsEquiposACiegas.innerHTML = "Equipos a ciegas: moto incognito, nadie sabe en que equipo esta, gana el equipo que primero alcanze la meta de puntos"

        },800)
    },250)

})

botonIndividual.addEventListener("click",()=>{
    textoComprobador +="individual"
    console.log(textoComprobador)

    if(textoComprobador === "iniciocompetitivoindividual"){
        iniciocompetitivoindividual = true
        alert(iniciocompetitivoindividual)
    }
    
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
        var resultado = parseInt(inputNumeroDeJugadores.value)
        if(isNaN(inputNumeroDeJugadores.value) || inputNumeroDeJugadores.value <= 0){
            noEsNumero = true
            document.querySelector(".blur").appendChild(alerta)
            alerta.classList.add("alerta")
            alerta.innerHTML ="Por favor, introduzca un valor valido"
        }  else{
            if(confirm(`El numero de jugadores es de ${resultado}, ¿estas seguro de que quieres continuar?`)){
                inputNumeroDeJugadores.classList.replace("animate__backInUp","animate__backOutRight")
                h2EligeNumeroDeJugadores.classList.replace("animate__backInDown","animate__backOutUp")
                botonSiguiente.classList.replace("animate__backInUp","animate__backOutRight")
                var seguros = true
                alerta.remove()
                setTimeout(()=>{
                    inputNumeroDeJugadores.remove()
                    h2EligeNumeroDeJugadores.remove()
                    botonSiguiente.remove()
                },250)
            }
        }
        if(seguros == true){
        
            if(textoComprobador === "iniciocasualindividual"){   // casual e individual
                const contenedorFlex = document.createElement("div")
                contenedorFlex.classList.add("contenedor_flex")
                blur.appendChild(contenedorFlex)
                blur.classList.replace("blur","blurmejora")
                const fragmentoFlex = document.createDocumentFragment();

                queEsCasual.remove()
                queEsCompetitivo.remove()
                queEsIndividual.remove()
                queEsEquipos.remove()
                queEsEquiposACiegas.remove()
                
                if(resultado >= 1 && resultado <= 3){
                document.querySelector(".blurmejora").appendChild(h2_Jugadores)
                h2_Jugadores.classList.add("animate__backInDown")
                h2_Jugadores.classList.add("h2_jugadores")
                h2_Jugadores.innerHTML ="JUGADORES:"
    
                document.querySelector(".blurmejora").appendChild(h3_jugadores_aviso)
                h3_jugadores_aviso.classList.add("animate__backInDown")
                h3_jugadores_aviso.classList.add("h3_jugadores_aviso")
                h3_jugadores_aviso.innerHTML = "Modifica el nombre del jugador a tu gusto seleccionando el cuadro"
                
                document.querySelector(".blurmejora").appendChild(h2_puntos_a_alcanzar)
                h2_puntos_a_alcanzar.classList.add("animate__backInDown")
                h2_puntos_a_alcanzar.classList.add("h2_puntos_a_alcanzar")
                h2_puntos_a_alcanzar.innerHTML = "Puntos a alcanzar"

                document.querySelector(".blurmejora").appendChild(h3_mensaje_puntso)
                h3_mensaje_puntso.classList.add("animate__backInDown")
                h3_mensaje_puntso.classList.add("h3_mensaje_puntso")
                h3_mensaje_puntso.innerHTML = `Escribe el numero de puntos a jugar, el jugador que primero alcanze la meta de puntos gana`
                
                

                var items = []

                setTimeout(()=>{
                    for(i=0;i<resultado;i++){
                        var item =document.createElement("input")
                        
                        item.classList.add("animate__backInUp")
                        item.classList.add("items_individualmodo-casual_entre1y3")
                        item.classList.add(`jugador_${i}`)
                        item.placeholder = `Jugador ${i+1}`
                        
                        contenedorFlex.classList.replace("contenedor_flex","contenedorFlex1-3")
                        fragmentoFlex.appendChild(item)                       
                    }
                    console.log(item.name)
                    
                    contenedorFlex.appendChild(fragmentoFlex)

                    document.querySelector(".blurmejora").appendChild(boton_empezar_juego)
                    boton_empezar_juego.classList.add("animate__backInUp")
                    boton_empezar_juego.classList.add("botonEmpezarJuego")
                    boton_empezar_juego.innerHTML = "Empezar Juego"

                    document.querySelector(".blurmejora").appendChild(input_puntos)
                    input_puntos.classList.add("animate__backInUp")
                    input_puntos.classList.add("input_puntos")
                    input_puntos.placeholder = "puntos"

                    boton_empezar_juego.addEventListener("click",()=>{
                        for(i=0;i<resultado;i++){
                            jugador = document.querySelector(`.animate__backInUp.items_individualmodo-casual_entre1y3.jugador_${i}`)
                            if(isNaN(input_puntos.value) || input_puntos.value == 0){
                                document.querySelector(".blurmejora").appendChild(alertaPuntaje)
                                alertaPuntaje.classList.add("alertaPuntaje")
                                alertaPuntaje.innerText ="Introduzca un valor valido para el puntaje"
                                var puntajeBien = false
                            }else{
                                var puntajeBien = true
                                alertaPuntaje.remove()
                            }
                            if(jugador.value == ""){
                                document.querySelector(".blurmejora").appendChild(alertaJugadores)
                                alertaJugadores.classList.add("alertaJugadores")
                                alertaJugadores.innerHTML = "Por favor, completa todos los campos de los jugadores"
                            }else{
                                alertaJugadores.remove()
                                var nombresBien = true
                            }
                        if(nombresBien == true && puntajeBien == true){
                            var turno = 0
                            items.push(jugador.value)
                            

                            document.querySelector(".blurmejora").classList.add("animate__backOutDown")
                            setTimeout(()=>{
                                contenedorBlur.remove()
                            },250)
                            blurJuego = document.createElement("div")
                            blurJuego.classList.add("blurJuego")
                            document.body.appendChild(blurJuego)
                            blurJuego.appendChild(mensajeJuego)
                            
                            mensajeJuego.classList.add("mensaje_juego")
                            mensajeJuego.innerHTML = `${items[turno]} juega`
                            
                            blurJuego.appendChild(mensaje_juegoRegistoPuntos)
                            mensaje_juegoRegistoPuntos.classList.add("animate__backInDown")
                            mensaje_juegoRegistoPuntos.classList.add("mensaje_juegoRegistoPuntos")
                            mensaje_juegoRegistoPuntos.innerHTML = "Regista los puntos recolectados presionando en los siguientes botones: "
                            blurJuego.appendChild(botonFlexContainer)
                            botonFlexContainer.classList.add("animate__backInUp")
                            botonFlexContainer.classList.add("botonFlexContainer")
                            
                            botonFlexContainer.appendChild(boton30)
                            boton30.classList.add("animate__backInUp")
                            boton30.classList.add("boton30")
                            boton30.innerText="30"
                            
                            botonFlexContainer.appendChild(boton40)
                            boton40.classList.add("animate__backInUp")
                            boton40.classList.add("boton40")
                            boton40.innerText="40"
                            
                            botonFlexContainer.appendChild(boton50)
                            boton50.classList.add("animate__backInUp")
                            boton50.classList.add("boton50")
                            boton50.innerText="50"
                            botonFlexContainer.appendChild(boton150)
                            boton150.classList.add("animate__backInUp")
                            boton150.classList.add("boton150")
                            boton150.innerText="150"
                            botonFlexContainer.appendChild(boton200)
                            boton200.classList.add("animate__backInUp")
                            boton200.classList.add("boton200")
                            boton200.innerText="200"
                            botonFlexContainer.appendChild(boton300)
                            boton300.classList.add("animate__backInUp")
                            boton300.classList.add("boton300")
                            boton300.innerText="300"
                            botonFlexContainer.appendChild(botonSiguientejugador)
                            botonSiguientejugador.classList.add("animate__backInUp")
                            botonSiguientejugador.classList.add("botonRegistrarPuntaje")
                            botonSiguientejugador.innerHTML = "Siguiente Jugador" 

                            
                        }
                        }

                        var puntaje = []
                        document.body.appendChild(flexContainerAbajo)
                        flexContainerAbajo.classList.add("flexContainerAbajo")

                        h2Rondas = document.createElement("h2")
                        h2Rondas.classList.add("h2Rondas")
                        botonFlexContainer.appendChild(h2Rondas)
                        h2Rondas.innerHTML = "Ronda 1"

                        
                        

                        
                        for (i=0; i<resultado; i++){
                            puntaje.push(0)
                            
                            cuadroJugadores = document.createElement("div")
                            flexContainerAbajo.appendChild(cuadroJugadores)
                            cuadroJugadores.classList.add("cuadroJugadores")
                            cuadroJugadores.classList.add("animate__backInDown")

                            
                            h3CuadrosJugadores = document.createElement("h3")
                            h3CuadrosJugadores.classList.add("h3CuadrosJugadores")
                            h3CuadrosJugadores.classList.add(`numero_${i}`)
                            cuadroJugadores.appendChild(h3CuadrosJugadores)
                            h3CuadrosJugadores.innerHTML = `<b> ${items[i]}: </b> <br> Tiene: ${puntaje[turno]} puntos <br> le faltan ${input_puntos.value - puntaje[turno]} puntos`
                        }
                        let ronda = 2
                        botonSiguientejugador.addEventListener("click",()=>{  
                            
                            mensajeJuego.classList.add("animate__rubberBand") 
                            setTimeout(()=>{
                                mensajeJuego.classList.remove("animate__rubberBand")
                            },700)                 
                            if (turno == resultado-1){ 
                                turno = 0                      
                                mensajeJuego.innerHTML = `${items[turno]} juega`
                                if(turno == 0){
                                    h2Rondas.innerHTML = `Ronda ${ronda}`
                                    ronda +=1  
                                }            
                            } else{
                                turno +=1                           
                                mensajeJuego.innerHTML = `${items[turno]} juega`   
                            }                  
                        })
                        
                        boton30.addEventListener("click",()=>{
                            puntaje[turno] += 30 
                            console.log(puntaje)
                            console.log(items)
                            
                            mensajeJuego.innerHTML = `${items[turno]} juega | Tiene ${puntaje[turno]} puntos | Le faltan ${input_puntos.value - puntaje[turno]} puntos para ganar`
                            document.querySelector(`body > div.flexContainerAbajo > div:nth-child(${turno+1}) > h3`).innerHTML = `<b> ${items[turno]}: </b> <br> Tiene: ${puntaje[turno]} puntos <br> le faltan ${input_puntos.value - puntaje[turno]} puntos`

                            if (puntaje[turno] >= input_puntos.value){
                                modalGanador = document.createElement("div")
                                blurJuego.appendChild(modalGanador)
                                modalGanador.classList.add("animate__backInDown")
                                modalGanador.classList.add("modalGanador")
                                modalGanador.innerHTML = `🏆 ${items[turno]} es el ganador 🏆 <br> Felicitaciones :D <br> Ganaste en la ${ronda-1}° ronda`                               
                            }
                        })
                        boton40.addEventListener("click",()=>{
                            puntaje[turno] += 40 
                            console.log(puntaje)
                            console.log(items)
                            
                            mensajeJuego.innerHTML = `${items[turno]} juega | Tiene ${puntaje[turno]} puntos | Le faltan ${input_puntos.value - puntaje[turno]} puntos para ganar`
                            document.querySelector(`body > div.flexContainerAbajo > div:nth-child(${turno+1}) > h3`).innerHTML = `<b> ${items[turno]}: </b> <br> Tiene: ${puntaje[turno]} puntos <br> le faltan ${input_puntos.value - puntaje[turno]} puntos`
             
                            if (puntaje[turno] >= input_puntos.value){
                                modalGanador = document.createElement("div")
                                blurJuego.appendChild(modalGanador)
                                modalGanador.classList.add("animate__backInDown")
                                modalGanador.classList.add("modalGanador")
                                modalGanador.innerHTML = `🏆 ${items[turno]} es el ganador 🏆 <br> Felicitaciones :D <br> Ganaste en la ${ronda-1}° ronda`
                            }
                        })
                        boton50.addEventListener("click",()=>{
                            puntaje[turno] += 50 
                            console.log(puntaje)
                            console.log(items)
                            
                            mensajeJuego.innerHTML = `${items[turno]} juega | Tiene ${puntaje[turno]} puntos | Le faltan ${input_puntos.value - puntaje[turno]} puntos para ganar`
                            document.querySelector(`body > div.flexContainerAbajo > div:nth-child(${turno+1}) > h3`).innerHTML = `<b> ${items[turno]}: </b> <br> Tiene: ${puntaje[turno]} puntos <br> le faltan ${input_puntos.value - puntaje[turno]} puntos`

                            if (puntaje[turno] >= input_puntos.value){
                                modalGanador = document.createElement("div")
                                blurJuego.appendChild(modalGanador)
                                modalGanador.classList.add("animate__backInDown")
                                modalGanador.classList.add("modalGanador")
                                modalGanador.innerHTML = `🏆 ${items[turno]} es el ganador 🏆 <br> Felicitaciones :D <br> Ganaste en la ${ronda-1}° ronda`
                            }
                        })
                        boton150.addEventListener("click",()=>{
                            puntaje[turno] += 150 
                            console.log(puntaje)
                            console.log(items)
                            
                            mensajeJuego.innerHTML = `${items[turno]} juega | Tiene ${puntaje[turno]} puntos | Le faltan ${input_puntos.value - puntaje[turno]} puntos para ganar`
                            document.querySelector(`body > div.flexContainerAbajo > div:nth-child(${turno+1}) > h3`).innerHTML = `<b> ${items[turno]}: </b> <br> Tiene: ${puntaje[turno]} puntos <br> le faltan ${input_puntos.value - puntaje[turno]} puntos`

                            if (puntaje[turno] >= input_puntos.value){
                                modalGanador = document.createElement("div")
                                blurJuego.appendChild(modalGanador)
                                modalGanador.classList.add("animate__backInDown")
                                modalGanador.classList.add("modalGanador")
                                modalGanador.innerHTML = `🏆 ${items[turno]} es el ganador 🏆 <br> Felicitaciones :D <br> Ganaste en la ${ronda-1}° ronda`
                            }
                        })
                        boton200.addEventListener("click",()=>{
                            puntaje[turno] += 200 
                            console.log(puntaje)
                            console.log(items)
                            
                            mensajeJuego.innerHTML = `${items[turno]} juega | Tiene ${puntaje[turno]} puntos | Le faltan ${input_puntos.value - puntaje[turno]} puntos para ganar`
                            document.querySelector(`body > div.flexContainerAbajo > div:nth-child(${turno+1}) > h3`).innerHTML = `<b> ${items[turno]}: </b> <br> Tiene: ${puntaje[turno]} puntos <br> le faltan ${input_puntos.value - puntaje[turno]} puntos`

                            if (puntaje[turno] >= input_puntos.value){
                                modalGanador = document.createElement("div")
                                blurJuego.appendChild(modalGanador)
                                modalGanador.classList.add("animate__backInDown")
                                modalGanador.classList.add("modalGanador")
                                modalGanador.innerHTML = `🏆 ${items[turno]} es el ganador 🏆 <br> Felicitaciones :D <br> Ganaste en la ${ronda-1}° ronda`
                            }
                        })
                        boton300.addEventListener("click",()=>{
                            puntaje[turno] += 300 
                            console.log(puntaje)
                            console.log(items)
                            
                            mensajeJuego.innerHTML = `${items[turno]} juega | Tiene ${puntaje[turno]} puntos | Le faltan ${input_puntos.value - puntaje[turno]} puntos para ganar`
                            document.querySelector(`body > div.flexContainerAbajo > div:nth-child(${turno+1}) > h3`).innerHTML = `<b> ${items[turno]}: </b> <br> Tiene: ${puntaje[turno]} puntos <br> le faltan ${input_puntos.value - puntaje[turno]} puntos`

                            if (puntaje[turno] >= input_puntos.value){
                                modalGanador = document.createElement("div")
                                blurJuego.appendChild(modalGanador)
                                modalGanador.classList.add("animate__backInDown")
                                modalGanador.classList.add("modalGanador")
                                modalGanador.innerHTML = `🏆 ${items[turno]} es el ganador 🏆 <br> Felicitaciones :D <br> Ganaste en la ${ronda-1}° ronda`
                            }
                        })  
                    })           
                },800)
                } else if(resultado >= 4 && resultado <= 9){
                    document.querySelector(".blurmejora").appendChild(h2_Jugadores)
                    h2_Jugadores.classList.add("animate__backInDown")
                    h2_Jugadores.classList.add("h2_jugadores")
                    h2_Jugadores.innerHTML ="JUGADORES:"
        
                    document.querySelector(".blurmejora").appendChild(h3_jugadores_aviso)
                    h3_jugadores_aviso.classList.add("animate__backInDown")
                    h3_jugadores_aviso.classList.add("h3_jugadores_aviso")
                    h3_jugadores_aviso.innerHTML = "Modifica el nombre de los jugadores a tu gusto seleccionando el cuadro"
                    
                    setTimeout(()=>{
                        document.querySelector(".blurmejora").appendChild(boton_empezar_juego)
                        boton_empezar_juego.classList.add("animate__backInUp")
                        boton_empezar_juego.classList.add("botonEmpezarJuego")
                        boton_empezar_juego.innerHTML = "Siguiente"
    
                        for(i=0; i<resultado; i++){
                        const item = document.createElement("input")
                        item.placeholder = `Jugador ${i+1}`
                        item.classList.add("animate__backInUp")
                        item.classList.add("items_individualmodo-casual")
                        fragmentoFlex.appendChild(item)
                        console.log(item)  
                        }
                        contenedorFlex.appendChild(fragmentoFlex)
                    },800)
                }                 
            }
        }
    })
})

botonEquipos.addEventListener("click",()=>{
    textoComprobador +="equipos"
    console.log(textoComprobador)

    if(textoComprobador === "iniciocasualequipos"){
        iniciocasualequipos = true
        alert(iniciocasualequipos)
    }

    if(textoComprobador === "iniciocompetitivoequipos"){
        iniciocompetitivoequipos = true
        alert(iniciocompetitivoequipos)
    }
    
    botonIndividual.classList.replace("animate__backInUp","animate__backOutDown")
    botonEquipos.classList.replace("animate__backInUp","animate__backOutRight")
    botonEquiposACiegas.classList.replace("animate__backInUp","animate__backOutDown")
    escogerModoDeGruposH2.classList.replace("animate__backInDown","animate__backOutUp")

    setTimeout(()=>{
        botonEquipos.remove()
        botonIndividual.remove()
        botonEquiposACiegas.remove()
        escogerModoDeGruposH2.remove()

        document.querySelector(".blur").appendChild(h2EligeNumeroDeJugadores)
        h2EligeNumeroDeJugadores.classList.add("animate__backInDown")
        h2EligeNumeroDeJugadores.classList.add("elije_numero_jugadores_equipos")
        h2EligeNumeroDeJugadores.innerHTML="Escriba el numero de equipos: "

        document.querySelector(".blur").appendChild(h2EligeNumeroDeJugadoresPorEquipo)
        h2EligeNumeroDeJugadoresPorEquipo.classList.add("animate__backInDown")
        h2EligeNumeroDeJugadoresPorEquipo.classList.add("elije_numero_jugadores_por_equipo")
        h2EligeNumeroDeJugadoresPorEquipo.innerHTML="Escriba el numero de jugadores por equipo: "

        setTimeout(()=>{
            document.querySelector(".blur").appendChild(inputNumeroDeJugadores)
            inputNumeroDeJugadores.classList.add("animate__backInUp")
            inputNumeroDeJugadores.classList.add("input_numero_jugadores_equipos")

            document.querySelector(".blur").appendChild(input_numero_jugadores_por_equipo)
            input_numero_jugadores_por_equipo.classList.add("animate__backInUp")
            input_numero_jugadores_por_equipo.classList.add("input_numero_jugadores_por_equipo")

            document.querySelector(".blur").appendChild(botonSiguiente)
            botonSiguiente.classList.add("animate__backInUp")
            botonSiguiente.classList.add("boton_siguiente_equipos")
            
            botonSiguiente.innerHTML="Siguiente: "

            botonSiguiente.addEventListener("click",()=>{
                resultado = parseInt(inputNumeroDeJugadores.value)
                confirmacion1 = false
                resultado2 = parseInt(input_numero_jugadores_por_equipo.value)
                numeroDeEquipos = resultado * resultado2
                if(isNaN(input_numero_jugadores_por_equipo.value) || input_numero_jugadores_por_equipo.value <= 0){
                    document.querySelector(".blur").appendChild(alerta)
                    alerta.classList.add("alerta_equipos2")
                    alerta.innerHTML="Por favor, completa los campos con valores validos"
                } else{
                    if(confirm(`Confirmacion: El numero de equipos son de ${resultado}`)){
                        if(confirm(`Tambien, el numero de jugadores por equipo es de ${resultado2}, por lo tanto se nescecitan ${numeroDeEquipos} jugadores, ¿estas seguro de continuar?`)){
                            h2EligeNumeroDeJugadoresPorEquipo.classList.replace("animate__backInDown","animate__backOutUp")
                            h2EligeNumeroDeJugadores.classList.replace("animate__backInDown","animate__backOutUp")
                            inputNumeroDeJugadores.classList.replace("animate__backInUp","animate__backOutDown")
                            input_numero_jugadores_por_equipo.classList.replace("animate__backInUp","animate__backOutDown")
                            botonSiguiente.classList.replace("animate__backInUp","animate__backOutRight")
                            alerta.remove()

                            setTimeout(()=>{
                                h2EligeNumeroDeJugadoresPorEquipo.remove()
                                h2EligeNumeroDeJugadores.remove()
                                inputNumeroDeJugadores.remove()
                                input_numero_jugadores_por_equipo.remove()
                                botonSiguiente.remove()

                                //crear la tabla de los jugadores con su respectivo equipo
                            },250)
                        }
                    }
                }
            })
        },800)
    },250)
})

botonEquiposACiegas.addEventListener("click",()=>{
    textoComprobador += "equiposaciegas"
    console.log(textoComprobador)

    if(textoComprobador === "iniciocasualequiposaciegas"){
        iniciocasualequiposaciegas = true
        alert(iniciocasualequiposaciegas)
    }
    if(textoComprobador === "iniciocompetitivoequiposaciegas"){
        iniciocompetitivoequiposaciegas = true
        alert(iniciocompetitivoequiposaciegas)
    }

    botonIndividual.classList.replace("animate__backInUp","animate__backOutDown")
    botonEquipos.classList.replace("animate__backInUp","animate__backOutRight")
    botonEquiposACiegas.classList.replace("animate__backInUp","animate__backOutDown")
    escogerModoDeGruposH2.classList.replace("animate__backInDown","animate__backOutUp")

    setTimeout(()=>{
        botonEquipos.remove()
        botonIndividual.remove()
        botonEquiposACiegas.remove()
        escogerModoDeGruposH2.remove()

        document.querySelector(".blur").appendChild(h2EligeNumeroDeJugadores)
        h2EligeNumeroDeJugadores.classList.add("animate__backInDown")
        h2EligeNumeroDeJugadores.classList.add("elije_numero_jugadores_equipos")
        h2EligeNumeroDeJugadores.innerHTML="Escriba el numero de equipos: "

        document.querySelector(".blur").appendChild(h2EligeNumeroDeJugadoresPorEquipo)
        h2EligeNumeroDeJugadoresPorEquipo.classList.add("animate__backInDown")
        h2EligeNumeroDeJugadoresPorEquipo.classList.add("elije_numero_jugadores_por_equipo")
        h2EligeNumeroDeJugadoresPorEquipo.innerHTML="Escriba el numero de jugadores por equipo: "

        setTimeout(()=>{
            document.querySelector(".blur").appendChild(inputNumeroDeJugadores)
            inputNumeroDeJugadores.classList.add("animate__backInUp")
            inputNumeroDeJugadores.classList.add("input_numero_jugadores_equipos")

            document.querySelector(".blur").appendChild(input_numero_jugadores_por_equipo)
            input_numero_jugadores_por_equipo.classList.add("animate__backInUp")
            input_numero_jugadores_por_equipo.classList.add("input_numero_jugadores_por_equipo")

            document.querySelector(".blur").appendChild(botonSiguiente)
            botonSiguiente.classList.add("animate__backInUp")
            botonSiguiente.classList.add("boton_siguiente_equipos")
            
            botonSiguiente.innerHTML="Siguiente: "

            botonSiguiente.addEventListener("click",()=>{
                resultado = parseInt(inputNumeroDeJugadores.value)
                confirmacion1 = false
                resultado2 = parseInt(input_numero_jugadores_por_equipo.value)
                numeroDeEquipos = resultado * resultado2
                if(isNaN(input_numero_jugadores_por_equipo.value) || input_numero_jugadores_por_equipo.value <= 0){
                    document.querySelector(".blur").appendChild(alerta)
                    alerta.classList.add("alerta_equipos2")
                    alerta.innerHTML="Por favor, completa los campos con valores validos"
                } else{
                    if(confirm(`Confirmacion: El numero de equipos son de ${resultado}`)){
                        if(confirm(`Tambien, el numero de jugadores por equipo es de ${resultado2}, por lo tanto se nescecitan ${numeroDeEquipos} jugadores, ¿estas seguro de continuar?`)){
                            h2EligeNumeroDeJugadoresPorEquipo.classList.replace("animate__backInDown","animate__backOutUp")
                            h2EligeNumeroDeJugadores.classList.replace("animate__backInDown","animate__backOutUp")
                            inputNumeroDeJugadores.classList.replace("animate__backInUp","animate__backOutDown")
                            input_numero_jugadores_por_equipo.classList.replace("animate__backInUp","animate__backOutDown")
                            botonSiguiente.classList.replace("animate__backInUp","animate__backOutRight")
                            alerta.remove()

                            setTimeout(()=>{
                                h2EligeNumeroDeJugadoresPorEquipo.remove()
                                h2EligeNumeroDeJugadores.remove()
                                inputNumeroDeJugadores.remove()
                                input_numero_jugadores_por_equipo.remove()
                                botonSiguiente.remove()

                                //crear la tabla de los jugadores con su respectivo equipo
                            },250)
                        }
                    }
                }
            })
        },800)
    },250)
})



console.log(textoComprobador)