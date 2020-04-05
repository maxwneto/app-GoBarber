# Rodando pela Primeira vez
Para rodar a aplicação, você irá precisar Git, Node.js, Yarn e Docker instalados no seu computador.
No terminal rode:

\# Clone este repositório<br>
$ git clone https://github.com/maxwneto/app-GoBarber.git

\# Entre na pasta criada<br>
$ cd app-GoBarber

\# Instale as dependências<br>
$ yarn install

\# Crie um container postgres no Docker<br>
$ docker run --name database -e POSTGRES_PASSWORD=adm1234 -p 5432:5432 -d postgres

\# Inicie o container database<br>
$ docker start datase

\# Crie o banco de dados chamado gobarber utilizando o Postbird.<br>

\# Rode as Migrations<br>
$ yarn sequelize db:migrate

\# Rode o servidor<br>
$ yarn dev

