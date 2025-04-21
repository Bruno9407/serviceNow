export class ProdutosEntity {
    id?: Number;
    nome?: String;
    descricao?: String;
    preco?: Number;
    
    constructor(id?: Number, nome?: String, descricao?: String, preco?: Number) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
}

export default ProdutosEntity;