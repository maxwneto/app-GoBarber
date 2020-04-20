// responsável for fazer conexão com banco
import Sequelize from 'sequelize';
import mongoose from 'mongoose';

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
    this.mongo();
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

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/gobarber',
      { useNewUrlParser: true, userFindAndModify: true }
    );
  }
}

export default new Database();
