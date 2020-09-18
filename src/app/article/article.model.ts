export class ArticleModel {
    constructor(
        public id: number,
        public title: string,
        public lastModified: string,
        public prePara: string,
        public postPara: string,
        public articleStatus: string){}
}

export class ApproveArticle {
    public playerId: number;
    public seriesId: number;
    public teamId: number;
    public approveRemarks: string;

}