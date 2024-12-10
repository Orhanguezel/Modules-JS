import * as teams from "./modules/teams.js";
import {
  showTeamNames,
  countTeams,
  showFirstNames,
} from "./modules/actions.js";
import teamsRanking, { scores } from "./modules/statistics.js";
import bestTeams from"./modules/bestTeam.js";


console.log("We have:", showTeamNames(teams.allTeams));
console.log("We have:", countTeams(teams.allTeams), "teams");
console.log("First names:", showFirstNames(teams.teamC));

console.log("Team Rankings:", teamsRanking);
console.log("Scores:", scores);

const best = bestTeams(teams.allTeams);
console.log("Best Team:", best);



