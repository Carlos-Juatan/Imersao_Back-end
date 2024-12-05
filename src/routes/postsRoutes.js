import express from 'express'; // Importa o framework Express.js para criar a aplicação web.
import multer from 'multer'; // Importa o módulo multer para lidar com o upload de arquivos.
import cors from 'cors';
import { atualizarNovoPost, listarPostes, postarNovoPost, uploadImagem } from '../controllers/postsController.js'; // Importa as funções que controlam as rotas de posts do arquivo postsController.js.

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) { // Define a função de destino para salvar os arquivos.
        // Especifica o diretório para armazenar as imagens enviadas
        cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado em produção.
    },
    filename: function (req, file, cb) { // Define a função para gerar o nome do arquivo.
        // Mantém o nome original do arquivo por simplicidade.
        cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção.
    }
});

const upload = multer({dest:'./uploads', storage}); // Cria uma instância do multer com as configurações de armazenamento definidas.

//const upload = multer ({dest:'./uploads'}); // Versão mais simples para sistemas Linux/Mac.

const routes = (app) => { // Define uma função que recebe a aplicação Express como parâmetro e configura as rotas.
    app.use(express.json()); // Habilita o middleware para analisar o corpo das requisições JSON.
    app.use(cors(corsOptions));
    
    app.get('/posts', listarPostes); // Define a rota GET para buscar todos os posts, utilizando a função listarPostes como handler.

    app.post('/posts', postarNovoPost); // Define a rota POST para criar um novo post, utilizando a função postarNovoPost como handler.

    app.post('/upload', upload.single('imagem'), uploadImagem); // Define a rota POST para fazer upload de uma imagem, utilizando o middleware multer para tratar o arquivo e a função uploadImagem como handler.

    app.put('/upload/:id', atualizarNovoPost);
}

export default routes; // Exporta a função routes para ser utilizada em outros módulos.