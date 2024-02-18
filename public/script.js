const elementDraggable = document.querySelector('.kp_window--container');
const elementChangeDraggable = document.querySelector('.kp_window--title-zone');
const elementFullScreen = document.querySelector('.kp_animation_full-screen');
const resizeHandle = document.querySelector('.resize-handle');
let isDragging = false, isFullScreen = false, isResizing = false;
let offsetX, offsetY, startX, startY, startWidth, startHeight;
let initialState = { width: '', height: '', left: '', top: '' };
const updateInitialState = () => {
  initialState.width = elementDraggable.offsetWidth + 'px';
  initialState.height = elementDraggable.offsetHeight + 'px';
  initialState.left = elementDraggable.style.left;
  initialState.top = elementDraggable.style.top;
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
document.querySelector(".kp_icon_zone--resize").addEventListener("click", clickResizeWindow);


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

function ouvrirPojet(){
  addClass(elementDraggable, 'kp_iframe--show');
}
document.querySelector(".kp_folder--projets").addEventListener("click", ouvrirPojet);


function fermerPojet(){
  removeClass(elementDraggable, 'kp_iframe--show');
}
document.querySelector(".kp_icon_zone--close").addEventListener("click", fermerPojet);


function fermerDescriptionProjet(){
  addClass(document.querySelector(".kp_un-projet"), 'kp_un-projet--hide');
}
document.querySelector(".kp_un-projet--close").addEventListener("click", fermerDescriptionProjet);
