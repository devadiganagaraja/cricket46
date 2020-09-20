import {GameInfo, League} from "../service/data/league-data.service";
import { ArticleModel } from '../article/article.model';

export class HomeModel {
    tournaments: League[];
    tours: League[];
    postGameInfoList: GameInfo[];
    scheduledGameInfoList: GameInfo[];
    liveGameInfoList: GameInfo[];
    cricketArticles: ArticleModel[];
  }


  

