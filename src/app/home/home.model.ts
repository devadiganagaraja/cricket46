import {GameInfo, League} from "../service/data/league-data.service";

export class HomeModel {
    tournaments: League[];
    tours: League[];
    postGameInfoList: GameInfo[];
    scheduledGameInfoList: GameInfo[];
    liveGameInfoList: GameInfo[];
  }
  

