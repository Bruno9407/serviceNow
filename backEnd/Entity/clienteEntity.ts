export class ClienteEntity {
    id?: Number;
    nome?: String;
    email?: String;
    telefone?: String;
    
    constructor(params?: ClienteEntity) {
        this.id = params?.id;
        this.nome = params?.nome;
        this.email = params?.email;
        this.telefone = params?.telefone;
    }
}

export default ClienteEntity;