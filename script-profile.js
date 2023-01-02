document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.nav_menu');
    let menu_toggle = document.querySelector('.mobile-menu-icon');
    let menu_toggle_icon = document.querySelector('.mobile-menu-icon ion-icon');
    menu_toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menu.classList.contains('active') ?
            menu_toggle_icon.setAttribute('name', 'close-outline') :
            menu_toggle_icon.setAttribute('name', 'menu-outline');
    });
});
let userData = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: 'johndoe123',
    isFan: false
};

async function loadProfile(){
    // fill the form placeholders with user data
    let firstName = document.querySelector('#firstName');
    let lastName = document.querySelector('#lastName');
    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    firstName.setAttribute('placeholder', userData.firstName);
    lastName.setAttribute('placeholder', userData.lastName);
    username.setAttribute('placeholder', userData.username);
    email.setAttribute('placeholder', userData.email);
    password.setAttribute('placeholder', userData.password);

    if (userData.isFan) {
        // add a button to the end of a div with class 'grid'
        let grid = document.querySelector('.grid');
        grid.innerHTML += `
                <!-- button to request to be a manager -->
            <form action="https://httpbin.org/post" method="POST" class="form login">
            <div class="form__field">
                <input type="submit" value="Request to be a manager">
            </div>
            </form>`;

    }
}

loadProfile();