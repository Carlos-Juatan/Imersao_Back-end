import fs from 'fs'; // Importa o módulo fs do Node.js, responsável por interagir com o sistema de arquivos.
import { getTodosOsPosts, criarPost } from "../models/postsModel.js"; // Importa as funções getTodosOsPosts e criarPost do módulo postsModel, que provavelmente contém a lógica para interagir com o banco de dados e realizar operações relacionadas aos posts.

export async function listarPostes (req, res) { // Define uma função assíncrona chamada listarPostes, que será utilizada como um handler para a rota GET '/posts'. Essa função recebe como parâmetros o objeto de requisição (req) e o objeto de resposta (res).
    const posts = await getTodosOsPosts(); // Chama a função getTodosOsPosts de forma assíncrona para obter todos os posts do banco de dados e armazena o resultado em uma constante chamada posts.
    res.status(200).json(posts); // Envia uma resposta HTTP com status 200 (OK) e o array de posts no formato JSON para o cliente que fez a requisição.
}

export async function postarNovoPost(req, res) { // Define uma função assíncrona chamada postarNovoPost, que será utilizada para criar um novo post.
    const novoPost = req.body; // Obtém os dados do novo post a partir do corpo da requisição (req.body).
    try { // Inicia um bloco try...catch para tratar possíveis erros durante a criação do post.
        const postCriado = await criarPost(novoPost); // Chama a função criarPost para inserir o novo post no banco de dados e armazena o resultado (o documento inserido) em postCriado.
        res.status(200).json(postCriado); // Envia uma resposta HTTP com status 200 (OK) e o post criado no formato JSON.
    } catch(erro) { // Captura qualquer erro que possa ocorrer durante a criação do post.
        console.error(erro.message); // Imprime uma mensagem de erro no console para facilitar a depuração.
        res.status(500).json({'Erro':'Falha na requisição'}); // Envia uma resposta HTTP com status 500 (Internal Server Error) e uma mensagem de erro genérica para o cliente.
    }
}

export async function uploadImagem(req, res) { // Define uma função assíncrona chamada uploadImagem, que será utilizada para fazer o upload de uma imagem e criar um novo post.
    const novoPost = { // Cria um objeto para representar o novo post, com os dados recebidos da requisição.
        descricao: '', // Inicializa a descrição do post como uma string vazia.
        imgUrl: req.file.originalname, // Define o caminho da imagem utilizando o nome original do arquivo enviado.
        alt: '' // Inicializa a tag alt da imagem como uma string vazia.
    };

    try { // Inicia um bloco try...catch para tratar possíveis erros durante o upload e a criação do post.
        const postCriado = await criarPost(novoPost); // Cria um novo post no banco de dados.
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; // Constrói o novo caminho da imagem, usando o ID do post inserido.
        fs.renameSync(req.file.path, imagemAtualizada); // Move o arquivo da imagem para o novo local, renomeando-o.
        res.status(200).json(postCriado); // Envia uma resposta HTTP com status 200 (OK) e o post criado no formato JSON.
    } catch(erro) { // Captura qualquer erro que possa ocorrer durante o processo.
        console.error(erro.message); // Imprime uma mensagem de erro no console.
        res.status(500).json({'Erro':'Falha na requisição'}); // Envia uma resposta HTTP com status 500 (Internal Server Error) e uma mensagem de erro genérica.
    }
}