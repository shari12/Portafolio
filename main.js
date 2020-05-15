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
  const techSkils = `<h1>Aqui pondre mis habilidades tec :P</h1>`;
  divTech.innerHTML = techSkils;
});

btnSoft.addEventListener("click", () => {
    
  title.innerHTML = "Soft Skills";
  const divSoft = document.getElementById("divRoot");
  titleT.appendChild(title);
  const softSkils = `<div class="card">
  <p class="line-1 anim-typewriter">• Puntual</p>
  <p class="line-1 anim-typewriter">• Disciplina</p>
  <p class="line-1 anim-typewriter">• Organización</p>
  <p class="line-1 anim-typewriter">• Colaboración</p>
  <p class="line-1 anim-typewriter">• Trabajo remoto</p>
  <p class="line-1 anim-typewriter">• Trabajo en equipo</p>
  <p class="line-1 anim-typewriter">• Buena comunicación</p>
  <p class="line-1 anim-typewriter">• Atención a clientes</p>
  <p class="line-1 anim-typewriter">• Capacidad de análisis</p>
  <p class="line-1 anim-typewriter">• Priorización de tareas</p>
  <p class="line-1 anim-typewriter">• Atención a los detalles</p>
  <p class="line-1 anim-typewriter">• Capacidad de autoformación</p>
</div>`;
  divSoft.innerHTML = softSkils;
});

btnProjets.addEventListener("click", () => {
  title.innerHTML = "Proyectos";
  titleT.appendChild(title);
  const divProjet = document.getElementById("divRoot");
  const cardsP = `
    <div class="card">
    <img src="http://i.picasion.com/pic90/46057b25552d903ce88bc9e95a98ca83.gif" width="300" height="217"/> 
    <h2>estuDIA</h2>
    <p>App que permite compartir cualquier herramienta que 
      consideren util para prepararse en su examen de admision;
      esta dirigida a cualquier persona  que tenga el interés 
      de ingresar a nivel superior en el IPN.</p>
      <p>Tecnología utilizada: HTML5, CSS3, JS, Firebase.</p> 
  </div>
  <div class="card">
    <img src="http://i.picasion.com/pic90/b8743bb2ba19d5c943b3c214d103c947.gif" width="300" height="170">
    <h2>Data Lovers</h2>
    <p>Data digital que facilita la consulta de informacion
    de los Pokemons que hay en la Region Kanto, clasifica en tipo de pokemon 
    y debilidad que estos tienen, tambien muestra cuantos dulces necesita 
    para poder evolucionar y podemos visualizar las caracteristicas 
    especificas de cualquier Pokemon que pertenezca a esta region.</p>
    <p>Tecnología utilizada: HTML5, CSS3, JS. </p>
  </div>
</div>
`;
  divProjet.innerHTML = cardsP;
});
