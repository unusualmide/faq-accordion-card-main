"use strict";

const dropDown = document.querySelector('.dropdown');
const  dropMenu = document.querySelector('.dropmenu');
const drop = document.querySelector('.drop');
let open = document.querySelector('.open');

drop.addEventListener('click', function () {
    open.classList.toggle('hidden');
    dropDown.classList.toggle('hidden');
    dropMenu.classList.toggle('hidden');

});

const dropUp = document.querySelector('.dropup');


dropUp.addEventListener('click', function () {
    open.classList.add('hidden');
    dropDown.classList.add('hidden');
    dropMenu.classList.remove('hidden');
})



