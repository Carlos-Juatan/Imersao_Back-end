import { MongoClient } from 'mongodb'; // Importa o módulo MongoClient da biblioteca MongoDB, que é essencial para estabelecer a conexão com o banco de dados.

export default async function conectarAoBanco(stringConexao) { // Define uma função assíncrona chamada conectarAoBanco que recebe como parâmetro a string de conexão do banco de dados. A palavra-chave async indica que a função pode conter operações assíncronas, como a conexão com o banco de dados.

    let mongoClient; // Declara uma variável para armazenar o cliente MongoDB, que será usado para realizar operações no banco de dados após a conexão ser estabelecida.

    try { // Inicia um bloco try...catch para tratar possíveis erros durante o processo de conexão.
        mongoClient = new MongoClient(stringConexao); // Cria uma nova instância do MongoClient, passando a string de conexão como argumento. Essa instância representa a conexão com o banco de dados.
        console.log('Conectando ao cluster do banco de dados...'); // Exibe uma mensagem no console indicando que o processo de conexão está em andamento.
        await mongoClient.connect(); // Conecta-se ao banco de dados de forma assíncrona. A palavra-chave await faz com que a execução da função pause até que a conexão seja estabelecida.
        console.log('Conectado ao MongoDB Atlas com sucesso!'); // Exibe uma mensagem de sucesso caso a conexão seja estabelecida com sucesso.

        return mongoClient; // Retorna o cliente MongoDB para que possa ser utilizado em outras partes do código para realizar operações no banco de dados.
    } catch (erro) { // Captura qualquer erro que possa ocorrer durante o processo de conexão.
        console.error('Falha na conexão com o banco!', erro); // Exibe uma mensagem de erro no console, junto com o objeto de erro para facilitar a depuração.
        process.exit(); // Encerra a aplicação caso ocorra algum erro fatal durante a conexão, evitando que a aplicação continue a executar com um erro não tratado.
    }
}