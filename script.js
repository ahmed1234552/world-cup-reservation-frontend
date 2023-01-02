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

// async function fetchPoints() {
//     let points_wrapper = document.querySelector('.points-container');
//     let loader = document.querySelector('.loader');
//     let url = 'https://world-cup.codsfli.com/points.php';
//     let data = await fetch(url);
//     if (data.ok) {
//         setTimeout(async() => {
//                     loader.remove();
//                     let response = await data.json();
//                     response.map((groups) => {
//                                 let sor = groups.teams.sort((a, b) => {
//                                     return a.position - b.position;
//                                 });
//                                 points_wrapper.innerHTML += `
//                 <div class="points-table">
//   <h1 class="group-heading">${groups.group}</h1>
//   <table>
//     <thead>
//       <tr>
//         <th>Team</th>
//         <th>MP</th>
//         <th>L</th>
//         <th>D</th>
//         <th>W</th>
//         <th>Pts</th>
//       </tr>
//     </thead>
//     <tbody>
//       ${sor
//         .map(
//           (team) => `
//       <tr>
//         <td>
//           <div class="d-a">
//             <img
//               src="${team.flag}"
//               alt="${team.Team}"
//               class="team-flag"
//             />
//             <span>${team.flag
//               .split('https://world-cup.codsfli.com/flag/')
//               .join('')
//               .split('.png')
//               .join('')}</span>
//           </div>
//         </td>
//         <td>${team.match_play}</td>
//         <td>${team.loss}</td>
//         <td>${team.draw}</td>
//         <td>${team.win}</td>
//         <td>${team.points}</td>
//       </tr>
//       `
//         )
//         .join('')}
//     </tbody>
//   </table>
// </div>
//                 `;
//       });
//     }, 1000);
//   }
// }
// fetchPoints();

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
  }

}

async function fetchMatches() {
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
            <h4>Match Number<span class="badge">${matchData.matchNumber}</span> </h4>
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
            <a href="./match-details.html" class="btn-secondary">
                <span>Match Details</span>
            </a>
        </div>
      </div>
    `;
  // });
  }, 1000);
}

fetchMatches();