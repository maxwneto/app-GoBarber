// responsável for fazer conexão com banco
import Sequelize from 'sequelize';

// importar models
import User from '../app/models/User';

// importar configurações do banco de dados
import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // variável cria conexão com o banco de dados
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
