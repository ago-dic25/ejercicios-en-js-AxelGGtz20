var alumnos = [
  {nombre: "Carlos", apellido: "Manuel", matricula: 203040},
  {nombre: "Cesar", apellido: "Oziel", matricula: 102030},
  {nombre: "Regina", apellido: "Sosa", matricula: 112233},
  {nombre: "Diego", apellido: "Leonardo", matricula: 147345},
  {nombre: "Andrea", apellido: "Carolina", matricula: 111629},
  {nombre: "Mayela", apellido: "Mayte", matricula: 199820},
  {nombre: "Eder", apellido: "Abraham", matricula: 182324},
  {nombre: "Diego", apellido: "Villanueva", matricula: 200456},
  {nombre: "Naomi", apellido: "Michelle", matricula: 176522},
  {nombre: "Eder", apellido: "Abisai", matricula: 178882},
  {nombre: "Regina", apellido: "Dariela", matricula: 204976},
  {nombre: "Carlos", apellido: "Alejandro", matricula: 156677}
]

//hacer lo anterior pero que busque sin importar el elemento

let ul = document.getElementById("listaAlumnos");

function mostrarLista(lista) {
  ul.innerHTML = "";
  lista.forEach(function(alumno) {
    var li = document.createElement("li");
    li.textContent = `${alumno.nombre} ${alumno.apellido} ${alumno.matricula}`;
    ul.appendChild(li);
  });
}
mostrarLista(alumnos);

let boton = document.querySelector("button");
boton.onclick = function() {
  var filtro = document.getElementById("filtroAlumno").value.toLowerCase();
  var orden = document.getElementById("ordenAlumnos").value; //obtiene el valor del select

  var resultados = alumnos.filter(function(alumno) {
    return (
      alumno.nombre.toLowerCase().includes(filtro) ||
      alumno.apellido.toLowerCase().includes(filtro) ||
      alumno.matricula.toString().includes(filtro)
    );
  });

  //Ordenar resultados alfabéticamente por apellido
  resultados.sort(function(a, b) {
    if (orden === "asc") {
      return a.apellido.localeCompare(b.apellido); //A-Z
    } else {
      return b.apellido.localeCompare(a.apellido); //Z-A
    }
  });

  mostrarLista(resultados);
};
