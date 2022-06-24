console.log ("¡Hola programador! 🙂");

const formulario = document.getElementById('formulario')
const input=document.getElementById('input')
const listaTarea = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

let tareas = {}


listaTarea.addEventListener('click', e => {
    btnAccion(e)
})


formulario.addEventListener('submit', e =>{
    e.preventDefault()

    // Diferentes maneras de traernos el input que escriba el usuario:
        // console.log(e.target[0].value)
        // console.log(e.target.querySelector('input').value)
        // console.log(input.value)

    setTarea(e)
})

const setTarea = e =>{

    //Comprobamos que el usuario haya introducido algo
    if (input.value.trim() === "")
    {
        console.log('está vacío')
        return // el return hace que se sakga de la función y no continúe
    }
  
    //Si hay algo en el input, creanmos la tarea
    //Creamos el objeto tarea

    const tarea={
        id: Date.now(), //truco para asignar id: asignamos la hora. Trabajando con BBDD este nº ya estaría asignado
        texto: input.value,
        estado: false // por defecto va a ser false
    }

    //Añadimos el objeto creado al array tareas utilizando como indice el id creado anteriormente
    //De esta manera no hay que recorrer el array
    tareas[tarea.id] = tarea

    //reseteamos campo input
    formulario.reset()
    input.focus()

    pintarTareas()
}

const pintarTareas = () => {
    listaTarea.innerHTML =""
    Object.values(tareas).forEach(tarea => {
        //Primero hay que clonar el template. Con "true" clona todo lo que hay en el interior
        const clone = template.cloneNode(true)
        //Ahora modificamos el clon
        clone.querySelector("p").textContent = tarea.texto
        fragment.appendChild(clone)

    })
    listaTarea.appendChild(fragment) 
   
}

const btnAccion = e => {
    //console.log(e.target.classList.contains('fa-circle-check'))
    if (e.target.classList.contains('fa-circle-check')){
        
    }
    e.stopPropagation()
}


