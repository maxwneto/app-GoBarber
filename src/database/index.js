// responsável for fazer conexão com banco
import Sequelize from 'sequelize';

// importar models
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointments';

// importar configurações do banco de dados
import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // variável cria conexão com o banco de dados
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
