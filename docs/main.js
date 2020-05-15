function openLinkGitHub() {
  window.open("https://github.com/shari12");
}

function openLinkenid() {
  window.open("https://www.linkedin.com/in/sharida-perez-8783331a7/");
}

function openEmail() {
  window.open("mailto:perezdsharida@gmail.com");
}

const btnGitHub = document.querySelector("#imgGitHub");
btnGitHub.addEventListener("click", () => {
  openLinkGitHub();
});
const gitHub = document.querySelector("#userGitHub");
gitHub.addEventListener("click", () => {
  openLinkGitHub();
});

const btnLinkenid = document.querySelector("#imgLinkenid");
btnLinkenid.addEventListener("click", () => {
  openLinkenid();
});

const linkenid = document.querySelector("#profileLinkenid");
linkenid.addEventListener("click", () => {
  openLinkenid();
});
const btnGmail = document.querySelector("#imgGmail");
btnGmail.addEventListener("click", () => {
  openEmail();
});

const email = document.querySelector("#email");
email.addEventListener("click", () => {
  openEmail();
});

const btnTech = document.querySelector("#btTech");
const btnSoft = document.querySelector("#btSoft");
const btnProjets = document.querySelector("#btProjet");
const titleT = document.getElementById("title");
const title = document.createElement("h1");

btnTech.addEventListener("click", () => {
  title.innerHTML = "Technical Skills";
  titleT.appendChild(title);
  const divTech = document.getElementById("divRoot");
  const techSkils = `<div class = "tech">
  <div class ="basico">
  <h1>Básico</h1>
  <br/>
  <img id ="git" src="img/git.svg"/>
  <img id ="fire" src ="img/fire.svg"/>
  <img id ="my" src ="img/mysql.svg"/>
  <img id ="tre" src ="img/trello.svg"/>

  </div>
  <div class="inter"> 
  <h1>Intermedio</h1>
  <img id ="js" src="img/js.svg"/>
  <img id ="html" src ="img/html.svg"/>
  <img id ="css" src ="img/css.svg"/>
  <img id ="figma" src ="img/figma.svg"/>
  </div>
  </div>`;
  divTech.innerHTML = techSkils;
});

btnSoft.addEventListener("click", () => {
    
  title.innerHTML = "Soft Skills";
  const divSoft = document.getElementById("divRoot");
  titleT.appendChild(title);
  const softSkils = `
  <div class = "soft">
  <div class ="basico1">
    <br/>
    <p class="line-1 anim-typewriter">• Puntual</p>
    <p class="line-1 anim-typewriter">• Disciplina</p>
    <p class="line-1 anim-typewriter">• Colaboración</p>
    <p class="line-1 anim-typewriter">• Organización</p>
    <p class="line-1 anim-typewriter">• Trabajo remoto</p>
  

  </div>
  <div class="inter1"> 
  <br/>
  <p class="line-1 anim-typewriter">• Trabajo en equipo</p>
  <p class="line-1 anim-typewriter">• Buena comunicación</p>
  <p class="line-1 anim-typewriter">• Capacidad de análisis</p>
  <p class="line-1 anim-typewriter">• Priorización de tareas</p>
  <p class="line-1 anim-typewriter">• Atención a los detalles</p>
  
  
  </div>
  </div>
 
  `;
  
  divSoft.innerHTML = softSkils;
});

btnProjets.addEventListener("click", () => {
  title.innerHTML = "Proyectos";
  titleT.appendChild(title);
  const divProjet = document.getElementById("divRoot");
  const cardsP = `
    <div class="card">
    <img src="http://i.picasion.com/pic90/d0e3aaca9a821aa3a58703e6fefa4b56.gif"  width="300" height="217"/> 
    <h2>estuDIA</h2>
    <p>App que permite compartir cualquier herramienta que 
    consideren útil para prepararse en su examen de admisión;
    está dirigida a cualquier persona que tenga el interés 
    de ingresar a nivel superior en el IPN.</p>
    <p>Tecnología utilizada: HTML5, CSS3, JS, Firebase.
</p> 
  </div>
  <div class="card">
    <img src="http://i.picasion.com/pic90/b8743bb2ba19d5c943b3c214d103c947.gif" width="300" height="170"/>
    <h2>Data Lovers</h2>
    <p>Data digital que facilita la consulta de información
    de los Pokemons que hay en la región “Kanto”, clasifica en tipo de pokemon 
    y debilidad que estos tienen, también muestra cuantos dulces necesita 
    para poder evolucionar y podemos visualizar las características 
    específicas de cualquier Pokemon que pertenezca a esta región. </p>
    <p>Tecnología utilizada: HTML5, CSS3, JS.
</p>
  </div>
</div>
`;
  divProjet.innerHTML = cardsP;
});
