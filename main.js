const btnYellow = document.querySelector(".btn-warning")
const btnGreen = document.querySelector(".btn-success")
const headerTitle = document.querySelector(".header__title")
const modal = document.getElementById('myModal')

const closeModal = event => {
    const target = event.target
    if (target === modal || target.closest('.btn-close')) {
        modal.style.visibility = 'hidden'
    }

}

function openModal() {
    modal.style.visibility = 'visible'

}

openModal()

function trigger() {
    if (headerTitle.style.display !== 'none') {
        headerTitle.style.display = 'none'
    } else (headerTitle.style.display = 'block')
}

modal.addEventListener('click', closeModal)

btnYellow.addEventListener('click', trigger)

$(function () {
    jQuery.fn.swap = function (b) {
        b = jQuery(b)[0];
        let a = this[0],
            a2 = a.cloneNode(true),
            b2 = b.cloneNode(true),
            stack = this;

        a.parentNode.replaceChild(b2, a);
        b.parentNode.replaceChild(a2, b);

        stack[0] = a2;
        return this.pushStack(stack);
    };

    $(btnGreen).on('click', function () {
        $('.first').swap('.second');
    });
});