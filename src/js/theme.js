const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    body: document.querySelector('body'),
    input: document.querySelector('#theme-switch-toggle'),
};

refs.input.addEventListener('change', onInputChange);
refs.input.addEventListener('change', changeLocalStorage);

function onInputChange() {
    const check = refs.input.checked;
    if (check) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    }
}

function changeLocalStorage() {
    const check = refs.input.checked;
    if (check) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

const changeLocalTheme = localStorage.getItem('theme');
if (changeLocalTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.input.checked = true;
}
