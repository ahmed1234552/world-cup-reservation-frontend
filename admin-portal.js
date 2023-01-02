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

let isAdmin = false;

let users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        email: 'johndoe@gmail.com',
        password: 'johndoe123',
        isManager: false,
        isAdmin: false
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        username: 'janedoe',
        email: 'jodoe@gmail.com',
        password: 'janedoe123',
        isManager: false,
        isAdmin: false
    }
];

async function loadUsers() {
    let usersWrapper = document.querySelector('#users');
    let loader = document.querySelector('#users-loader');
    // let url = 'https://world-cup.codsfli.com/users.php';    
    // let data = await fetch(url);
    // if (data.ok) {
    //     setTimeout(async() => {
    //         loader.remove();
    //         let response = await data.json();
    //         response.map((user) => {
    users.forEach((user, index)=>{
        if (!user.isAdmin){
            usersWrapper.innerHTML += `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${user.firstName}</td>
                    <td>${user.email}</td>
                    <td>${user.isManager ? 'Manager' : 'User'}</td>
                    <td><button class="btn btn-secondary">Edit</button></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                </tr>
            `;
        }

    });

}

let managerRequests = [
    {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        email: 'ksdsad'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        username: 'janedoe',
        email: 'ksdsad'
    }
];

async function loadManagerRequests() {
    let requestsWrapper = document.querySelector('#requests');
    // let loader = document.querySelector('#requests-loader');
    managerRequests.forEach((request, index)=>{
        requestsWrapper.innerHTML += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${request.firstName}</td>
                <td>${request.email}</td>
                <td><button class="btn btn-success">Approve</button></td>
                <td><button class="btn btn-danger">Reject</button></td>
            </tr>
        `;
    }); 

}

loadUsers();
loadManagerRequests();
