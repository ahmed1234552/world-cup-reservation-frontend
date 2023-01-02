

async function signup() {
    console.log("sending request ");
    let fname = document.querySelector('#signup_fname').value;
    let lname = document.querySelector('#signup_lname').value;
    let email = document.querySelector('#signup_email').value;
    let username = document.querySelector('#signup_username').value;
    let password = document.querySelector('#signup_password').value;

    let url = 'https://careful-elk-petticoat.cyclic.app/api/users/';
    let data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname: fname,
            lname: lname,
            email: email,
            user_name: username,
            password: password,
            role: 'user',
            gender: 'm',
            bdate: '1999-01-01'
        })
    });
    let res = await data.json();
    if (data.ok) {
        window.location.href = 'Login.html';
    } else {
        alert(res.message);
    }
}

async function login() {
    let username = document.querySelector('#login__username').value;
    let password = document.querySelector('#login__password').value;

    let url = 'https://careful-elk-petticoat.cyclic.app/api/users/authenticate';
    let data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });
    let res = await data.json();
    if (data.ok) {
        window.location.href = 'index-fans.html';
    }
    else {
        alert(res.message);
    }
}
