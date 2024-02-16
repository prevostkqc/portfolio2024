const elementDraggable = document.getElementById('kp_iframe--container');
const elementFullScreen = document.querySelector('.kp_animation_full-screen');
let isDragging = false;
let isFullScreen = false;
let initialState = { width: '', height: '', left: '', top: '' };

// Initialiser l'état initial dès le chargement ou la création de elementDraggable
initialState.width = elementDraggable.offsetWidth + 'px';
initialState.height = elementDraggable.offsetHeight + 'px';
initialState.left = elementDraggable.style.left;
initialState.top = elementDraggable.style.top;

elementDraggable.addEventListener('mousedown', function(e) {
  if (!isFullScreen) {
    isDragging = true;
    const rect = elementDraggable.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  }

  // Vérifier si la fenêtre est au top de la page au début du drag
  if (elementDraggable.getBoundingClientRect().top <= 0) {
    elementDraggable.classList.add('kp_iframe--container_full'); // Ajouter la classe
    elementFullScreen.classList.add('kp_window_isfullscreen'); // Ajouter la classe
  }
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    const newLeft = e.clientX - offsetX;
    const newTop = e.clientY - offsetY;
    elementDraggable.style.left = newLeft + 'px';
    elementDraggable.style.top = newTop + 'px';
  }
  // Vérifier si la fenêtre est au top de la page pendant le drag
  if (isDragging && elementDraggable.getBoundingClientRect().top <= 0) {
    elementFullScreen.classList.add('kp_window_isfullscreen'); // Ajouter la classe
  } else {
    elementFullScreen.classList.remove('kp_window_isfullscreen'); // Retirer la classe
    elementDraggable.classList.remove('kp_iframe--container_full'); // Retirer la classe
  }
});

document.addEventListener('mouseup', function(e) {
  isDragging = false;

  // Vérifier si la fenêtre est en haut de la page
  if (!isFullScreen && elementDraggable.getBoundingClientRect().top <= 0) {
    isFullScreen = true;
  } else if (isFullScreen) {
    // Restaurer les valeurs initiales si la fenêtre est déjà en plein écran
    elementDraggable.style.width = initialState.width;
    elementDraggable.style.height = initialState.height;
    elementDraggable.style.left = initialState.left;
    elementDraggable.style.top = initialState.top;
    isFullScreen = false;
  }
  if (isFullScreen) {
    elementDraggable.classList.add('kp_iframe--container_full'); // Ajouter la classe
  }
  else{
    elementDraggable.classList.remove('kp_iframe--container_full'); // Retirer la classe
  }
});

window.addEventListener('resize', function() {
  // Si la fenêtre est en mode plein écran et qu'elle est redimensionnée, marquez-la comme étant en cours de redimensionnement
  if (document.fullscreenElement && !isResizing) {
    isResizing = true;
    setTimeout(function() {
      isResizing = false;
    }, 200);
  }
});

document.querySelector('.kp_full_screen').addEventListener('click', function() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(function() {
      isFullScreen = true;
    }).catch(function(err) {
      console.error('Erreur lors de la bascule en mode plein écran:', err);
    });
  } else {
    document.exitFullscreen().then(function() {
      isFullScreen = false;
    }).catch(function(err) {
      console.error('Erreur lors de la sortie du mode plein écran:', err);
    });
  }
});

document.querySelector('.kp_full_screen--folder').addEventListener('click', function() {
  if (!isFullScreen) {
    // Sauvegarde des valeurs initiales
    initialState.width = elementDraggable.offsetWidth -7 + 'px';
    initialState.height = elementDraggable.offsetHeight -7 + 'px';
    initialState.left = elementDraggable.style.left;
    initialState.top = elementDraggable.style.top;

    // Mise en plein écran
    isFullScreen = true;
  } else {
    // Restauration des valeurs initiales
    elementDraggable.style.width = initialState.width;
    elementDraggable.style.height = initialState.height;
    elementDraggable.style.left = initialState.left;
    elementDraggable.style.top = initialState.top;
    isFullScreen = false;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var hauteurProjet = document.querySelector('.kp_un-projet').offsetHeight;
  var elementIframe = document.querySelector('.kp_iframe--projet');
  elementIframe.style.height = 'calc(100% - ' + hauteurProjet + 'px)';
});

// Double clic sur une fenêtre
let clicCount = 0;
let clicTimer;
function onDoubleClick() {
    console.log("Double clic détecté !");
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
