let infoCV = [
  {
    index: "1",
    infoPerfil: {
      photoURL: "/photo.jpg",
      nombre: "Alejandro Garcia Estrella",
      profesion: "Ingeniero Industrial",
      direccion: ["Calle 50 # 39-27", "Torre 1", "Apt 503"],
      celular: "311 762 4941",
      email: "alejogarciaes@gmail.com",
      perfil: {
        titulo: "PERFIL",
        contenido:
          "Soy una persona creativa con buena capacidad de liderazgo y trabajo en equipo, en ánimo de mejorar procesos con ética y eficacia. Con gran capacidad para el análisis y proactividad. Con alto grado de responsabilidad ambiental y social",
      },
      experiencia: [
        {
          visible: true,
          nombre: "INGENIERO DE PLANTA",
          empresa: "COMERCIALIZADORA KUNA S.A.S",
          inicio: "Agosto 2021",
          fin: "Febrero 2022",
          ubicacion: "LA ESTRELLA - COLOMBIA",
          descripcion:
            "Se desempeñaron labores de mejoramiento en el área de producción, estudios de eficiencia, y se construyó el sistema de información de producción para mejorar la trazabilidad de los productos de la línea de filamentos.",
          jefe: "Jannet Contreras",
          contacto: "314 794 1523",
        },
        {
          visible: true,
          nombre: "JEFE DE ASISTENCIA COMERCIAL",
          empresa: "IE CONSULTORES",
          imicio: "Agosto 2020",
          fin: "Enero 2021",
          ubicacion: "ARMENIA - COLOMBIA",
          descripcion:
            "Promoción, venta y captura de proveedores. Se gestionaron recursos, levantaron procesos del área de compras y se interactuó con los clientes.",
          jefe: "Fernando Torres",
          contacto: "314 304 0177",
        },
        {
          visible: true,
          nombre: "APRENDIZ DE INGENIERÍA",
          empresa: "LÁCTEOS EL ZARZAL",
          imicio: "Agosto 2019",
          fin: "Enero 2021",
          ubicacion: "BELLO - COLOMBIA",
          descripcion:
            "Se desarrollaron labores de apoyo a la gerencia de planta y se hizo parte en la identificación de retos organizacionales en la búsqueda de un sistema de gestión integrado en una empresa orientada a la fabricación y manejo de alimentos.",
          jefe: "Joan Rodríguez Días",
          contacto: "312 871 0872",
        },
        {
          visible: false,
          nombre: "",
          empresa: "",
          imicio: "",
          fin: "",
          ubicacion: "",
          descripcion: "",
          jefe: "",
          contacto: "",
        },
      ],
      educacion: [
        {
          visible: true,
          nombre: "INGENIERO INDUSTRIAL",
          institucion: "UNIVERSIDAD NACIONAL DE COLOMBIA - SEDE MEDELLÍN",
          fin: "Febrero 2020",
        },
        {
          visible: false,
          nombre: "",
          institucion: "",
          fin: "",
        },
      ],
      cursos: [
        {
          visible: true,
          nombre: "Responsive Web Desing",
          institucion: "FreeCodeCamp.org",
          fin: "Junio 2021",
        },
        {
          visible: true,
          nombre: "Java Script Algoritms and Data Structures",
          institucion: "FreeCodeCamp.org",
          fin: "Junio 2021.",
        },
        {
          visible: true,
          nombre:
            "Managerial Accounting: Cost Behaviors, Systems, and Analysis",
          institucion: "Illinois University – Coursera",
          fin: "Junio 2020",
        },
        {
          visible: false,
          nombre: "",
          institucion: "",
          fin: "",
        },
      ],
      habilidades: [
        {
          visible: true,
          nombre: "Ingles",
          nivel: "B1",
        },
        {
          visible: true,
          nombre: "Excel",
          nivel: "Avanzada",
        },
        {
          visible: true,
          nombre: "PowerBI",
          nivel: "Intermedio",
        },
        {
          visible: true,
          nombre: "R",
          nivel: "Intermedio",
        },
        {
          visible: true,
          nombre: "SIMUL 8",
          nivel: "Intermedio",
        },
        {
          visible: false,
          nombre: "",
          nivel: "",
        },
        {
          visible: false,
          nombre: "",
          nivel: "",
        },
      ],
    },
  },
];

function mostrarPerfil() {
  console.log(infoCV);
  console.log(infoCV[0].infoPerfil);
  let foto = infoCV[0].infoPerfil.photoURL;
  let nombre = infoCV[0].infoPerfil.nombre;
  let profesion = infoCV[0].infoPerfil.profesion;
  let direccion = infoCV[0].infoPerfil.direccion;
  let celular = infoCV[0].infoPerfil.celular;
  let email = infoCV[0].infoPerfil.email;

  let perfil = document.getElementById("presentacion");
  let experiencia = document.getElementById("experiencia");
  let eduacion = document.getElementById("educacion");
  let cursos = document.getElementById("cursos");
  let habilidades = document.getElementById("habilidades");
  perfil.innerHTML = `
  <div class="cv"><h1>cv</h1></div>
  
  <div class="caja1 prueba"></div>
  
  <div class="caja2 prueba"><img  class ="foto-presentacion" src="photo.jpg"></div>
  
  <div class="caja1 prueba"></div>
  
  <div class="caja2 prueba">
    <div class = "centrarfuente">
      <h2>${nombre}</h2>
      <p>${profesion}</p>
      <p>${email}</p>
      <p>${direccion}</p>
      <p>${celular}</p>
    </div>
  </div>
  `;
  mostrarEducacion();
  mostrarExperiencia();
  mostrarCursos();
  mostrarHabilidades();
}

function mostrarExperiencia() {
  console.log(infoCV[0].infoPerfil.experiencia);
  let object = infoCV[0].infoPerfil.experiencia;

  experiencia.innerHTML = `
 
      <h3>EXPERIENCIA</h3>

  `;

  for (var i in object) {
    if (object[i].visible == true) {
      console.log(`${i}: ${object[i].visible}`);
      experiencia.innerHTML += `
      <h4>${object[i].nombre}</h4>
      <h5>${object[i].empresa}</h5>
      <p>${object[i].descripcion}</p>
      <p><i>${object[i].incio} - ${object[i].fin}</i></p>
      <p><i>${object[i].jefe} - telefono ${object[i].contacto}</i></p>
      <p><i>${object[i].ubicacion}<i></p>
      <br>
      
      `;
    }
  }
}

function mostrarEducacion() {
  console.log(infoCV[0].infoPerfil.educacion);
  let object = infoCV[0].infoPerfil.educacion;

  educacion.innerHTML = `
      <h3>EDUCACIÓN</h3>
 `;

  for (var i in object) {
    if (object[i].visible == true) {
      console.log(`${i}: ${object[i].visible}`);
      educacion.innerHTML += `

      <h4>${object[i].nombre}</h4>
      <h5>${object[i].institucion}</h5>
      <p><i>Fecha de finalazación ${object[i].fin}</i></p>
      <br>
      
      `;
    }
  }
}

function mostrarCursos() {
  console.log(infoCV[0].infoPerfil.cursos);
  let object = infoCV[0].infoPerfil.cursos;

  cursos.innerHTML = `
      <h3>CURSOS</h3>
 `;

  for (var i in object) {
    if (object[i].visible == true) {
      console.log(`${i}: ${object[i].visible}`);
      cursos.innerHTML += `

      <h4>${object[i].nombre}</h4>
      <h5>${object[i].institucion}</h5>
      <p><i>Fecha de finalazación ${object[i].fin}</i></p>
      <br>
      
      `;
    }
  }
}

function mostrarHabilidades() {
  console.log(infoCV[0].infoPerfil.habilidades);
  let object = infoCV[0].infoPerfil.habilidades;

  cursos.innerHTML = `
      <h3>HABILIDADES</h3>
 `;

  for (var i in object) {
    if (object[i].visible == true) {
      console.log(`${i}: ${object[i].visible}`);
      habilidades.innerHTML += `

      <h4>${object[i].nombre}</h4>
      <p><i>${object[i].nivel}</i></p>
      <br>
      
      `;
    }
  }
}

mostrarPerfil();
