import { QueryResult } from "mysql2";
import ClienteEntity from "../Entity/clienteEntity";

export class clientesTransform {
    public transformaDadosBrutosEmCliente(nome: string, email?: string, telefone?: string) {
        return new ClienteEntity({nome: nome, email: email, telefone: telefone});
    }

    public transformaResultEmEntity(result: any[]) {
        const listaClientes = result.map((cliente) => new ClienteEntity(cliente));
        console.log("Transformando resultado em entidade:", listaClientes);
        
        return listaClientes;
    }
}

export default clientesTransform;