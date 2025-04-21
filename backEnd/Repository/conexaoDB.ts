import mysql from "mysql2";

export class ConexaoDB {
    private connection: mysql.Connection | null = null;

    public async getConnection(): Promise<mysql.Connection> {
        if (!this.connection) {
            try {
                this.connection = await mysql.createConnection({
                    host: 'localhost', 
                    user: 'root',      
                    password: '', 
                    database: 'servicenow' 
                });
                console.log('Conexão com o banco de dados estabelecida com sucesso.');
            } catch (error) {
                console.error('Erro ao conectar ao banco de dados:', error);
                throw error;
            }
        }
        return this.connection;
    }

    public async closeConnection(): Promise<void> {
        if (this.connection) {
            await this.connection.end();
            console.log('Conexão com o banco de dados encerrada.');
            this.connection = null;
        }
    }
}

export default ConexaoDB;