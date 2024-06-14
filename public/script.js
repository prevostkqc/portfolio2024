// Sélection et initialisation
const elementChangeDraggables = document.querySelectorAll('.kp_element--title');
const elementFullScreen = document.querySelector('.kp_animation_full-screen');
const resizeHandles = document.querySelectorAll('.resize-handle');
const backHoverClick = document.querySelector('.kp_anti-hover--full');
let isDragging = false, isFullScreen = false, isResizing = false;
let offsetX, offsetY, lastX, lastY;
let initialState = { width: '', height: '', left: '', top: '' };
let lastElementDragable = document.querySelector('.kp_animation_full-screen');

// Ajouter et supprimer des classes
const addClass = (element, className) => element?.classList.add(className);
const removeClass = (element, className) => element?.classList.remove(className);

// Met à jour l'état initial d'un élément
const updateInitialState = (draggableElement) => {
  if (draggableElement) {
    initialState.width = draggableElement.offsetWidth + 'px';
    initialState.height = draggableElement.offsetHeight + 'px';
    initialState.left = draggableElement.style.left;
    initialState.top = draggableElement.style.top;
  }
};

// Début Drag & Drop
elementChangeDraggables.forEach(elementChangeDraggable => {
  elementChangeDraggable.addEventListener('mousedown', e => {
    const draggableElement = changedDragable(e);
    if (draggableElement) {
      handleMouseDownDrag(e, draggableElement);
      lastX = e.clientX;
      lastY = e.clientY;
    }
  });
});

const handleMouseDownDrag = (e, draggableElement) => {
  isDragging = true;
  offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
  offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
  addClass(lastElementDragable, 'kp_element--movement');
  document.body.style.cursor = 'grabbing';
};

// Mouvement du Drag & Drop
const handleMouseMoveDrag = (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - lastX;
  const deltaY = e.clientY - lastY;
  if (lastElementDragable) {
    const newLeft = parseInt(lastElementDragable.style.left || 0, 10) + deltaX;
    const newTop = parseInt(lastElementDragable.style.top || 0, 10) + deltaY;
    lastElementDragable.style.left = `${newLeft}px`;
    lastElementDragable.style.top = `${newTop}px`;
  }
  lastX = e.clientX;
  lastY = e.clientY;
};

// Fin du Drag & Drop
const handleMouseUpDrag = () => {
  isDragging = false;
  removeClass(backHoverClick, 'kp_anti--show');
  removeClass(document.querySelector('.kp_element--enable'), 'kp_element--disable');
  document.body.style.cursor = 'default';
  removeClass(lastElementDragable, 'kp_element--movement');
};

// Redimensionnement
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
      handle.parentElement.style.maxWidth = `${9999}px`;
    }
    function mouseUpHandler() {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
});

// double & simple clic
document.addEventListener('mouseup', handleMouseUpDrag);
let throttleTimeout = null;

document.addEventListener('mousemove', (e) => {
  if (!isDragging || throttleTimeout) return;
  throttleTimeout = setTimeout(() => {
    throttleTimeout = null;
    handleMouseMoveDrag(e);
  }, 100);
});

let clicCount = 0;
let clicTimer;

function onDoubleClick() {
  const classeRecherchee = 'kp_element--action--resize';
  lastElementDragable.classList.toggle(classeRecherchee);
  clicCount = 0;
}

function handleClic(e) {
  lastElementDragable = changedDragable(e);
  clicCount++;
  if (clicCount === 1) {
    clicTimer = setTimeout(() => {
      clicCount = 0;
      // Ajoutez ici la fonction qui doit être appelée sur un simple clic
    }, 300);
  } else if (clicCount === 2) {
    clearTimeout(clicTimer);
    clicCount = 0; 
    onDoubleClick();
  }
}

document.querySelector(".kp_element--title").addEventListener("click", handleClic);

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
    removeClass(lastElementDragable, 'kp_element--movement');
    document.body.style.cursor = 'default';
    isDragging = false;
  }
});

function changedDragable(e) {
  let dragrableTemp = e.target.closest('.kp_changed__id'); 
  if (dragrableTemp && dragrableTemp.id) {
    if (["kp_terminal", "kp_browser", "kp_text"].includes(dragrableTemp.id)) {
      lastElementDragable = dragrableTemp;
    }
  }
  return dragrableTemp;
}

function clickResizeWindow() {
  const classeRecherchee = 'kp_element--action--resize';
  lastElementDragable.classList.toggle(classeRecherchee);
}

// Gestion des actions sur les éléments
function actionSurElement(event) {
  const id = event.currentTarget.id;
  const [action, target] = id.split('--').slice(1);
  if (target) {
    const elementCibleId = `kp_${target}`;
    const elementCible = document.getElementById(elementCibleId);
    if (elementCible) {
      switch (action) {
        case 'reduct':
          elementCible.classList.toggle('kp_element--action--reduct');
          reduireWindowId(target);
          break;
        case 'resize':
          elementCible.classList.toggle('kp_element--action--resize');
          break;
        case 'close':
          elementCible.classList.toggle('kp_element--action--close');
          fermerWindowId(target);
          break;
        default:
          console.log('L\'action est inconnue');
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

function fermerMenu() {
  removeClass(document.querySelector(".kp_menu__barre-etat"), 'kp_menu__barre-etat--show');
}

function ouvrirMenu() {
  let zindex = getHighestZIndex();
  document.querySelector(".kp_menu__barre-etat").style.zIndex = zindex + 1;
  addClass(document.querySelector(".kp_menu__barre-etat"), 'kp_menu__barre-etat--show');
}

function ouvrirFenetre(selector, barreSelector) {
  fermerMenu();
  let zindex = getHighestZIndex();
  const element = document.querySelector(selector);
  const barre = document.querySelector(barreSelector);
  if (element && barre) {
    element.style.zIndex = zindex + 1;
    addClass(barre, 'kp_barre-une-app--show');
    addClass(element, 'kp_window--show');
    removeClass(element, 'kp_element--action--reduct');
    removeClass(element, 'kp_element--action--close');
  }
}

function fermerProjet() {
  addClass(document.querySelector(".kp_information-projet"), 'kp_clipy--hide');
  addClass(document.querySelector(".kp_clipy--bulle-projet"), 'kp_clipy--hide');
  removeClass(document.querySelector(".kp_clipy--bulle"), 'kp_clipy--hide');
}

function ouvrirProjet() {
  fermerMenu();
  document.querySelector('#kp_internet--onglets > :first-child').click();
  ouvrirFenetre("#kp_browser", ".kp_barre-une-app--browser");
  addClass(document.querySelector(".kp_un-projet"), 'kp_un-projet--show');
  removeClass(document.querySelector(".kp_clipy--bulle-projet"), 'kp_clipy--hide');
  addClass(document.querySelector(".kp_clipy--bulle"), 'kp_clipy--hide');
}

function ouvrirDescriptionProjet() {
  addClass(document.querySelector(".kp_information-projet"), 'kp_information-projet--hide');
  addClass(document.querySelector(".kp_barre-une-app--browser"), 'kp_barre-une-app--show');
  removeClass(document.querySelector(".kp_clipy--bulle-projet"), 'kp_clipy--hide');
  removeClass(document.querySelector(".kp_un-projet"), 'kp_un-projet--hide');
  removeClass(document.querySelector(".kp_information-projet"), 'kp_information-projet--show');
}

function fermerDescriptionProjet() {
  addClass(document.querySelector(".kp_un-projet"), 'kp_un-projet--hide');
  addClass(document.querySelector(".kp_information-projet"), 'kp_information-projet--show');
  addClass(document.querySelector(".kp_clipy--bulle-projet"), 'kp_clipy--hide');
  removeClass(document.querySelector(".kp_un-projet"), 'kp_un-projet--show');
  removeClass(document.querySelector(".kp_information-projet"), 'kp_information-projet--hide');
}

document.querySelector(".kp_barre-une-app--browser").addEventListener("click", ouvrirFolderProjects);
document.querySelectorAll(".kp_folder--projets, .kp_barre-une-app--browser").forEach(element => {
  const closeButton = document.querySelector(".kp_icon--close-browser");
  if (closeButton) closeButton.click();
  element.addEventListener("click", ouvrirProjet);
});

document.querySelector(".kp_un-projet--close").addEventListener("click", fermerDescriptionProjet);
document.querySelector(".kp_information-projet").addEventListener("click", ouvrirDescriptionProjet);
document.querySelector(".kp_projet-btn").addEventListener("click", ouvrirDescriptionProjet);

function ouvrirText() {
  ouvrirFenetre("#kp_text", ".kp_barre-une-app--text");
}

document.querySelector(".kp_folder--text").addEventListener("click", ouvrirText);
document.querySelector(".kp_barre-une-app--text").addEventListener("click", ouvrirText);

function ouvrirPokemon() {
  ouvrirFenetre("#kp_pokemon", ".kp_barre-une-app--pokemon");
}

document.querySelector(".kp_folder--pokemon").addEventListener("click", ouvrirPokemon);
document.querySelector(".kp_barre-une-app--pokemon").addEventListener("click", ouvrirPokemon);

function ouvrirFolderProjects() {
  ouvrirFenetre("#kp_folder-projects", ".kp_barre-une-app--folder-projects");
}

document.querySelector(".kp_folder--folder-projects").addEventListener("click", ouvrirFolderProjects);
document.querySelector(".kp_barre-une-app--folder-projects").addEventListener("click", ouvrirFolderProjects);
document.querySelector(".kp_menu__barre-etat--projet").addEventListener("click", ouvrirFolderProjects);

function reduireProfil() {
  removeClass(document.querySelector("#kp_profil"), 'kp_profil--show');
}

document.querySelector(".kp_icon--reduct-profil").addEventListener("click", reduireProfil);

function ouvrirProfil() {
  ouvrirFenetre("#kp_profil", ".kp_barre-une-app--profil");
}

document.querySelector(".kp_menu__barre-etat--titre").addEventListener("click", ouvrirProfil);
document.querySelector(".kp_barre-une-app--profil").addEventListener("click", ouvrirProfil);

function ouvrirCv() {
  ouvrirFenetre("#kp_quisuisje", ".kp_barre-une-app--quisuisje");
}

document.querySelector(".kp_folder--quisuisje").addEventListener("click", ouvrirCv);
document.querySelector(".kp_barre-une-app--quisuisje").addEventListener("click", ouvrirCv);
document.querySelector(".kp_menu__barre-etat--quisuisje").addEventListener("click", ouvrirCv);

let terminalCharge = true;

function ouvrirTerminal() {
  ouvrirFenetre("#kp_terminal", ".kp_barre-une-app--terminal");
  if (!terminalCharge) {
    terminalCharge = true;
    ecrireTexte();
  }
}

document.querySelector(".kp_folder--terminal").addEventListener("click", ouvrirTerminal);
document.querySelector(".kp_barre-une-app--terminal").addEventListener("click", ouvrirTerminal);

function fermerWindowId(idElement) {
  var idDiv = "#kp_" + idElement;
  var idBarre = ".kp_barre-une-app--" + idElement;
  removeClass(document.querySelector(idDiv), 'kp_window--show');
  removeClass(document.querySelector(idBarre), 'kp_barre-une-app--show');
  if (idElement === "browser") fermerProjet();
}

function reduireWindowId(idElement) {
  var idDiv = "#kp_" + idElement;
  removeClass(document.querySelector(idDiv), 'kp_window--show');
}

document.addEventListener('mousedown', function(e) {
  var menuDemarre = document.querySelector('.kp_notification__demarrer');
  var menuDemarreBarre = document.querySelector('.kp_menu__barre-etat');
  if (menuDemarre.contains(e.target) || menuDemarreBarre.contains(e.target)) {
    ouvrirMenu();
  } else {
    fermerMenu();
  }
});

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

function ecrireTexte() {
  const container = document.querySelector('.kp_terminal--texte');
  const texteAAnimer = " ===================  <br/>  =>  Qui suis-je ?  <=  <br/>  ===================  <br/>  <br/>  Avec une solide expérience de plus de 10 ans dans le développement web, ma passion pour le multimédia et les évolutions technologiques a été le moteur de ma carrière.<br/><br/>  Spécialiste en création et optimisation de solutions web, je suis constamment à la recherche des dernières innovations pour apporter des réponses créatives et efficaces aux défis qui me sont proposés.  <br/> <br/>Mon parcours m'a permis de développer une expertise approfondie et une excellente capacité d'analyse des solutions visuelles, des langages de programmation et des outils de développement, me positionnant comme un acteur clé dans la transformation numérique des entreprises.<br/><br/>  En tant que responsable au sein du groupe Cybertek de la Cellule Créative, regroupant les services de webdesign, motion-design, graphisme, intégration et développement front-end, j'ai affiné ma maîtrise en gestion d'équipe pour piloter des projets novateurs avec succès et pour stimuler l'engagement de mon équipe vers la réalisation de nos ambitions partagées.<br/><br/>Mon approche, centrée sur la collaboration et l'innovation, favorise un environnement avec lequel la créativité et la technologie convergent vers un objectif commun.<br/><br/>Dynamique et motivé, je suis toujours prêt à explorer de nouveaux horizons et à relever de nouveaux défis.<br/><br/>Bienvenue dans mon univers !<span class='kp_terminal-ecriture'></span>";
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

if ('getBattery' in navigator) {
  navigator.getBattery().then(function(battery) {
    var batteryImg = "100";
    var batteryLoading = battery.charging ? "load" : "";
    if ((battery.level * 100) <= 25) batteryImg = 25;
    else if ((battery.level * 100) <= 55) batteryImg = 50;
    else if ((battery.level * 100) <= 75) batteryImg = 70;
    var image = document.querySelector('.kp_battery--img');
    image.src = '/images/icn_battery' + batteryLoading + batteryImg + ".png";

    const element = document.getElementById('kp_battery__user');
    element.innerHTML = Math.round((battery.level * 100)) + "%";

    battery.addEventListener('chargingchange', function() {
      console.log("L'appareil est-il sur batterie ? " + (battery.charging ? "Non" : "Oui"));
    });

    battery.addEventListener('levelchange', function() {
      console.log("Pourcentage de la batterie : " + (battery.level * 100) + "%");
    });
  });
} else {
  console.log("L'API Battery Status n'est pas supportée sur cet appareil.");
}

const userLang = navigator.language || navigator.userLanguage;
document.getElementById('kp_lang__user').innerHTML = userLang;

const card = document.querySelector('.kp_card-pokemon');
const cardGlow = document.querySelector('.kp_card-pokemon--glow');
const cardGlow2 = document.querySelector('.kp_card-pokemon--glow2');
const cardHolo = document.querySelector('.kp_card-pokemon--holo');
const carCadre = document.querySelector('.kp_card-pokemon--cadre');

card.addEventListener('mousemove', e => {
  let elRect = card.getBoundingClientRect();
  let x = e.clientX - elRect.left;
  let y = e.clientY - elRect.top;

  let midCardWidth = elRect.width / 2;
  let midCardHeight = elRect.height / 2;

  let angleX = (x - midCardWidth) / midCardWidth * 20;
  let angleY = - (y - midCardHeight) / midCardHeight * 20;

  let glowX = x / elRect.width * 100;
  let glowY = y / elRect.height * 100;

  card.children[0].style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
  cardGlow2.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
  cardGlow.style.backgroundPosition = `${glowX * 10}px ${glowY * 10}px`;
  carCadre.style.filter = `drop-shadow(${glowX/10}px ${glowY/10}px 3px #000000AA)`;
  cardGlow2.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.9), transparent)`;
});

card.addEventListener('mouseleave', () => {
  card.children[0].style.transform = 'rotateX(0deg) rotateY(0deg)';
  cardGlow2.style.transform = `rotateX(0deg) rotateY(0deg)`;
  cardGlow.style.backgroundPosition = `0px 0px`;
});

const btnFullScreen = document.getElementById('fullscreen-btn');
btnFullScreen.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    btnFullScreen.innerHTML = "Quitter le mode plein écran";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    btnFullScreen.innerHTML = "S'immerge en mode plein écran";
  }
}
