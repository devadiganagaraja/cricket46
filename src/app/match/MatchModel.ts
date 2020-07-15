export class MatchModel {
    id: number;
    leagueId: number;
    season: number;
    leagueName: string;
    gameClass: string;
    gameNote: string;
    team1Name: string;
    team2Name: string;
    date: Date;
    team1Score: string[];
    team2Score: string[];
    team1Overs: string[];
    team2Overs: string[];
    gameStatus: string
    scoreCards: ScoreCard[]
    leaders: Leaders[]
    manOfTheMatch: ManOfTheMatch
    toss: string;
    venue: string;
    liveScore: LiveScore;
}

export class LiveScore{
    striker: BattingScoreLeaf;
    nonStriker: BattingScoreLeaf;
    bowler: BowlingScoreLeaf;
    otherBowler: BowlingScoreLeaf;
}

export class ManOfTheMatch {
    playerName: string;
    teamName: string;
}
export class Leaders {
    inningsInfo: InningsInfo;
    battingLeaders: BattingScoreLeaf[]
    bowlingLeaders: BowlingScoreLeaf[]
}

export class InningsInfo{

    runs: number;
    wickets : number;
    overs: string;
    overLimit: string;
    runRate: string;
    target: number;
    legByes: number;
    byes: number;
    noBalls: number;
    wides: number;
    lead: number;
    battingTeamId: number;
    battingTeamName: string;
    liveInnings: boolean;
    extras: number;
    inningsName: string;
}


export class ScoreCard {

    inningsInfo: InningsInfo;
    battingScoreCard: BattingScoreCard;
    bowlingScoreCard: BowlingScoreCard;
}

export class Extras{
   total: number;
    byes: number;
    legbyes: number;
    wides: number;
    noballs: number;
}

export class BattingScoreCard {
    private battingScoreLeaves : BattingScoreLeaf []
}

export class BattingScoreLeaf {
    playerName: string;
    dismissalText: string;
    runs: number;
    balls: number;
    fours: number;
    sixes: number;
    strikeRate: string;

}


export class BowlingScoreCard{
    private bowlingScoreLeaves : BowlingScoreLeaf []
}


export class BowlingScoreLeaf {
    playerName: string;
    runs: number;
    maidens: number;
    wickets: string;
    overs: string;
    economyRate: string;
}
