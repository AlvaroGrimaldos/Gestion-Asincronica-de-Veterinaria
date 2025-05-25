async function main() {
    let salir = false;
    
    while (!salir) {
        const opcion = await menuInicial();
        if (opcion === 8) salir = true;
    }
}

async function menuInicial() {
    let menu = Number(prompt("Bienvenido, Ingrese la opcion que desea realizar \n 1) Registrar un nuevo dueno. \n 2) Registrar una nueva mascota. \n 3) Listar todas las mascotas. \n 4) Buscar una mascota por nombre. \n 5) Actualizar el estado de salud de una mascota. \n 6) Eliminar mascota por nombre \n 7) Ver mascotas de un dueno. \n 8) Salir."))

    switch (menu) {
        case 1:
            await registrarDueno(mostrarId);
            break;
        case 2:
            await registrarMascota(validacionDueno);
            break;
        case 3:
            await listarMascotas();
            break;
        case 4:
            await buscarMascota()
                    .then(mascotaEncontrada => {
                        console.log("Mascota encontrada:", mascotaEncontrada);
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
            break;
        case 5:
            await actualizarMascota();
            break;
        case 6:
            await eliminarMascota();
            break;
        case 7:
            await verMascota();
            break;
        case 8:
            return 8;
        default:
            alert("Por favor ingrese una opcion correcta.");
    };

    return menu;
};

let duenos = [];
let idGenerico = 1000

function mostrarId(id) {
    setTimeout(() => {
        alert(`Usuario registrado con exito. \n Su ID es: ${id} \n (Se necesita para registrar una mascota a su nombre)`)
    }, 1500);
};

function registrarDueno(callback) {
    let id, nombre, cedula, telefono, correo;

    do {
        nombre = prompt("Ingrese su nombre y apellido.");
        if(!nombre) alert("El nombre no puede estar vacio.")
    } while(!nombre);
    

     do {
        cedula = prompt("Ingrese su cédula.");
        if (!cedula || isNaN(cedula)) alert("La cédula debe ser un número.");
    } while (!cedula || isNaN(cedula));

    do {
        telefono = prompt("Ingrese su número telefónico.");
        if (!telefono || isNaN(telefono)) alert("El teléfono debe ser un número.");
    } while (!telefono || isNaN(telefono));

    do {
        correo = prompt("Ingrese su correo electrónico.");
        if (!correo || !correo.includes('@')) alert("Ingrese un correo válido.");
    } while (!correo || !correo.includes('@'));

    duenos.push({ID: id, Nombre: nombre, Cedula: cedula, Telefono: telefono, Correo: correo})
    // console.log(duenos);
    callback(id);
    //Hacer un alert que muestre el ID que se le genero y crear el objeto o diccionario en donde se van a guardar 
};

// registrarDueno(mostrarId);

let mascotas = [];
let idGenericoMascotas = 100;

function validacionDueno(id, idmascota) {
    setTimeout(() => {
        alert(`Registro de mascota exitoso, Dueno con ID: ${id} si existe. \n ID de la mascota: ${idmascota} \n (Se necesita para actualizar el estado de salud de su mascota)`);
    }, 2000);
}
function registrarMascota(callback) {
    let nombre, especie, edad, peso, estadoSalud, idDueno;
    const especiesPermitidas = ['Perro', 'Gato', 'Ave', 'Reptil', 'Otro'];
    const estadosPermitidos = ['Sano', 'Enfermo', 'En tratamiento'];

    do {
        nombre = prompt("Ingrese el nombre de su mascota.");
        if (!nombre) alert("El nombre no puede estar vacío.");
    } while (!nombre);

    do {
        especie = prompt("Ingrese la especie de su mascota (Perro, Gato, Ave, Reptil, Otro).");
        if (!especiesPermitidas.includes(especie)) alert("Especie no válida.");
    } while (!especiesPermitidas.includes(especie));

    do {
        edad = prompt("Ingrese la edad de su mascota en años.");
        if (!edad || isNaN(edad) || edad <= 0) alert("Edad debe ser un número positivo.");
    } while (!edad || isNaN(edad) || edad <= 0);

    do {
        peso = prompt("Ingrese el peso (Kg) de su mascota.");
        if (!peso || isNaN(peso) || peso <= 0) alert("Peso debe ser un número positivo.");
    } while (!peso || isNaN(peso) || peso <= 0);

    do {
        estadoSalud = prompt("Ingrese el estado de salud de su mascota (Sano, Enfermo, En tratamiento).");
        if (!estadosPermitidos.includes(estadoSalud)) alert("Estado de salud no válido.");
    } while (!estadosPermitidos.includes(estadoSalud));

    let duenoExistente;
    do {
        idDueno = prompt("Ingrese el ID del dueño.");
        duenoExistente = duenos.find(d => d.ID == idDueno);
        if (!duenoExistente) alert("No existe un dueño con ese ID.");
    } while (!duenoExistente);

    let idMascotas = idGenericoMascotas++;

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
    return new Promise((resolve, reject) => {
        let mascotaBuscada = prompt("Ingrese el nombre de su mascota.");
        
        if (!mascotaBuscada) {
            reject("No se ingresó ningún nombre");
            return;
        }

        setTimeout(() => {
            let busqueda = mascotas.find(p => p.Nombre == mascotaBuscada);
        
            if (busqueda) {
                console.table(busqueda);
                resolve(busqueda);
            } else {
                reject(`No se encontró la mascota con nombre "${mascotaBuscada}"`);
            }
        }, 1500)
        
    });
}

// buscarMascota();

async function actualizarMascota() {
    let idBusqueda = prompt("Ingrese el ID de su mascota.");
    let mascotaAct = mascotas.find(p => p.id ==idBusqueda);

    if (!mascotaAct) {
        alert("No se encontró mascota con ese ID.");
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (mascotaAct) {
        if (EstadoDeSalud == "Enfermo") {
            mascotas.EstadoDeSalud = "En tratamiento";
            alert("Ahora su mascota se encuentra en tratamiento.");
        }else if (EstadoDeSalud == "En tratamiento") {
            mascotas.EstadoDeSalud = "Sano";
            alert("Ahora su mascota se encuentra sana.");
        }else{
            alert(`Su mascota se encuentra ${mascotaAct.EstadoDeSalud}`)
        }
    };
};

function eliminarMascota() {
    return new Promise((resolve) => {
        let mascotaEliminar = prompt("Ingrese el nombre de la mascota a eliminar:");

        if (!mascotaEliminar) {
            alert("No se ingresó ningún nombre.");
            resolve(false);
            return;
        }

        setTimeout(() => {
            let indice = mascotas.findIndex(p => p.Nombre.toLowerCase() === mascotaEliminar.toLowerCase());

            if (indice === -1) {
                alert(`No se encontró una mascota con el nombre "${mascotaEliminar}".`);
                resolve(false);
                return;
            }

            const confirmacion = confirm(`¿Está seguro de eliminar a "${mascotaEliminar}"?`);

            if (confirmacion) {
                let mascotaEliminada = mascotas.splice(indice, 1)[0];
                console.log("Mascota eliminada:", mascotaEliminada);
                alert(`"${mascotaEliminada.Nombre}" fue eliminado/a con éxito.`);
                resolve(true);
            } else {
                alert("Eliminación cancelada.");
                resolve(false);
            }
        }, 2000);
    });
}

async function verMascota() {
    let idBuscado = Number(prompt("Ingrese su ID."));
    await new Promise(resolve => setTimeout(resolve, 2000));
    const busqueda = mascotas.find(p => p.IDdueno == idBuscado);
    if (mascotasDueno.length > 0) {
        console.table(mascotasDueno);
    } else {
        alert("No se encontraron mascotas para este dueño.");
    }
};

main();
