import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js'; // Importa a função para conectar ao banco de dados, definida no arquivo dbConfig.js, que provavelmente contém a lógica para estabelecer a conexão com o banco de dados MongoDB usando a string de conexão fornecida.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados MongoDB utilizando a string de conexão armazenada na variável de ambiente STRING_CONEXAO. A função conectarAoBanco retorna uma promessa que é resolvida quando a conexão é estabelecida, e o resultado (a conexão) é armazenado na variável conexao.

export async function getTodosOsPosts() { // Define uma função assíncrona chamada getTodosOsPosts que, como o nome sugere, será responsável por buscar todos os posts armazenados no banco de dados. A palavra-chave async indica que a função pode conter operações assíncronas, como a interação com o banco de dados.
    const db = conexao.db('imersao-instabytes'); // Obtém uma referência ao banco de dados 'imersao-instabytes' a partir da conexão estabelecida anteriormente.
    const colecao = db.collection('posts'); // Obtém uma referência à coleção 'posts' dentro do banco de dados selecionado. A coleção é onde os documentos (neste caso, os posts) são armazenados.
    return colecao.find().toArray(); // Executa uma consulta para encontrar todos os documentos na coleção 'posts'. O método find() retorna um cursor que pode ser usado para iterar sobre os resultados. O método toArray() converte o cursor em um array de documentos, que é então retornado pela função.
    }

export async function criarPost(novoPost) { // Define uma função assíncrona chamada criarPost que será responsável por inserir um novo post no banco de dados. A função recebe como parâmetro um objeto novoPost que contém os dados do novo post a ser inserido.
    const db = conexao.db('imersao-instabytes'); // Obtém uma referência ao banco de dados 'imersao-instabytes', da mesma forma que na função anterior.
    const colecao = db.collection('posts'); // Obtém uma referência à coleção 'posts'.
    return colecao.insertOne(novoPost); // Insere um único documento (o novo post) na coleção 'posts'. O método insertOne retorna um objeto que contém informações sobre a operação de inserção, como o ID do documento inserido.
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db('imersao-instabytes');
    const colecao = db.collection('posts');
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}