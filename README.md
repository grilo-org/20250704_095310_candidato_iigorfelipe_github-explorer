
# GitHub Explorer

<div align="center">
  <img src="https://github.com/iigorfelipe/github/assets/87145566/9bc0986c-cb6d-418d-9228-9f23f650955a" />
</div>

`Captura de tela do GitHub Explorer exibindo os repositórios do usuário 'ashtom' no modo de visualização em grade. Os repositórios estão filtrados por 'forks' e ordenados por 'última atualização'.`

## Visão Geral

O GitHub Explorer é uma aplicação web que permite aos usuários pesquisar por usuários do GitHub e listar todos os seus repositórios públicos. A busca por usuários e repositórios é realizada através da `API` pública do GitHub. A aplicação oferece várias maneiras de visualizar os repositórios, incluindo lista, grade e carrossel, com cada modo de visualização tendo suas próprias propriedades únicas.

## Funcionalidades Principais

- Controle de estados a partir da url.
- Pesquisa de usuários do GitHub para listar seus repositórios.
- Visualização dos repositórios em lista, grade ou carrossel.
- Filtragem dos repositórios por tipo (fork, arquivado, modelo) e linguagem.
- Ordenação dos repositórios por data de atualização, nome e quantidade de estrelas recebidas.
- Feedback das filtragens realizadas.
- Redirecionamento para mais informações sobre o conteúdo clicado, como repositórios, usuários, tópicos, etc.

## Tecnologias Utilizadas

- TypeScript
- React - `Vite (react-ts)`
- Material-UI
- Axios

## Temas

O projeto inclui suporte para dois temas: `modo claro` e `modo escuro`. O tema definido por padrão segue as configurações do navegador do usuário. Caso contrário, o modo escuro será aplicado.

## Como Executar o Projeto

- Clone o repositório para sua máquina local.
- Entre na pasta do projeto.
- Instale as dependências utilizando npm install.
- Execute o projeto utilizando npm run dev.<br>

__obs: Cerifique-se de estar com o node na `versão 18` ou superior

```bash
git clone git@github.com:iigorfelipe/github-explorer.git
```

```bash
cd github-explorer
```

```bash
npm install
```

```bash
npm run dev
```

## API Github

- [Usuario - Api](https://api.github.com/users/username)

- [Repositorios - Api](https://api.github.com/users/username/repos)

- [Estrelas - Api](https://api.github.com/users/username/starred)

__obs: mudar "username" pelo nome do usuario que deseja pesquisar

## Dependências

- node v18.5.0 (npm v8.12.1)

## Referências

- [Cores das linguagens - Github](https://gist.github.com/robertpeteuil/bb2dc86f3b3e25d203664d61410bfa30)

- [Carrossel - Docs](https://www.npmjs.com/package/react-material-ui-carousel)

## Observação

Este projeto é uma versão aprimorada do [Github repos](https://github.com/iigorfelipe/github-repos), abordando funcionalidades anteriormente incompletas. A nova versão foi completamente refinada e está totalmente funcional, com filtragens e temas implementados, aguardando apenas ajustes finos no tema claro e a realização do deploy.

## Autor

- [Igor Felipe - Linkedin](https://www.linkedin.com/in/iigor-felipe/)