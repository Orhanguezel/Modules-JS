// Functions erstellen
// 1. teamsnamen zeigen
// 2. wie viel Teams haben wir
// 3. nur first name Players eines Teams zeigen



import { allTeams } from "./teams.js";

// 1. Teamsnamen zeigen
function showTeamNames(teams) {
  return teams.map((team) => team.name);
}

// const getTeamNames = (teams) => teams.map((team) => team.name);

// 2. Wie viel Teams haben wir
function countTeams(teams) {
  return teams.length;
}

// const getCountTeams = (teams) => teams.length;

// 3. Nur first name Players eines Teams zeigen
function showFirstNames(team) {
  return team.players.map((player) => player.firstName);
}

// const getFirstNames = (team) => team.players.map((player) => player.firstName);


export { showTeamNames, countTeams, showFirstNames };
//named export



