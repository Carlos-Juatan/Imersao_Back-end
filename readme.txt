
DANDO INÍCIO AO PROJETO

1 - instaalr o node.js

2 - criar uma pasta para o projeto e abrir essa no vscode

3 - usar no prompt de comando do vscode o comando => npm init es6 -y
        se der qualquer erro tente mudar o prompt de comando (powershell) para o padrão do windows 
    
        npm => é um gerenciador de pacotes do node.js
        init => é a função para iniciar algo, no caso iniciar o es6
        es6 => especifica que a vamos usar a versão mais nova do javascript
        -y => faz essa isntalação sem pedir quaisquer outras configurações

4 - usar no prompt de comando do vscode o comando => npm isntall express

5 - criar o arquivo "server.js"

6 - para executar o servidor digitar no prompt de comando => node server.js

7 - para derrubar o servidor, no prompt de comando apertar 'Ctrl+c'

8 - no navegador ir par o endereço 'localhsot:3000'
        ( ouve uma modificação no endereço app.get onde o padrão seria usar somente o '/' mas foi usado  '/posts'
            portanto o endereço do servidor será 'localhsot:3000/posts' )

9 - no link => https://aistudio.google.com/app/apikey?utm_source=website&utm_medium=referral&utm_campaign=Alura-dev-backend-immersion&utm_content=
    voçê pode criar sua chave de api do google gemini

10 - usando no prompt de comando => node --watch server.js você pode não só executar o servidor como também observar ele rodando

11 - crie na raíz do projeto um arquivo '.env' para usar como variável de ambiente

12 - para não precisar digitar no prompt de comando um código imenso, no aquivo 'package.json' em 'scripts' e em 'dev' adicionar na string "node --watch --env-file=.env server.js"
    exemplo:
        "scripts": {
            "dev": "node --watch --env-file=.env server.js",
            "test": ""
        }
13 - agora para rodar o servidor basta escrever no prompt de comando => npm run dev

14 - crie uma pasta chamada 'src' e dentro desta pasta crie uma outra pasta chamada 'config'

15 - e dentro de 'config' crie um arquivo chamado 'dbConfig.js' 
        ( esse aquivo vai ser uma classe separada somente para configurar a conexão com o banco de dados )

16 - agora vamos instaalr o 'multer' escrevendo no prompt de comando => npm install multer


17 - no windows será nescessário criar a pasta 'uploads' na raíz do projeto, já no mac ou linux a pasta será criada sozinha





#############################################################################################################################
DÚVIDAS E PALAVRAS CHAVE PARA SE ATENTAR

    arrow functions ( () => {função} )

    servidor local usa a porta 3000

    quando o servidor estiver aberto, você pode derruba-lo no prompt de comando usando 'Ctrl+c'

    res.status(200) onde 200 é um código de status http que significa 'ok', ou seja, a requisição foi enviada e recebida com sucesso
        são inúmeros códigos de status de http e para consultar esses códigos usa-se a url = 'http.cat'

        faixa dos 100 => Continue 
        faixa dos 200 => Sucesso (ok) e derivados
        faixa dos 300 => Redirecionamentos
        faixa dos 400 => Erros do client
        faixa dos 500 => Errso do server

    'base de dados' é diferente de 'banco de dados', pois a 'base de dados' utiliza um 'array' para guardar vários dados em um lugar só

    no exemplo:

        const posts = [
            {
                descricao: 'uma foto teste',
                imagem: 'https://placecats.com/millie/300/150'
            }
        ]
    nós temos uma lista (array) e dentro dessa lista nós temos um 'objeto', que é uma estrutura composta de chave '{}' e valor
    como no exemplo:
        {
            descricao: 'uma foto teste',
            imagem: 'https://placecats.com/millie/300/150'
        }
    esse é o objeto e os valores são a descricao e imagem dentro desse objeto

    'mock' é o nome dado para quando voçê aloca dados localmente, ou seja, se você está alocando dados, você está mockando dados.

    'api' nada mais é que uma 'interface'
    'interface' é algo que está no meio de outras 2 coisas, algo que está 'interfaciando' as outras 2
        exemplo
            uma caneca com água está interfaciando a água,, ou seja, você não consegui acessar a água de forma direta, você precisa de algo para permitir o acesso a essa água


    'mongodb' é um banco de dados baseado em documentos. um tipo de banco de objetos, um dos mais usado em desenvolvimento em desenvolvimento web backend, muito usados em apis
        vamos acessar via nuvem no site 'mongodb altas'    

    'variável de ambiente' é uma forma simples e básica de protejer dados sencíveis

    'src' vem ser 'source' ou código fonte

    existe 3 responsabilidades na área de de desenvolvimento web
        1 - rota por onde chega as requisições
        2 - uma função que recebe a requisição e faz algo com ela
        3 - conexão com o banco de dados com a aplicação

    os 4 verbos http principais são
        1 - criar [post]
        2 - ler [get]
        3 - deletar [delete]
        4 - atualizar [put]

    'multer' é a ferramenta usada para gerenciar pastas e aquivos no servidor e no computador

    se voçê estiver no windows será nescessário configurar o formato do diretório do multer com o código a seguir

        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'uploads/');
            },
            filename: function (req, file, cb) {
                (null, file.originalname);
            }
        });

        const upload = multer ({dest:'./uploads', storage});

    caso estaja no mac ou linux será nescessário somente a linha

        const upload = multer ({dest:'./uploads'});

    'template string' é o uso de crase dupla `` com algo dentro dela 
    e é usada para juntar uma string com uma variável para criar um nova string
        exemplo:
            const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;