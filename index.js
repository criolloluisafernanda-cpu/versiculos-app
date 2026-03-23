const versiculos = {

    feliz: [
        "Salmo 118:24 - Este es el día que hizo el Señor.",
        "Filipenses 4:4 - Regocijaos en el Señor siempre.",
        "Salmo 16:11 - En tu presencia hay plenitud de gozo.",
        "Juan 15:11 - Mi gozo estará en vosotros.",
        "Salmo 126:3 - Grandes cosas ha hecho el Señor.",
        "Proverbios 17:22 - El corazón alegre es buena medicina.",
        "Isaías 61:10 - Me gozaré en el Señor.",
        "Salmo 28:7 - Mi corazón se alegra en Él.",
        "Romanos 15:13 - Dios os llene de gozo.",
        "Salmo 97:12 - Alegraos en el Señor.",
        "Nehemías 8:10 - El gozo del Señor es vuestra fuerza.",
        "Salmo 30:5 - El lloro puede durar una noche.",
        "Juan 16:24 - Pedid y recibiréis para que vuestro gozo sea completo.",
        "Salmo 5:11 - Se alegrarán todos los que en ti confían.",
        "Isaías 12:2 - Dios es mi salvación."
    ],

    ansioso: [
        "Filipenses 4:6 - No se inquieten por nada.",
        "1 Pedro 5:7 - Echen toda su ansiedad sobre Él.",
        "Mateo 6:34 - No os preocupéis por el mañana.",
        "Salmo 55:22 - Echa sobre el Señor tu carga.",
        "Isaías 41:10 - No temas, yo estoy contigo.",
        "Juan 14:27 - Mi paz os dejo.",
        "Salmo 94:19 - Tus consuelos alegraban mi alma.",
        "Proverbios 12:25 - La ansiedad deprime.",
        "Mateo 11:28 - Venid a mí todos los cansados.",
        "Salmo 23:4 - No temeré mal alguno.",
        "Romanos 8:38 - Nada nos separará del amor.",
        "Isaías 26:3 - Tú guardarás en paz.",
        "Salmo 34:4 - Me libró de todos mis temores.",
        "Hebreos 13:6 - El Señor es mi ayudador.",
        "Salmo 46:1 - Dios es nuestro refugio."
    ],

    triste: [
        "Salmo 34:18 - Cercano está el Señor.",
        "Mateo 5:4 - Bienaventurados los que lloran.",
        "Salmo 147:3 - Sana a los quebrantados.",
        "Juan 16:33 - Confiad, yo he vencido.",
        "Apocalipsis 21:4 - No habrá más llanto.",
        "Salmo 9:9 - Refugio en la angustia.",
        "Isaías 53:3 - Varón de dolores.",
        "Salmo 42:11 - Espera en Dios.",
        "Lamentaciones 3:22 - Nuevas son cada mañana.",
        "Salmo 30:11 - Has cambiado mi lamento.",
        "2 Corintios 1:3 - Dios de toda consolación.",
        "Salmo 13:5 - En tu misericordia confío.",
        "Juan 11:35 - Jesús lloró.",
        "Romanos 12:15 - Llorad con los que lloran.",
        "Salmo 56:8 - Tú cuentas mis lágrimas."
    ],

    desanimado: [
        "Josué 1:9 - Esfuérzate y sé valiente.",
        "Gálatas 6:9 - No nos cansemos.",
        "Isaías 40:31 - Tendrán nuevas fuerzas.",
        "Salmo 27:14 - Aguarda al Señor.",
        "2 Timoteo 1:7 - Dios no nos dio espíritu de temor.",
        "Hebreos 10:23 - Mantengamos firme la esperanza.",
        "Salmo 31:24 - Esforzaos todos.",
        "Filipenses 1:6 - Él perfeccionará la obra.",
        "Romanos 8:28 - Todo obra para bien.",
        "Salmo 138:8 - Dios cumplirá su propósito.",
        "Isaías 43:2 - Cuando pases por las aguas.",
        "1 Corintios 15:58 - Firmes y constantes.",
        "Salmo 121:1 - Alzaré mis ojos.",
        "Proverbios 3:5 - Confía en el Señor.",
        "Salmo 37:5 - Encomienda al Señor."
    ],

    enojado: [
        "Efesios 4:26 - Airaos pero no pequéis.",
        "Proverbios 15:1 - La respuesta suave calma.",
        "Santiago 1:19 - Tardos para la ira.",
        "Proverbios 14:29 - El lento para la ira.",
        "Colosenses 3:8 - Dejad la ira.",
        "Proverbios 16:32 - Mejor el paciente.",
        "Eclesiastés 7:9 - No te apresures en enojarte.",
        "Salmo 37:8 - Deja la ira.",
        "Romanos 12:19 - No os venguéis.",
        "Proverbios 19:11 - La cordura detiene la ira.",
        "Mateo 5:22 - El que se enoje.",
        "Lucas 6:31 - Como queréis que hagan.",
        "1 Corintios 13:5 - El amor no se irrita.",
        "Gálatas 5:22 - Fruto del Espíritu.",
        "Proverbios 12:16 - El necio muestra su enojo."
    ],

    perdido: [
        "Proverbios 3:5 - Confía en el Señor.",
        "Salmo 119:105 - Lámpara es tu palabra.",
        "Jeremías 29:11 - Planes de bien.",
        "Isaías 30:21 - Este es el camino.",
        "Juan 14:6 - Yo soy el camino.",
        "Salmo 32:8 - Te enseñaré el camino.",
        "Proverbios 16:9 - Dios dirige los pasos.",
        "Salmo 25:4 - Muéstrame tus caminos.",
        "Isaías 58:11 - El Señor te guiará.",
        "Salmo 73:24 - Me guiarás con tu consejo.",
        "Éxodo 33:14 - Mi presencia irá contigo.",
        "Salmo 48:14 - Él nos guiará.",
        "Juan 16:13 - El Espíritu guiará.",
        "Salmo 37:23 - Pasos firmes.",
        "Proverbios 4:11 - Camino recto."
    ]
};

let emocionActual = "";
let ultimoIndice = {};

const colores = {
    feliz: "#fff9db",
    ansioso: "#ffe5d9",
    triste: "#e7f0ff",
    desanimado: "#f8f1df",
    enojado: "#ffe3e3",
    perdido: "#f1e7ff"
};

function mostrarVersiculo(emocion) {
    emocionActual = emocion;
    cambiarFondo(emocion);
    cambiarTexto();
}

function siguienteVersiculo() {
    if (emocionActual === "") return;
    cambiarTexto();
}

function cambiarTexto() {
    const lista = versiculos[emocionActual];
    const texto = document.getElementById("texto");

    let random;

    do {
        random = Math.floor(Math.random() * lista.length);
    } while (random === ultimoIndice[emocionActual]);

    ultimoIndice[emocionActual] = random;

    texto.classList.add("fade");

    setTimeout(() => {
        texto.innerText = lista[random];
        texto.classList.remove("fade");
        texto.classList.add("show");
    }, 200);
}

function cambiarFondo(emocion) {
    document.body.style.background = colores[emocion];
}