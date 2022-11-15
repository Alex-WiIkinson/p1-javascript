const open = document.querySelector('.open');
const closed = document.querySelector('.closed');

// I have chosen to change the naming convention of the functions an elements slightly to seem more intuitive.
// Instead of naming the the functions after their corresponding elements I instead named them after what they do-
// Which is changing their state. For example: instead of the openFace function closing the face the open face function opens the face.
// I hope it makes sense as it took me a while to realise it was off.

function openFace() {
    if (open.classList.contains('.active') == false) { // Is open face not active? Then make it active.
        closed.classList.remove('active');
        open.classList.add('active');
    }
}

function closeFace() {
    if (closed.classList.contains('.active') == false) { // Is closed face not active? Then make it active.
        open.classList.remove('active');
        closed.classList.add('active');
    }
}