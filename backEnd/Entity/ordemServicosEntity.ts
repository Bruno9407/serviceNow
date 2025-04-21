import ClienteEntity from "./clienteEntity";
import ProdutosEntity from "./produtosEntity";
import ServicosEntity from "./servicosEntity";

export class OrdemServicoEntity {
    id?: Number;
    cliente?: ClienteEntity;
    servicos?: ServicosEntity[];
    produtos?: ProdutosEntity[];
    valorTotal?: Number;
    data?: Date;
    status?: String;
    observacao?: String;
}

export default OrdemServicoEntity;