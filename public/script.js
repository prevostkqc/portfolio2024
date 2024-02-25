// Sélection et initialisation
const elementChangeDraggables = document.querySelectorAll('.kp_element--title');
const elementFullScreen = document.querySelector('.kp_animation_full-screen');
const resizeHandles = document.querySelectorAll('.resize-handle');
const backHoverClick = document.querySelector('.kp_anti-hover--full');
let isDragging = false, isFullScreen = false, isResizing = false;
let offsetX, offsetY, startX, startY, startWidth, startHeight, lastX, lastY;;
let initialState = { width: '', height: '', left: '', top: '' };
let lastElementDragable = document.querySelector('.kp_animation_full-screen');

elementChangeDraggables.forEach(elementChangeDraggable => {
  elementChangeDraggable.addEventListener('mousedown', e => {
    const draggableElement = changedDragable(e);
    if (draggableElement) {
      handleMouseDownDrag(e, draggableElement, elementChangeDraggable);
    }
  });
});
const updateInitialState = (draggableElement) => {
  if (draggableElement) {
    initialState.width = draggableElement.offsetWidth + 'px';
    initialState.height = draggableElement.offsetHeight + 'px';
    initialState.left = draggableElement.style.left;
    initialState.top = draggableElement.style.top;
  }
};
const addClass = (element, className) => {
  element?.classList.add(className);
};
const removeClass = (element, className) => {
  element?.classList.remove(className);
};
const handleMouseDownDrag = (e, draggableElement, triggerElement) => {
  isDragging = true;
  offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
  offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
  addClass(lastElementDragable, 'kp_element--movement');
  document.body.style.cursor = 'grabbing';
};
const handleMouseMoveDrag = (e) => {
  elementDraggable = changedDragable(e);
  
  console.log(lastElementDragable);
  if (!isDragging) return;

  requestAnimationFrame(() => {
    if (!isDragging) return; 

    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;

    if (elementDraggable) {
      const newLeft = parseInt(lastElementDragable.style.left || 0, 10) + deltaX;
      const newTop = parseInt(lastElementDragable.style.top || 0, 10) + deltaY;
      
      lastElementDragable.style.left = `${newLeft}px`;
      lastElementDragable.style.top = `${newTop}px`;
    }
  });

  lastX = e.clientX;
  lastY = e.clientY;
};
const handleMouseUpDrag = (e) => {
  isDragging = false;
  
  removeClass(backHoverClick, 'kp_anti--show');
  removeClass(document.querySelector('.kp_element--enable'), 'kp_element--disable');
  
  document.body.style.cursor = 'default';
  elementChangeDraggables.forEach(lastElementDragable => {
      removeClass(lastElementDragable, 'kp_element--movement');
  });
};

resizeHandles.forEach(handle => {
  handle.addEventListener('mousedown', function(e) {
    e.preventDefault();

    let initialWidth = handle.parentElement.offsetWidth;
    let initialHeight = handle.parentElement.offsetHeight;
    let startX = e.clientX;
    let startY = e.clientY;

    function mouseMoveHandler(e) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      handle.parentElement.style.width = `${initialWidth + deltaX}px`;
      handle.parentElement.style.height = `${initialHeight + deltaY}px`;
    }

    function mouseUpHandler() {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
});

document.addEventListener('mouseup', handleMouseUpDrag);
let throttleTimeout = null;

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  if (throttleTimeout) return;

  throttleTimeout = setTimeout(() => {
    throttleTimeout = null;
    handleMouseMoveDrag(e);
  }, 100);
});

updateInitialState();

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const draggableElement = changedDragable(e);
  if (!draggableElement) return;

  const newLeft = e.clientX - offsetX;
  const newTop = Math.max(0, e.clientY - offsetY);
  draggableElement.style.left = `${newLeft}px`;
  draggableElement.style.top = `${newTop}px`;
  // La logique pour ajouter ou retirer des classes basée sur la position
  if (newTop <= 0) {
    addClass(draggableElement, 'kp_element--action--resize');
    addClass(elementFullScreen, 'kp_window_isfullscreen');
  } else {
    removeClass(draggableElement, 'kp_element--action--resize');
    removeClass(elementFullScreen, 'kp_window_isfullscreen');
  }
});
document.addEventListener('mouseup', () => {
  if (isDragging) {
    // Suppression de la classe de mouvement et réinitialisation de l'état de glissement
    elementChangeDraggables.forEach(elementChangeDraggable => {
      removeClass(lastElementDragable, 'kp_element--movement');
    });
    document.body.style.cursor = 'default';
    isDragging = false;
  }
});

let clicCount = 0;
let clicTimer;
function onDoubleClick(e) {
    const classeRecherchee = 'kp_element--action--resize';
    if (lastElementDragable.classList.contains(classeRecherchee)) {
      removeClass(lastElementDragable, 'kp_element--action--resize');
    } else {
      addClass(lastElementDragable, 'kp_element--action--resize');
    }
    clicCount = 0;
}
function onSingleClick() {
}
function handleClic(e) {
  elementDraggable = changedDragable(e);
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
document.querySelector(".kp_element--title").addEventListener("click", handleClic);

function changedDragable(e) {
  let dragrableTemp = e.target.closest('.kp_changed__id'); 

  if (dragrableTemp && dragrableTemp.id) {
    if (dragrableTemp.id === "kp_terminal" || dragrableTemp.id === "kp_browser" || dragrableTemp.id === "kp_text") {
      lastElementDragable = dragrableTemp;
      
      console.log(dragrableTemp);
    }
  }

  return dragrableTemp;
}

function clickResizeWindow(){
  const classeRecherchee = 'kp_element--action--resize';
  if (elementDraggable.classList.contains(classeRecherchee)) {
    removeClass(elementDraggable, 'kp_element--action--resize');
  } else {
    addClass(elementDraggable, 'kp_element--action--resize');
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
  removeClass(document.querySelector("#kp_iframe--container"), 'kp_iframe--show');
  removeClass(document.querySelector(".kp_barre-une-app--browser"), 'kp_barre-une-app--show');
}
document.querySelector(".kp_icon--close-browser").addEventListener("click", fermerProjet);

function reduireProjet(){
  removeClass(document.querySelector("#kp_iframe--container"), 'kp_iframe--show');
}
document.querySelector(".kp_icon--reduct-browser").addEventListener("click", reduireProjet);

function ouvrirProjet(){
  let zindex = getHighestZIndex();
  document.querySelector("#kp_iframe--container").style.zIndex = zindex + 1;  ;
  addClass(document.querySelector(".kp_barre-une-app--browser"), 'kp_barre-une-app--show');
  addClass(document.querySelector("#kp_iframe--container"), 'kp_iframe--show');
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

function fermerText(){
  removeClass(document.querySelector(".kp_barre-une-app--text"), 'kp_barre-une-app--show');
  removeClass(document.querySelector("#kp_text"), 'kp_text--show');
}
document.querySelector(".kp_icon--close-text").addEventListener("click", fermerText);

function reduireText(){
  removeClass(document.querySelector("#kp_text"), 'kp_text--show');
}
document.querySelector(".kp_icon--reduct-text").addEventListener("click", reduireText);

function ouvrirText(){
  let zindex = getHighestZIndex();
  document.querySelector("#kp_text").style.zIndex = zindex + 1;
  document.querySelector(".kp_barre-une-app--text").classList.add('kp_barre-une-app--show');
  addClass(document.querySelector("#kp_text"), 'kp_text--show');
  removeClass(document.querySelector("#kp_text"), 'kp_element--action--reduct');
}
document.querySelector(".kp_folder--text").addEventListener("click", ouvrirText);
document.querySelector(".kp_barre-une-app--text").addEventListener("click", ouvrirText);

document.querySelector(".kp_icon--close-text").addEventListener("click", fermerText);

/* ----------------------------------------------------------------------------------- */

function fermerProfil(){
  removeClass(document.querySelector(".kp_barre-une-app--profil"), 'kp_barre-une-app--show');
  removeClass(document.querySelector("#kp_profil"), 'kp_profil--show');
}
document.querySelector(".kp_icon--close-profil").addEventListener("click", fermerProfil);

function reduireProfil(){
  removeClass(document.querySelector("#kp_profil"), 'kp_profil--show');
}
document.querySelector(".kp_icon--reduct-profil").addEventListener("click", reduireProfil);

function ouvrirProfil(){
  let zindex = getHighestZIndex();
  document.querySelector("#kp_profil").style.zIndex = zindex + 1;
  document.querySelector(".kp_barre-une-app--profil").classList.add('kp_barre-une-app--show');
  addClass(document.querySelector("#kp_profil"), 'kp_profil--show');
  removeClass(document.querySelector("#kp_profil"), 'kp_element--action--reduct');
}
document.querySelector(".kp_menu__barre-etat--photo-container").addEventListener("click", ouvrirProfil);
document.querySelector(".kp_barre-une-app--profil").addEventListener("click", ouvrirProfil);

document.querySelector(".kp_icon--close-profil").addEventListener("click", fermerProfil);

/* ----------------------------------------------------------------------------------- */
let terminalCharge = true;
function fermerTerminal(){
  document.querySelector(".kp_barre-une-app--terminal").classList.remove('kp_barre-une-app--show');
  document.querySelector("#kp_terminal").classList.remove('kp_terminal--show');
  
  terminalCharge = false;
}
document.querySelector(".kp_icon--close-terminal").addEventListener("click", fermerTerminal);

function reduireTerminal(){
  removeClass(document.querySelector("#kp_terminal"), 'kp_terminal--show');
}
document.querySelector(".kp_icon--reduct-terminal").addEventListener("click", reduireTerminal);

function ouvrirTerminal(){
  let zindex = getHighestZIndex();
  document.querySelector("#kp_terminal").style.zIndex = zindex + 1;
  addClass(document.querySelector(".kp_barre-une-app--terminal"), 'kp_barre-une-app--show');
  addClass(document.querySelector("#kp_terminal"), 'kp_terminal--show');
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
  backHoverClick.style.zIndex  = highestZIndex;
  addClass(backHoverClick, 'kp_anti--show');
  addClass(document.querySelector('.kp_element--enable'), 'kp_element--disable');
}
document.querySelectorAll('.kp_z-index').forEach((element) => {
  element.addEventListener('mousedown', handleMouseDown);
});


/* ---------------------------------------------------------- */
addClass(document.querySelector('.kp_projet-btn--1'), 'kp_projet-btn--hover');

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

/* Baterie ou branché */
if ('getBattery' in navigator) {
  navigator.getBattery().then(function(battery) {
    console.log("L'appareil est-il sur batterie ? " + (battery.charging ? "Non" : "Oui"));
    console.log("Pourcentage de la batterie : " + (battery.level * 100) + "%");

    // Événement pour détecter les changements de l'état de charge
    battery.addEventListener('chargingchange', function() {
      console.log("L'appareil est-il sur batterie ? " + (battery.charging ? "Non" : "Oui"));
    });

    // Événement pour détecter les changements du pourcentage de la batterie
    battery.addEventListener('levelchange', function() {
      console.log("Pourcentage de la batterie : " + (battery.level * 100) + "%");
    });
  });
} else {
  console.log("L'API Battery Status n'est pas supportée sur cet appareil.");
}

/* Langue navigateur */
const userLang = navigator.language || navigator.userLanguage; 
console.log('La langue du navigateur est : ' + userLang);