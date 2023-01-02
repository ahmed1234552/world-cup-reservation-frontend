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

renderPage();

async function fetchstadium() {
    let stadiums_wrapper = document.querySelector('.stadiums');
    let loader = document.querySelector('#stadiums-loader');
    // TODO: Fetch the data from the stadiums api here
    // let url = 'https://world-cup.codsfli.com/points.php';
    // let data = await fetch(url);
    // if (data.ok) {
    setTimeout(async() => {
      loader.remove();
                  // let response = await data.json();
                  // response.map((groups) => {
                  //             let sor = groups.teams.sort((a, b) => {
                  //                 return a.position - b.position;
                  //             });
      stadiums_wrapper.innerHTML += `
        <div class="stadium">
          <div class="stadium-info">
              <h4 class="group">${stadiumData.group}</h4>
          </div>
          <div class="flags">
              <div class="home-flag">
                  <img src="https://world-cup.codsfli.com/flag/${stadiumData.homeTeam.abbreviation}.png" alt="${stadiumData.homeTeam.name}" class="flag">
              <h3 class="home-team">${stadiumData.homeTeam.name}</h3>
              </div>
              <span class="vs">
              VS
              </span>
              <div class="away-flag">
              <img src="https://world-cup.codsfli.com/flag/${stadiumData.awayTeam.abbreviation}.png" alt="${stadiumData.awayTeam.name}" class="flag">
              <h3 class="home-team">${stadiumData.awayTeam.name}</h3>
              </div>
          </div>
          <div class="time-area">
              <div class="time">
                  <h4 class="month">${stadiumData.time.month}</h4>
                  <h4 class="day">${stadiumData.time.day}</h4>
                  <h4 class="day">${stadiumData.time.date}</h4>
              </div>
              <h4 class="stadium-time">${stadiumData.time.time}</h4>
          </div>
          <div class="stadium-details">
              <a href="./Login.html" class="btn-secondary" id="reserve-seat">
                  <span>Reserve a seat</span>
              </a>
          </div>
        </div>
      `;
    // });
    }, 1000);

    if (isLogged) {
        // wait for the stadium area to be rendered then update the reserve seat button
        setTimeout(() => {
            let reserve_seat = document.querySelector('#reserve-seat');
            reserve_seat.setAttribute('href', './reserve-seat.html');
            reserve_seat.innerHTML = `
                <span>Reserve a seat</span>
            `;
        }
        , 1000);
    }
    if (isManager || isAdmin) {
        // add the edit button to the stadium area next to the reserve seat button
        setTimeout(() => {
            let stadium_details = document.querySelector('.stadium-details');
            stadium_details.innerHTML += `
                <a href="./edit-stadium.html" class="btn-secondary" id="edit-stadium">
                    <span>Edit stadium Details</span>
                </a>
            `;
        }
        , 1000);
    }
    
}
  
  fetchstadium();