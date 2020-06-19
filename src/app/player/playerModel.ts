export class PlayerStat {
    formatName: string;
    matches: string;
    runs: string;
    wickets: string;
    highScore: string;
    bestBowling: string;
    battingStrikeRate: string;
    bowlingStrikeRate: string;
    battingAverage: string;
    bowlingAverage: string;
    economyRate: string;
}

export class PlayerModel {
    name: string;
    age: number;
    battingStyle: string;
    bowlingStyle: string;
    country: string;
    playerStats: PlayerStat[];
    }
