var link = document.querySelector('.link');
var closeModal = document.querySelector('.close-modal');
var modal = document.querySelector('.modal');
var login = document.querySelector('[name=login]');
var password = document.querySelector('[name=password]');
var form = modal.querySelector('form-login');
var storage = localStorage.getItem('login');

link.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.toggle('open');
    login.focus();

    if (storage) {
        login.value = storage;
        password.focus();
    }
    else{
        login.focus();
    }
});
closeModal.addEventListener('click', function () {
    modal.classList.remove('open');
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!login.value || !password.value){
    } else {
        localStorage.setItem('login', login.value);
    }
});
window.addEventListener('keydown', function(esc) {
    if (esc.keyCode===27) {
        modal.classList.toggle('open');
    }
});