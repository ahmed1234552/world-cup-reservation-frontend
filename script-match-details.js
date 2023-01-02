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

let matchData = {
    group: 'Group A',
    matchNumber: 1,
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

async function fetchMatch() {
    let matches_wrapper = document.querySelector('.matches');
    let loader = document.querySelector('#matches-loader');
    // TODO: Fetch the data from the matches api here
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
      matches_wrapper.innerHTML += `
        <div class="match">
          <div class="match-info">
              <h4 class="group">${matchData.group}</h4>
          </div>
          <div class="flags">
              <div class="home-flag">
                  <img src="https://world-cup.codsfli.com/flag/${matchData.homeTeam.abbreviation}.png" alt="${matchData.homeTeam.name}" class="flag">
              <h3 class="home-team">${matchData.homeTeam.name}</h3>
              </div>
              <span class="vs">
              VS
              </span>
              <div class="away-flag">
              <img src="https://world-cup.codsfli.com/flag/${matchData.awayTeam.abbreviation}.png" alt="${matchData.awayTeam.name}" class="flag">
              <h3 class="home-team">${matchData.awayTeam.name}</h3>
              </div>
          </div>
          <div class="time-area">
              <div class="time">
                  <h4 class="month">${matchData.time.month}</h4>
                  <h4 class="day">${matchData.time.day}</h4>
                  <h4 class="day">${matchData.time.date}</h4>
              </div>
              <h4 class="match-time">${matchData.time.time}</h4>
          </div>
          <div class="match-details">
              <a href="./Login.html" class="btn-secondary" id="reserve-seat">
                  <span>Reserve a seat</span>
              </a>
          </div>
        </div>
      `;
    // });
    }, 1000);

    if (isLogged) {
        // wait for the match area to be rendered then update the reserve seat button
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
        // add the edit button to the match area next to the reserve seat button
        setTimeout(() => {
            let match_details = document.querySelector('.match-details');
            match_details.innerHTML += `
                <a href="./edit-match.html" class="btn-secondary" id="edit-match">
                    <span>Edit Match Details</span>
                </a>
            `;
        }
        , 1000);
    }
    
}
  
  fetchMatch();