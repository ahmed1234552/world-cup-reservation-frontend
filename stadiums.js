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