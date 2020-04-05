# Rodando pela Primeira vez
Para rodar a aplicação, você irá precisar Git, Node.js, Yarn, Docker e Postbird instalados no seu computador.
No terminal rode:

\#Clone este repositório
$ git clone https://github.com/maxwneto/app-GoBarber.git

Entre na pasta criada
$ cd app-GoBarber

Instale as dependências
$ yarn install

Crie um container postgres no Docker
$ docker run --name database -e POSTGRES_PASSWORD=adm1234 -p 5432:5432 -d postgres

Inicie o container database
$ docker start datase

Crie o banco de dados chamado gobarber utilizando o Postbird.

Rode as Migrations
$ yarn sequelize db:migrate

Rode o servidor
$ yarn dev

