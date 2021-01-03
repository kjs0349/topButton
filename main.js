const dm = document.documentElement;
const topButton = document.querySelector('.top-button');

const documentHeight = dm.scrollHeight;

window.addEventListener('scroll', function () {
    let scrollToTop = dm.scrollTop;

    if (documentHeight != 0) {
        const actionHeight = documentHeight / 4;

        if (scrollToTop > actionHeight) {
            topButton.classList.add('action');
        } else {
            topButton.classList.remove('action');
        }
    }
})

topButton.addEventListener('click', function (e) {
    e.preventDefault();
    scrollUp();
})

function scrollUp() {
    let upper = setInterval(function () {
        if (dm.scrollTop != 0) {
            window.scrollBy(0, -55);
        } else {
            clearInterval(upper);
        }
    }, 10);
}

console