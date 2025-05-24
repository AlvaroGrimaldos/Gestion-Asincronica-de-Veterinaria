function menuInicial() {
    let menu = Number(prompt("Bienvenido, Ingrese la opcion que desea realizar \n 1) Registrar un nuevo dueno. \n 2) Registrar una nueva mascota. \n 3) Listar todas las mascotas. \n 4) Buscar una mascota por nombre. \n 5) Actualizar el estado de salud de una mascota. \n 6) Eliminar mascota por nombre \n 7) Ver mascotas de un dueno. \n 8) Salir."))

    switch (menu) {
        case 1:
            registrarDueno(mostrarId);
        case 2:
            registrarMascota();
        case 3:
            listarMascotas();
        case 4:
            buscarMascota();
        case 5:
            actualizarMascota();
        case 6:
            eliminarMascota();
        case 7:
            verMascota();
        case 8:
            break;
        default:
            alert("Por favor ingrese una opcion correcta.");
    }
};

let duenos = new Map();
let idGenerico = 1000

function mostrarId(id) {
    setTimeout(() => {
        alert(`Usuario registrado con exito. \n Su ID es: ${id}`)
    }, 1500);
}

function registrarDueno(callback) {
    let id = idGenerico++;
    duenos.set("ID", id);

    let nombre = prompt("Ingrese su nombre y apellido.");
    duenos.set("Nmobre", nombre);

    let cedula = prompt("Ingrese su cedula.");
    duenos.set("Cedula", cedula);

    let telefono = prompt("Ingrese su numero telefonico.");
    duenos.set("Telefono", telefono);

    let correo = prompt("Ingrese su correo electronico.");
    duenos.set("Correo", correo);

    // console.log(duenos);
    callback(id);
    //Hacer un alert que muestre el ID que se le genero y crear el objeto o diccionario en donde se van a guardar 
}

// registrarDueno(mostrarId);


function registrarMascota(params) {
    let nombre = prompt("Ingrese el nombre de su mascota.");

    let especie = prompt("Ingrese la especie de su mascota.");

    let edad = prompt("Ingrese la edad de su mascota en anos.");

    let peso = prompt("Ingrese el peso (Kg) de su mascota.");

    let estadoSalud = prompt("Ingrese el estado de salud de su mascota (Sano, Enfermo, En tratamiento).")

    let idDueno = prompt("Ingrese el ID del dueno.")

    //Mirar como se puede hacer para que cada campo sea obligatorio y para que en el estado de salud solo se puedan esas opciones o un manejo de error para cosas incorrectas, mirar que en el peso y la edad solo entren numeros y numeros positivos
};

function listarMascotas(params) {
    //Hacer que se muestren todas las mascotas registradas mediante un .table en la consola
};

function buscarMascota(params) {
    //
};

function actualizarMascota(params) {
    
};

function eliminarMascota(params) {
    
};

function verMascota(params) {
    
}


