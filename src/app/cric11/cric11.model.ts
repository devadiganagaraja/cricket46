

export class Team1 {
    teamName: string;
    score: string;
    winner: boolean;
    imageURL: string;
}

export class Team2 {
    teamName: string;
    score: string;
    winner: boolean;
    imageURL: string;
}

export class Event {
    venue: string;
    eventId: string;
    startDate: string;
    team1: Team1;
    team2: Team2;
    type: string;
    note: string;
    manOfTheMatch?: any;
    period: number;
    dayNumber: number;
    description: string;
    detail: string;
    state: string;
    leagueId: number;
    leagueName: string;
    leagueStartDate: string;
    leagueEndDate: string;
    leagueYear: number;
    internationalClassId: number;
    team1Name: string;
    team2Name: string;
    gameStatus: string;
    team1Score: string;
    team2Score: string;
}

export class SquadPlayers {
    playerName: string;
    imageURL: string;
    teamId: number;
    index: number;
    teamIndex: number;
    weightage: number;
    typeImage: string;
  
}

export class Squad1 {
    teamName: string;
    players: SquadPlayers[];
}

export class Squad2 {
    teamName: string;
    players: SquadPlayers[];
}

export class MyTeam {
    players: Array<SquadPlayers>;
}

export class UserSquadPlayers {
    playerName: string;
    runs: number;
    teamName: string;
    runsPoints: number;
    wickets: number;
    wicketsPoints: number;
    fours: number;
    foursPoints: number;
    sixes: number;
    sixesPoints: number;
    medians: number;
    mediansPoints: number;
}

export class UserSquad {
    totalPoint: number;
    userSquadPlayers: UserSquadPlayers[];
}

export class PlayElevenModel {
    gameInfo: Event;
    squad1: Squad1;
    squad2: Squad2;
    userSquad?: UserSquad;
}

export class PlayerBodyPost {
    userName: string;
    password: string;
    playerIds: string;
}

export class LeaderBoardModel {
    userName: string;
    points: number;
    position: number;
}



