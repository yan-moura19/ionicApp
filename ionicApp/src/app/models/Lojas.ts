export class Lojas {
    id: Number;
    nome: string;
    distancia: Number;
    dataCriacao: Date;
    urlImg: string;
    
    constructor(id: Number, nome: string,distancia: Number, dataCriacao: Date, urlImg: string){
            this.dataCriacao = dataCriacao;
            this.distancia = distancia;
            this.id = id;
            this.nome = nome;
            this.urlImg = urlImg;

        }
}