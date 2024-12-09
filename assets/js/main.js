// Arreglo inicial de tareas
const tarea = [
];

// Elementos DOM
const ingresoTarea = document.getElementById("ingresoTarea");
const botonTarea = document.getElementById("botonTarea");
const listaTareas = document.getElementById("listaTareas");
const totalTarea = document.getElementById("totalTarea");
const tareaRealizada = document.getElementById("tareaRealizada");

// Función para renderizar las tareas
function escribirTareas() {
  listaTareas.innerHTML = ""; // Limpia la lista
  tarea.forEach((tarea) => {
    const li = document.createElement("li");
    li.className = tarea.realizada ? "realizada" : "";
    li.innerHTML = `
            <span>${tarea.description}</span>
            <div class="tarea-actions">
                <button onclick="tareaOk(${tarea.id})">Tarea Realizada </button>
                <button onclick="tareaEliminar(${tarea.id})">Eliminar</button>
            </div>
        `;
    listaTareas.appendChild(li);
  });

  // Actualizar contadores
  totalTarea.textContent = tarea.length;
  tareaRealizada.textContent = tarea.filter((tarea) => tarea.realizada).length;
}

// Función para agregar una tarea
function agregarTarea() {
  const description = ingresoTarea.value.trim();
  if (description === "") return;

  const nuevaTarea = {
    id: Date.now(),
    description,
    realizada: false,
  };
  tarea.push(nuevaTarea);
  ingresoTarea.value = "";
  escribirTareas
();
}

// Función para eliminar una tarea
function tareaEliminar(id) {
  const index = tarea.findIndex((tarea) => tarea.id === id);
  if (index !== -1) tarea.splice(index, 1);
  escribirTareas
();
}

// Función para cambiar el estado de una tarea
function tareaOk(id) {
  const tarea = tarea.find((tarea) => tarea.id === id);
  if (tarea) tarea.realizada = !tarea.realizada;
  escribirTareas
();
}

// Inicialización
botonTarea.addEventListener("click", agregarTarea);
escribirTareas();
