# BV Blog - POC

Aplicação desenvolvida em ReactJS como prova de conceito para uma vaga da Foursys.

**Aplicação em produção:** [bv-blog-poc.herokuapp.com](https://bv-blog-poc.herokuapp.com/) 

# Desafio

**Construir um blog onde**:
>1 – Deve ser feita a integração com a API [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

>2 – Deve ter listagem dos tópicos, simulação da criação, alteração e edição, sempre utilizando os respectivos endpoints fornecidos pela API.

>3 – O uso de Hooks deve ser o padrão.

>4 – O uso de Docker é esperado.

>5 – O uso de TDD com uma cobertura de pelo menos 70% do código é esperado.

>6 – Ter no repositório o desenho da solução, como utilizar e evoluir o código.

## Instruções de instalação em ambiente de desenvolvimento

**1 - Clonar este repositório**
``git clone <repo-url> .``

**2 - Instalar o projeto e suas dependencias com NodeJS**
``npm i``

**3 - Para servidor o projeto localmente**
``npm start``

> Acesse utilizando o endereço:** http://localhost:3000

**4 - O testes unitários podem ser executados a partir do seguinte comando**
``npm run test``

## Deploy com Docker

O Docker instalado no seu sistema é requisito.

As configurações do Docker se encontram no arquivo: ```Dockerfile``` na raíz do projeto
A imagem pode ser gerada utilizando o seguinte comando:

``docker build -t <seu-dominio>/bv-bloc-poc .``

E pode se testar a imagem em ambiente local com o seguinte comando. 

``docker run --rm -it -p 8080:8080 <seu-dominio>/bv-bloc-poc``

Poderá ser acessado em http://localhost:8080


