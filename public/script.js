const elementDraggable = document.querySelector('.kp_window--container');
const elementChangeDraggable = document.querySelector('.kp_window--title-zone');
const elementFullScreen = document.querySelector('.kp_animation_full-screen');
const resizeHandle = document.querySelector('.resize-handle');
const elementImageText = document.querySelector('.kp_text');
let isDragging = false, isFullScreen = false, isResizing = false;
let offsetX, offsetY, startX, startY, startWidth, startHeight;
let initialState = { width: '', height: '', left: '', top: '' };


const updateInitialState = () => {
  initialState.width = elementDraggable.offsetWidth + 'px';
  initialState.height = elementDraggable.offsetHeight + 'px';
  initialState.left = elementDraggable.style.left;
  initialState.top = elementDraggable.style.top;
  elementDraggable.offsetY = elementDraggable.offsetY < 0 ? 0 : elementDraggable.offsetY;
  elementDraggable.style.top = `${elementDraggable.offsetY}px`;
};
const addClass = (element, className) => {
  element.classList.add(className);
};
const removeClass = (element, className) => {
  element.classList.remove(className);
};
const handleMouseDownDrag = (e) => {
  addClass(elementChangeDraggable, 'kp_iframe--container_movement');
  document.body.style.cursor = 'grabbing';
  if (!isFullScreen && !isResizing) {
    isDragging = true;
    const rect = elementDraggable.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  }
};
const handleMouseMoveDrag = (e) => {
  if (isDragging) {
    const maxTop = 0;
    const newLeft = e.clientX - offsetX;
    const newTop = e.clientY - offsetY;
    if (newTop < maxTop) {
      elementDraggable.style.top = maxTop + 'px';
    }
    elementDraggable.style.left = newLeft + 'px';
    elementDraggable.style.top = newTop + 'px';
    if (newTop <= 0) {
      addClass(elementDraggable, 'kp_iframe--container_full');
      addClass(elementFullScreen, 'kp_window_isfullscreen');
    } else {
      removeClass(elementDraggable, 'kp_iframe--container_full');
      removeClass(elementFullScreen, 'kp_window_isfullscreen');
    }
  }
};
const handleMouseUpDrag = () => {
  isDragging = false;
  removeClass(elementChangeDraggable, 'kp_iframe--container_movement');
  document.body.style.cursor = 'default';
};
const handleMouseDownResize = (e) => {
  e.preventDefault();
  isResizing = true;
  startX = e.clientX;
  startY = e.clientY;
  startWidth = elementDraggable.offsetWidth;
  startHeight = elementDraggable.offsetHeight;
  addClass(resizeHandle, 'kp_while_resizing');
};
const handleMouseMoveResize = (e) => {
  if (isResizing) {
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    const newWidth = startWidth + deltaX;
    const newHeight = startHeight + deltaY;
    elementDraggable.style.width = `${newWidth - 10}px`;
    elementDraggable.style.height = `${newHeight - 50}px`;
  }
};
const handleMouseUpResize = () => {
  isResizing = false;
  removeClass(resizeHandle, 'kp_while_resizing');
};
elementChangeDraggable.addEventListener('mousedown', handleMouseDownDrag);
document.addEventListener('mousemove', handleMouseMoveDrag);
document.addEventListener('mouseup', handleMouseUpDrag);

resizeHandle.addEventListener('mousedown', handleMouseDownResize);
document.addEventListener('mousemove', handleMouseMoveResize);
document.addEventListener('mouseup', handleMouseUpResize);

updateInitialState();

let clicCount = 0;
let clicTimer;
function onDoubleClick() { 
    const classeRecherchee = 'kp_iframe--container_full';
    if (elementDraggable.classList.contains(classeRecherchee)) {
      removeClass(elementDraggable, 'kp_iframe--container_full');
    } else {
      addClass(elementDraggable, 'kp_iframe--container_full');
    }
    clicCount = 0;
}
function onSingleClick() {
}
function handleClic() {
    clicCount++;
    if (clicCount === 1) {
        clicTimer = setTimeout(function() {
            clicCount = 0;
            onSingleClick();
        }, 300);
    } else if (clicCount === 2) {
        clearTimeout(clicTimer);
        clicCount = 0; 
        onDoubleClick();
    }
}
document.querySelector(".kp_window--title-zone").addEventListener("click", handleClic);

function clickResizeWindow(){
  const classeRecherchee = 'kp_iframe--container_full';
  if (elementDraggable.classList.contains(classeRecherchee)) {
    removeClass(elementDraggable, 'kp_iframe--container_full');
  } else {
    addClass(elementDraggable, 'kp_iframe--container_full');
  }
}
document.querySelector(".kp_icon--resize-browser").addEventListener("click", clickResizeWindow);


// document.querySelector('.kp_full_screen').addEventListener('click', function() {
//   if (!document.fullscreenElement) {
//     document.documentElement.requestFullscreen().then(function() {
//       isFullScreen = true;
//     }).catch(function(err) {
//       console.error('Erreur lors de la bascule en mode plein écran:', err);
//     });
//   } else {
//     document.exitFullscreen().then(function() {
//       isFullScreen = false;
//     }).catch(function(err) {
//       console.error('Erreur lors de la sortie du mode plein écran:', err);
//     });
//   }
// });

/* ----------------------------------------------------------------------------------- */
/* Gestion des actions sur les éléments */
function actionSurElement(event) {
  const id = event.currentTarget.id;
  const parts = id.split('--').slice(1);
  if (parts.length === 2) {
    const action = parts[0];
    const target = parts[1];
    console.log(action + " + " + target);
    const elementCibleId = `kp_${target}`;
    const elementCible = document.getElementById(elementCibleId);

    if (elementCible) {
      switch (action) {
        case 'reduct':
          elementCible.classList.toggle('kp_element--action--reduct');
          break;
        case 'resize':
          elementCible.classList.toggle('kp_element--action--resize');
          break;
        case 'close':
          elementCible.classList.toggle('kp_element--action--close');
          break;
        default:
          console.log('l\'action est inconnue');
      }
    } else {
      console.error('Élément cible non trouvé:', elementCibleId);
    }
  } else {
    console.error('ID de l\'élément non structuré comme prévu.');
  }
}
document.querySelectorAll('.kp_icon_zone').forEach((element) => {
  element.addEventListener('mousedown', actionSurElement);
});


/* ----------------------------------------------------------------------------------- */

function fermerProjet(){
  removeClass(elementDraggable, 'kp_iframe--show');
  document.querySelector(".kp_barre-une-app--browser").classList.remove('kp_barre-une-app--show');
}
document.querySelector(".kp_icon--close-browser").addEventListener("click", fermerProjet);

function reduireProjet(){
  removeClass(elementDraggable, 'kp_iframe--show');
}
document.querySelector(".kp_icon--reduct-browser").addEventListener("click", reduireProjet);

function ouvrirProjet(){
  let zindex = getHighestZIndex();
  elementDraggable.style.zIndex = zindex + 1;
  addClass(elementDraggable, 'kp_iframe--show');
  document.querySelector(".kp_barre-une-app--browser").classList.add('kp_barre-une-app--show');
}
document.querySelector(".kp_folder--projets").addEventListener("click", ouvrirProjet);
document.querySelector(".kp_barre-une-app--browser").addEventListener("click", ouvrirProjet);

/* ------------------------------ */

function fermerDescriptionProjet(){
  addClass(document.querySelector(".kp_un-projet"), 'kp_un-projet--hide');
  removeClass(document.querySelector(".kp_information-projet"), 'kp_information-projet--hide');
  addClass(document.querySelector(".kp_information-projet"), 'kp_information-projet--show');
  removeClass(document.querySelector(".kp_un-projet"), 'kp_un-projet--show');
}
document.querySelector(".kp_un-projet--close").addEventListener("click", fermerDescriptionProjet);

function ouvrirDescriptionProjet(){
  removeClass(document.querySelector(".kp_un-projet"), 'kp_un-projet--hide');
  addClass(document.querySelector(".kp_information-projet"), 'kp_information-projet--hide');
  removeClass(document.querySelector(".kp_information-projet"), 'kp_information-projet--show');
  addClass(document.querySelector(".kp_un-projet"), 'kp_un-projet--show');
  
}
document.querySelector(".kp_information-projet").addEventListener("click", ouvrirDescriptionProjet);

/* ----------------------------------------------------------------------------------- */

function ouvrirText(){
  addClass(elementImageText, 'kp_image-text--show');
}
document.querySelector(".kp_folder--img-txt").addEventListener("click", ouvrirText);



function fermerText(){
  document.querySelector(".kp_barre-une-app--text").classList.remove('kp_barre-une-app--show');
  document.querySelector("#kp_text").classList.remove('kp_text--show');
}
document.querySelector(".kp_icon--close-text").addEventListener("click", fermerText);

function reduireText(){
  document.querySelector("#kp_text").classList.remove('kp_text--show');
}
document.querySelector(".kp_icon--reduct-text").addEventListener("click", reduireText);

function ouvrirText(){
  let zindex = getHighestZIndex();
  document.querySelector("#kp_text").style.zIndex = zindex + 1;
  document.querySelector(".kp_barre-une-app--text").classList.add('kp_barre-une-app--show');
  document.querySelector("#kp_text").classList.add('kp_text--show');
}
document.querySelector(".kp_folder--text").addEventListener("click", ouvrirText);

document.querySelector(".kp_barre-une-app--text").addEventListener("click", ouvrirText);
document.querySelector(".kp_icon--close-text").addEventListener("click", fermerText);

/* ----------------------------------------------------------------------------------- */
let terminalCharge = true;
function fermerTerminal(){
  document.querySelector(".kp_barre-une-app--terminal").classList.remove('kp_barre-une-app--show');
  document.querySelector("#kp_terminal").classList.remove('kp_terminal--show');
  
  terminalCharge = false;
}
document.querySelector(".kp_icon--close-terminal").addEventListener("click", fermerTerminal);

function reduireTerminal(){
  document.querySelector("#kp_terminal").classList.remove('kp_terminal--show');
}
document.querySelector(".kp_icon--reduct-terminal").addEventListener("click", reduireTerminal);

function ouvrirTerminal(){
  let zindex = getHighestZIndex();
  document.querySelector("#kp_terminal").style.zIndex = zindex + 1;
  document.querySelector(".kp_barre-une-app--terminal").classList.add('kp_barre-une-app--show');
  document.querySelector("#kp_terminal").classList.add('kp_terminal--show');
  terminalCharge ? terminalCharge = true : ecrireTexte ; 
}
document.querySelector(".kp_folder--terminal").addEventListener("click", ouvrirTerminal);

document.querySelector(".kp_barre-une-app--terminal").addEventListener("click", ouvrirTerminal);
document.querySelector(".kp_icon--close-terminal").addEventListener("click", fermerTerminal);

/* ----------------------------------------------------------------------------------- */


/* ---------------------------------------------------------- */
const optionsHeure = { hour: '2-digit', minute: '2-digit' };
const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };

function mettreAJourHeureEtDate() {
  const maintenant = new Date();
  const heureFormatee = maintenant.toLocaleString('fr-FR', optionsHeure);
  const dateFormatee = maintenant.toLocaleString('fr-FR', optionsDate);

  document.querySelector('.kp_date-heure--heure').textContent = heureFormatee;
  document.querySelector('.kp_date-heure--date').textContent = dateFormatee;
}
mettreAJourHeureEtDate();
setInterval(mettreAJourHeureEtDate, 1000);

/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
function ecrireTexte() {
  const container = document.querySelector('.kp_terminal--texte');
  const texteAAnimer = " ===================  <br/>  =>  Qui suis-je ?  <=  <br/>  ===================  <br/>  <br/>  Avec une solide expérience de plus de 10 ans dans le développement web, ma passion pour le multimédia et les évolutions technologiques a été le moteur de ma carrière.<br/><br/>  Spécialiste en création et optimisation de solutions web, je suis constamment à la recherche des dernières innovations pour apporter des réponses créatives et efficaces aux défis qui me sont proposés.  <br/> <br/>Mon parcours m'a permis de développer une expertise approfondie et une excellente capacité d'analyse des solutions visuelles, des langages de programmation et des outils de développement, me positionnant comme un acteur clé dans la transformation numérique des entreprises.<br/><br/>  En tant que responsable au sein du groupe Cybertek de la Cellule Créative, regroupant les services de webdesign, motion-design, graphisme, intégration et développement front-end, j'ai affiné ma maîtrise en gestion d'équipe pour piloter des projets novateurs avec succès et pour stimuler l'engagement de mon équipe vers la réalisation de nos ambitions partagées.<br/><br/>Mon approche, centrée sur la collaboration et l'innovation, favorise un environnement avec lequel la créativité et la technologie convergent vers un objectif commun.<br/><br/>Dynamique et motivé, je suis toujours prêt à explorer de nouveaux horizons et à relever de nouveaux défis.<span class='kp_terminal-ecriture'></span>";
  container.innerHTML = "";
  let index = 0;
  let enBalise = false;
  let textePourBalise = "";

  function ajouterCaractere() {
    if (index < texteAAnimer.length) {
      let char = texteAAnimer[index];
      if (enBalise) {
        textePourBalise += char;
        if (char === ">") {
          container.innerHTML += textePourBalise;
          textePourBalise = "";
          enBalise = false;
        }
      } else {
        if (char === "<") {
          enBalise = true;
          textePourBalise = char;
        } else {
          container.innerHTML += char;
        }
      }
      index++;
      let delai = enBalise ? 0 : Math.random() * (10 - 0);
      setTimeout(ajouterCaractere, delai);
    }
  }
  ajouterCaractere();
}
window.animerTexteTerminal = ecrireTexte;


/* ---------------------------------------------------------- */
function getHighestZIndex() {
  const elements = document.querySelectorAll('.kp_z-index');
  let highest = 0;
  elements.forEach((element) => {
    const zIndex = parseInt(window.getComputedStyle(element).zIndex, 10);
    if (!isNaN(zIndex) && zIndex > highest) {
      highest = zIndex;
    }
  });
  return highest;
}
function handleMouseDown(event) {
  const highestZIndex = getHighestZIndex();
  event.currentTarget.style.zIndex = highestZIndex + 1;
}
document.querySelectorAll('.kp_z-index').forEach((element) => {
  element.addEventListener('mousedown', handleMouseDown);
});


/* ---------------------------------------------------------- */
document.querySelector('.kp_projet-btn--1').classList.add('kp_projet-btn--hover');

const boutonsProjet = document.querySelectorAll('.kp_projet-btn');
function retirerClasseHover() {
  boutonsProjet.forEach(bouton => {
    bouton.classList.remove('kp_projet-btn--hover');
  });
}

boutonsProjet.forEach(bouton => {
  bouton.addEventListener('click', function(event) {
    retirerClasseHover();
    event.currentTarget.classList.add('kp_projet-btn--hover');
  });
});
