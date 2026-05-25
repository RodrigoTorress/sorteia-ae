# Sorteia Ae

Projeto simples de sorteio de times feito com HTML, CSS e JavaScript puro.

A aplicação permite escolher um esporte, adicionar os jogadores um por vez e
sortear automaticamente dois times.

## Funcionalidades

- Seleção do esporte
- Cadastro de jogadores por um campo de texto simples
- Listagem dos jogadores adicionados
- Contador de jogadores adicionados e jogadores faltantes
- Validação da quantidade necessária para cada esporte
- Sorteio automático em Time A e Time B
- Botão para preencher jogadores de exemplo
- Botão para limpar formulário e resultado

## Esportes disponíveis

| Esporte | Jogadores por time | Total necessário |
| --- | ---: | ---: |
| Vôlei | 6 | 12 |
| Esporte de Dupla | 2 | 4 |
| Basquete | 6 | 12 |
| Futebol | 11 | 22 |

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro

## Estrutura do projeto

- `index.html`: página principal
- `css/style.css`: estilos da página
- `js/sports.js`: dados dos esportes e jogadores de exemplo
- `js/draw.js`: funções de validação, embaralhamento e sorteio
- `js/app.js`: integração da página com o JavaScript

## Como executar

Como o projeto usa apenas HTML, CSS e JavaScript puro, não é necessário
instalar dependências.

Para rodar o projeto, abra a pasta em um editor como VS Code ou Cursor.
Depois, clique com o botão direito do mouse no arquivo `index.html` e escolha
uma opção que abra a página no navegador, como `Open with Live Server`,
`Open in Browser` ou outra opção parecida.

O importante é abrir o `index.html` em um navegador, pois é nele que o HTML, o
CSS e o JavaScript serão executados.

## Como usar

1. Escolha um esporte.
2. Digite o nome de um jogador.
3. Clique em `Adicionar jogador`.
4. Repita até atingir a quantidade necessária.
5. Clique em `Sortear times`.
6. Veja o resultado em `Time A` e `Time B`.

## Organização do JavaScript

- `sports.js`: guarda os dados dos esportes e os jogadores de exemplo.
- `draw.js`: contém as funções de validação, embaralhamento e sorteio.
- `app.js`: conecta a página HTML com as funções JavaScript.

## Objetivo do projeto

Este projeto foi criado como trabalho simples de faculdade, com foco em praticar
conceitos básicos de desenvolvimento web:

- estrutura HTML
- estilização com CSS
- manipulação do DOM com JavaScript
- eventos de clique e teclado
- arrays e funções
- validações simples
