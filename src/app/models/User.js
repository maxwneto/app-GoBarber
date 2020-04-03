import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    // criptografia da senha antes de inserir a mesma no banco
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  /*
  metodo para verificar se a senha do usuário está correta
  se a senha for igual ele retorna true
  e senão retorna falsa
  */
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
