/**
 * Programa: Amigo Secreto
 * Autor: Tu Nombre
 * Fecha de creación: Hoy
 * Descripción: Este programa simula un sorteo de amigo secreto
 *              donde cada participante recibe el nombre de la
 *              persona a quien debe regalar.
 */
function amigoSecreto() {
  // Array para almacenar los nombres de los participantes
  let nombres = [];

  // Crea un único div para mostrar los resultados
  let resultadosDiv = document.createElement("div");
  resultadosDiv.innerHTML = "<h2>Resultados del Sorteo</h2>";
  document.body.appendChild(resultadosDiv);

  /**
   * Agrega un nombre a la lista de nombres.
   * @param {string} nombre El nombre a agregar.
   */
  function agregarNombre(nombre) {
    if (nombres.includes(nombre)) {
      alert("Este nombre ya fue agregado.");
    } else {
      nombres.push(nombre);
      actualizarListaNombres();
    }
  }

  /**
   * Actualiza la lista de nombres en la página web.
   */
  function actualizarListaNombres() {
    let listaNombres = document.getElementById("listaNombres");
    listaNombres.innerHTML = "";
    for (let nombre of nombres) {
      let elementoLista = document.createElement("li");
      elementoLista.textContent = nombre;
      listaNombres.appendChild(elementoLista);
    }
  }

  /**
   * Agrega un nombre a la lista de nombres desde el campo de texto.
   */
  function agregarNombreDesdeInput() {
    let nombre = document.getElementById("nombre").value;
    if (typeof nombre === "string" && nombre.length > 0) {
      nombre =
        nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
      agregarNombre(nombre);
      document.getElementById("nombre").value = "";
      console.log("Nombre agregado: " + nombre); // Muestra un mensaje en la consola
      console.log("Lista de nombres: " + nombres); // Muestra el contenido del array
    } else {
      alert("Por favor, ingresa un nombre válido.");
    }
  }

  /**
   * Realiza el sorteo del amigo secreto.
   */
  function sortearAmigoSecreto() {
    if (nombres.length < 2) {
      alert("Debes agregar al menos dos nombres para realizar el sorteo.");
      return;
    }

    let nombresCopia = [...nombres];
    mezclarArray(nombresCopia); // Mezcla la lista de nombres

    let amigosSecretos = {};
    for (let i = 0; i < nombres.length; i++) {
      amigosSecretos[nombres[i]] =
        nombresCopia[i]; // Asigna los amigos secretos en orden
    }

    mostrarResultados(amigosSecretos);
  }

  /**
   * Mezcla los elementos de un array de forma aleatoria.
   * @param {array} array El array a mezclar.
   */
  function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  /**
   * Muestra los resultados del sorteo en la página web.
   * @param {object} amigosSecretos Un objeto con los nombres de los participantes y sus amigos secretos.
   */
  function mostrarResultados(amigosSecretos) {
    resultadosDiv.innerHTML = "<h2>Resultados del Sorteo</h2>"; // Limpia los resultados anteriores

    for (let nombre in amigosSecretos) {
      let amigoSecreto = amigosSecretos[nombre];
      resultadosDiv.innerHTML += `<p>${nombre} le regala a ${amigoSecreto}</p>`;
    }
  }

  // Asigna las funciones a los elementos del DOM
  window.agregarNombreDesdeInput = agregarNombreDesdeInput;
  window.sortearAmigoSecreto = sortearAmigoSecreto;
}

amigoSecreto(); // Llama a la función principal para inicializar el juego