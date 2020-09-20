export class ArticleModel {
        public id: number;
        public title: string;
        public lastModified: string;
        public prePara: string;
        public postPara: string;
        public articleStatus: string;
        public authorInfo : AuthorInfo;
        public tags: string[];
        public claps: string[];
        public articleResponses: ArticleResponse[]
       
}

export class ArticleResponse {
    public articleId: number;
    public userName: string;
    public comment: string
}
export class AuthorInfo {
    constructor(
        public userName: string,
        public firstName: string,
        public lastName: string
    ){
        
    }
}

export class ApproveArticle {
    public playerId: number;
    public seriesId: number;
    public teamId: number;
    public approveRemarks: string;

}

export class ClapArticle{
    public userName: string;
    public commentId: number;
    public articleId: number;
}