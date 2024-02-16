const elementDragable = document.getElementById('kp_iframe--container');
let isDragging = false;
let offsetX, offsetY;
let isExpanded = false;
let initialState = { width: '', height: '', left: '', top: '' };

// Initialiser l'état initial dès le chargement ou la création de elementDragable
initialState.width = elementDragable.offsetWidth + 'px';
initialState.height = elementDragable.offsetHeight + 'px';
initialState.left = elementDragable.style.left;
initialState.top = elementDragable.style.top;

elementDragable.addEventListener('mousedown', function(e) {
  isDragging = true;
  const rect = elementDragable.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  // Si la fenêtre est agrandie, réinitialiser la taille et centrer la fenêtre sous la souris
  if (isExpanded) {
    elementDragable.style.width = initialState.width;
    elementDragable.style.height = initialState.height;
    // Calculer le nouveau `left` pour que le clic de souris soit au centre de la fenêtre
    const mousePositionX = e.clientX; // Position X de la souris au moment du clic
    const newLeft = mousePositionX - parseInt(initialState.width) / 2; // Centrer horizontalement
    elementDragable.style.left = `${newLeft}px`;
    elementDragable.style.top = initialState.top;
    isExpanded = false;
  } else {
    // Ajuster la position absolue pour le mouvement
    elementDragable.style.position = 'absolute';
  }
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;
    elementDragable.style.left = newLeft + 'px';
    elementDragable.style.top = newTop + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
  // Aucun ajustement de taille nécessaire ici, géré par mousedown
  if (!isExpanded && elementDragable.getBoundingClientRect().top <= 0) {
    elementDragable.style.width = '100vw';
    elementDragable.style.height = '100vh';
    elementDragable.style.left = '0';
    elementDragable.style.top = '0';
    isExpanded = true;
  }
});
