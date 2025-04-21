import { Connection } from "mysql2/typings/mysql/lib/Connection";
import ClienteEntity from "../Entity/clienteEntity";
import ClientesTransform from "../Transform/clientesTransform";
import ConexaoDB from "./conexaoDB";

export class ClientesRepository {
    salvaCliente(cliente?: ClienteEntity): string{
        const db = new ConexaoDB();
        db.getConnection().then((connection) => {
            const sql = `INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)`;
            const values = [cliente?.nome, cliente?.email, cliente?.telefone];
            connection.query(sql, values, (error: Error | null) => {
                if (error) {
                    return `Erro ao inserir cliente: ${error}`;
                }
            });
        }).catch((error) => {
            return `Erro ao obter conexão com o banco de dados: ${error}`;
        });

        return "Cliente inserido com sucesso.";
    }

    buscaClientePorId(id?: number){
        const db = new ConexaoDB();
        db.getConnection().then((connection) => {
            const sql = `SELECT * FROM clientes WHERE id = ?`;
            const values = [id];
            
            connection.query(sql, values, (error: Error | null, results: any[]) => {
                if (error) {
                    console.error("Erro ao buscar cliente:", error);
                } else if (results.length > 0) {
                    console.log("Cliente encontrado:", results[0]);
                } else {
                    console.log("Cliente não encontrado.");
                }
            });
        }).catch((error) => {
            console.error("Erro ao obter conexão com o banco de dados:", error);
        });
    }

    private async fazBusca(sql: string): Promise<any[]> {
        const db = new ConexaoDB();
        try {
            const connection = await db.getConnection();
            const [results]: any[] = await connection.promise().query(sql);
            return results;
        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
            throw error;
        }
    }

    async buscaTodosClientes(): Promise<ClienteEntity[]> {
        const sql = `SELECT * FROM clientes`;
        try {
            // Aguarda o resultado da função fazBusca
            const results = await this.fazBusca(sql);

            // Transforma os resultados em entidades ClienteEntity
            const clientesTransform = new ClientesTransform();
            const listaClientes = clientesTransform.transformaResultEmEntity(results);

            return listaClientes; // Retorna a lista de clientes transformados
        } catch (error) {
            console.error("Erro ao buscar todos os clientes:", error);
            throw error; // Lança o erro para que o chamador possa tratá-lo
        }
    }

    buscaClientePorNome(nome?: string){
        const db = new ConexaoDB();
        db.getConnection().then((connection) => {
            const sql = `SELECT * FROM clientes WHERE nome LIKE ?`;
            const values = [`%${nome}%`];
            
            connection.query(sql, values, (error: Error | null, results: any[]) => {
                if (error) {
                    console.error("Erro ao buscar cliente:", error);
                } else if (results.length > 0) {
                    console.log("Cliente encontrado:", results[0]);
                } else {
                    console.log("Cliente não encontrado.");
                }
            });
        }).catch((error) => {
            console.error("Erro ao obter conexão com o banco de dados:", error);
        });
    }
}

export default ClientesRepository;