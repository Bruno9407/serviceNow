import ClienteEntity from "../Entity/clienteEntity";
import ClientesRepository from "../Repository/clientesRepository";
import ClientesTransform from "../Transform/clientesTransform";

export class ClienteService {
    private clientesRepository: ClientesRepository;
    private clientesTransform: ClientesTransform;

    constructor() {
        this.clientesRepository = new ClientesRepository();
        this.clientesTransform = new ClientesTransform();
    }

    private transformaDadosBrutosEmCliente(nome: string, email?: string, telefone?: string): ClienteEntity {
        return this.clientesTransform.transformaDadosBrutosEmCliente(nome, email, telefone);
    }

    public salvaCliente(nome: string, email?: string, telefone?: string): string {
        const cliente = this.transformaDadosBrutosEmCliente(nome, email, telefone);
        return this.clientesRepository.salvaCliente(cliente);
    }

    public buscaClientePorId(id?: number) {
        return this.clientesRepository.buscaClientePorId(id);
    }

    public async buscaTodosClientes() {
        return await this.clientesRepository.buscaTodosClientes();
    }

    public buscaClientePorNome(nome?: string) {
        return this.clientesRepository.buscaClientePorNome(nome);
    }
}

export default ClienteService;