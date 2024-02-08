let start = document.getElementById('start');
let search = document.getElementById('search');
let more = document.getElementById('more');
let startMenu = document.getElementById('start-menu');
let searchMenu = document.getElementById('search-menu');
let moreMenu = document.getElementById('more-menu');
let startMode = false;
let searchMode = false;
let moreMode = false;

start.addEventListener('click', function () {
    if (startMode == false) {
        startMenu.classList.remove('close');
        startMenu.classList.add('open');
        startMode = true;
        console.log(startMode);
    }
    else if (startMode == true) {
        startMenu.classList.remove('open');
        startMenu.classList.add('close');
        startMode = false;
        console.log(startMode);
    }
});
search.addEventListener('click', function () {
    if (searchMode == false) {
        searchMenu.classList.remove('close');
        searchMenu.classList.add('open');
        searchMode = true;
        console.log(searchMode);
    }
    else if (searchMode == true) {
        searchMenu.classList.remove('open');
        searchMenu.classList.add('close');
        searchMode = false;
        console.log(searchMode);
    }
});
more.addEventListener('click', function () {
    if (moreMode == false) {
        moreMenu.classList.remove('close');
        moreMenu.classList.add('open');
        moreMode = true;
        console.log(moreMode);
    }
    else if (moreMode == true) {
        moreMenu.classList.remove('open');
        moreMenu.classList.add('close');
        moreMode = false;
        console.log(moreMode);
    }
});
