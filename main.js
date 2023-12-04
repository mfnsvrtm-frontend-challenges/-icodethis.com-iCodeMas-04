const button = document.getElementsByTagName('button')[0];
const container = document.querySelector('.container');
const previewContainer = document.querySelector('.container.preview');

var state = 'initial';
var transitioning = false;

button.onmouseenter = () => {
    if (state !== 'initial') {
        return;
    }

    state = 'preview';
    container.classList.add('out');
    previewContainer.classList.remove('out');
}

button.onmouseleave = () => {
    if (state !== 'preview') {
        return;
    }

    state = 'initial';
    container.classList.remove('out');
    previewContainer.classList.add('out');
}

button.onclick = () => {
    state = 'final'
    button.classList.add('hidden');
}