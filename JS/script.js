async function menuInicial() {
    let menu = Number(prompt("Bienvenido, Ingrese la opcion que desea realizar \n 1) Registrar un nuevo dueno. \n 2) Registrar una nueva mascota. \n 3) Listar todas las mascotas. \n 4) Buscar una mascota por nombre. \n 5) Actualizar el estado de salud de una mascota. \n 6) Eliminar mascota por nombre \n 7) Ver mascotas de un dueno. \n 8) Salir."))

    switch (menu) {
        case 1:
            await registrarDueno(mostrarId);
        case 2:
            await registrarMascota(validacionDueno);
        case 3:
            await listarMascotas();
        case 4:
            await buscarMascota();
        case 5:
            await actualizarMascota();
        case 6:
            await eliminarMascota();
        case 7:
            await verMascota();
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
        alert(`Usuario registrado con exito. \n Su ID es: ${id} \n (Se necesita para registrar una mascota a su nombre)`)
    }, 1500);
};

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
};

// registrarDueno(mostrarId);

let mascotas = [];
let idGenericoMascotas = 100;

function validacionDueno(id, idmascota) {
    setTimeout(() => {
        alert(`Registro de mascota exitoso, Dueno con ID: ${id} si existe. \n ID de la mascota: ${idmascota}`);
    }, 2000);
}
function registrarMascota(callback) {
    let idMascotas = idGenericoMascotas++;
    let nombre = prompt("Ingrese el nombre de su mascota.");
    let especie = prompt("Ingrese la especie de su mascota.");
    let edad = prompt("Ingrese la edad de su mascota en anos.");
    let peso = prompt("Ingrese el peso (Kg) de su mascota.");
    let estadoSalud = prompt("Ingrese el estado de salud de su mascota (Sano, Enfermo, En tratamiento).")
    let idDueno = prompt("Ingrese el ID del dueno.");

    mascotas.push({ID: idMascotas, Nombre: nombre, Especie: especie, Edad: edad, Peso: peso, EstadoDeSalud: estadoSalud, IDdueno: idDueno});
    // console.log(mascotas);
    callback(idDueno, idMascotas);
    //Mirar como se puede hacer para que cada campo sea obligatorio y para que en el estado de salud solo se puedan esas opciones o un manejo de error para cosas incorrectas, mirar que en el peso y la edad solo entren numeros y numeros positivos
};

// registrarMascota(validacionDueno);

const getDatos = () => {
        return mascotas;
};

function listarMascotas() {
    setTimeout(() => {
        const listaMascotas = getDatos();
        console.table(listaMascotas);
    }, 2000);
    //Hacer que se muestren todas las mascotas registradas mediante un .table en la consola
};

// listarMascotas();

function buscarMascota() {
    let mascotaBuscada = prompt("Ingrese el nombre de su mascota.");
    const busqueda = mascotas.find(p => p.Nombre == mascotaBuscada);
    console.table(busqueda);
};

// buscarMascota();

function actualizarMascota(params) {
    
};

function eliminarMascota(params) {
    
};

function verMascota(params) {
    
}


