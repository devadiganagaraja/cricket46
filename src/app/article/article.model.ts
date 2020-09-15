export class ArticleModel {
    constructor(
        public id: number,
        public title: string,
        public lastModified: string,
        public prePara: string,
        public postPara: string,
        public articleStatus: string,
        public articleImage : string ){}
        
}