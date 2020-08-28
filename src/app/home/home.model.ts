import {GameInfo} from "../service/data/league-data.service";

export class HomeModel {
    tournaments: Tournament[];
    tours: Tournament[];
    postGameInfoList: GameInfo[];
    scheduledGameInfoList: GameInfo[];
    liveGameInfoList: GameInfo[];
  }
  

  export class Tournament {
    id: number;
    abbreviation: string;
    name: string;
    tournament: boolean;
    childLeagues: any[];
  }