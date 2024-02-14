const myDiv = document.getElementById('kp_iframe--container');
let isDragging = false;
let offsetX, offsetY;
let isExpanded = false;
let initialState = { width: '', height: '', left: '', top: '' };

if (!isExpanded) {
  initialState.width = myDiv.offsetWidth + 'px';
  initialState.height = myDiv.offsetHeight + 'px';
  initialState.left = myDiv.style.left;
  initialState.top = myDiv.style.top;
}

myDiv.addEventListener('mousedown', function(e) {
  isDragging = true;
  offsetX = e.clientX - myDiv.getBoundingClientRect().left;
  offsetY = e.clientY - myDiv.getBoundingClientRect().top;
  
  if (isExpanded) {
  } else {
    myDiv.style.position = 'absolute';
  }
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    if (!isExpanded || isExpanded) {
      myDiv.style.left = newLeft + 'px';
      myDiv.style.top = newTop + 'px';
    }
  }
});

document.addEventListener('mouseup', function() {
  if (isExpanded) {
    myDiv.style.width = initialState.width;
    myDiv.style.height = initialState.height;
    myDiv.style.left = initialState.left;
    myDiv.style.top = '0';
    isExpanded = false;
  } else if (myDiv.getBoundingClientRect().top <= 0) {
    myDiv.style.width = '100vw';
    myDiv.style.height = '100vh';
    myDiv.style.left = '0';
    myDiv.style.top = '0';
    isExpanded = true;
  }
  isDragging = false;
});
