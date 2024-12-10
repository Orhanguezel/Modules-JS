import teamsRanking, { scores } from './statistics.js';


function bestTeams(teams) {
    return {
      name: teamsRanking.first,
      score: scores.teamA,
    };
  }

export default bestTeams;