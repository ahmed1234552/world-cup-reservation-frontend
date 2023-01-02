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

let stadiumData = {
    group: 'Group A',
    stadiumNumber: 1,
    homeTeam: {
      name: 'Qatar',
      abbreviation: 'QAT'
    },
    awayTeam: {
      name: 'Ecuador',
      abbreviation: 'ECU'
    },
    time: {
      month: 'Nov',
      day: 'Sun',
      date: 20,
      time: '6:00 PM'
    },
    avenue: {
        name: 'Al Bayt Stadium',
        city: 'Al Rayyan',
        capacity: 60000
    }
  }


let isLogged = true;
let isManager = true;
let isAdmin = false;

function renderLogged() {
    let login_btn = document.querySelector('#login-btn');
    let register_btn = document.querySelector('#register-btn');
    login_btn.setAttribute('href', './profile.html');
    login_btn.innerHTML = `
        <span>Profile</span>
    `;
    register_btn.setAttribute('href', './index-guest.html');
    register_btn.innerHTML = `
        <span>Logout</span>
    `;
    // get all the links with the class home-link
    let index_links = document.querySelectorAll('.home-link');
    // loop through the links and update the href to be profile
    index_links.forEach((link) => {
        link.setAttribute('href', './index-fans.html');
    });

}

function renderManager() {
    let index_links = document.querySelectorAll('.home-link');
    // loop through the links and update the href to be profile
    index_links.forEach((link) => {
        link.setAttribute('href', './index-managers.html');
    });
}

function renderAdmin() {
    let index_links = document.querySelectorAll('.home-link');
    // loop through the links and update the href to be profile
    index_links.forEach((link) => {
        link.setAttribute('href', './index-admin.html');
    });

}

function renderPage() {
    // update the login button to be profile and the register button to be logout
    if (isLogged) {
        renderLogged();
    }
    if (isManager) {
        renderManager();
    }
    if (isAdmin) {
        renderAdmin();
    }
    
}

// renderPage();

async function fetchstadium() {
    let stadiums_wrapper = document.querySelector('.stadiums');
    let loader = document.querySelector('#stadiums-loader');
    // TODO: Fetch the data from the stadiums api here
    // let url = 'https://world-cup.codsfli.com/points.php';
    // let data = await fetch(url);
    // if (data.ok) {
    let url = "https://careful-elk-petticoat.cyclic.app/api/venue";
    let data = await fetch(url);
    if (data.ok) {
        let response = await data.json();
        console.log(response);
        setTimeout(async() => {
          loader.remove();
            response.data.venues.forEach((stadium) => {

                stadiums_wrapper.innerHTML += `
                <div class="stadium">
                <div class="stadium-info">
                    <h4 class="group">${stadium.id}</h4>
                    <h4 class="month">${stadium.venue_name}</h4>
                    <h4 class="day">Max row: ${stadium.maxrow}</h4>
                    <h4 class="date">Max col: ${stadium.maxcol}</h4>
                </div>
                <br>
                </div>
            `;
            }, 1000);
        });
    }

    
}
  
  fetchstadium();