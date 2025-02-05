// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    // Validación: Si el campo está vacío, mostrar un mensaje de alerta
    if (!nombre) {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    // Si el nombre no está vacío y no se repite, se añade a la lista
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarListaAmigos();
    } else {
        alert('Este nombre ya está en la lista');
    }
    
    // Limpiar el campo de entrada
    input.value = '';
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para hacer el sorteo.');
        return;
    }

    // Seleccionar un amigo aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Ocultar la lista de amigos después de sortear
    ocultarListaAmigos();

    // Mostrar el nombre aleatorio del amigo secreto
    mostrarAmigoSeleccionado(amigoSeleccionado);
}

// Función para mostrar el nombre del amigo secreto
function mostrarAmigoSeleccionado(amigo) {
    const resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = ''; // Limpiar resultados anteriores

    const li = document.createElement('li');
    li.textContent = `¡Tu amigo secreto es: ${amigo}!`;
    resultadoUl.appendChild(li);
}

// Función para ocultar la lista de amigos
function ocultarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.style.display = 'none'; // Ocultar la lista de amigos
}
