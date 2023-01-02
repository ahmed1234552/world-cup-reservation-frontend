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
    let url = 'https://careful-elk-petticoat.cyclic.app/api/users/';
    let data = await fetch(url);
    let res = await data.json();
    if (data.ok) {
        setTimeout(async() => {
            res.data.forEach((user, index)=>{
                let editButtonId = 'edit-' + user.user_name;
                let deleteButtonId = 'delete-' + user.user_name;
                if (!user.isAdmin){
                usersWrapper.innerHTML += `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${user.fname}</td>
                        <td>${user.email}</td>
                        <td>${user.role == 'manager' ? 'Manager' : 'User'}</td>
                        <td><button id="${editButtonId}" class="btn btn-secondary" onClick="editUser.call(this)">Edit</button></td>
                        <td><button id="${deleteButtonId}" class="btn btn-danger" onClick="deleteUser.call(this)">Delete</button></td>
                    </tr>
                `;
                }
            });
        });

    }

}


async function deleteUser(user) {
    // This function is called when the delete button is clicked
    let username = user.id.split('-')[1];
    console.log(user.id);
    let url = `https://careful-elk-petticoat.cyclic.app/api/users/${username}`;
    let data = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await data.json();
    if (data.ok) {
        console.log(res);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
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
    let url = 'https://careful-elk-petticoat.cyclic.app/api/users/pending';
    let data = await fetch(url);
    let res = await data.json();
    if (data.ok) {
        setTimeout(async() => {
            res.data.forEach((request, index)=>{
                let approveButtonId = 'approve-' + request.user_name;
                let rejectButtonId = 'reject-' + request.user_name;
                requestsWrapper.innerHTML += `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${request.fname}</td>
                        <td>${request.email}</td>
                        <td><button id="${approveButtonId}" class="btn btn-success" onClick="approveUser.call(this)">Approve</button></td>
                        <td><button id="${rejectButtonId}" class="btn btn-danger" onClick="rejectUser.call(this)">Reject</button></td>
                    </tr>
                `;
            });
        }, 1000);
    }

}

async function approveUser(user) {
    // This function is called when the approve button is clicked
    let username = user.id.split('-')[1];
    console.log(user.id);
    let url = `https://careful-elk-petticoat.cyclic.app/api/users/confirm/${username}`;
    let data = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await data.json();
    if (data.ok) {
        console.log(res);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}

async function rejectUser(user) {
    // This function is called when the reject button is clicked
    let username = user.id.split('-')[1];
    console.log(user.id);
    let url = `https://careful-elk-petticoat.cyclic.app/api/users/deny/${username}`;
    let data = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await data.json();
    if (data.ok) {
        console.log(res);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}


loadUsers();
loadManagerRequests();
