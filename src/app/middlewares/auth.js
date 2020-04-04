import jwt from 'jsonwebtoken';
/*
função promisify pega função callback e
transforma em uma função que pode ser utilizada
async / await
*/
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  // inserir header em um  objeto
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  /*
  criar array para separar Bearer e Token
  a virgula descarta conteúdo da primeira posição
  que é o bearer
  */
  const [, token] = authHeader.split(' ');

  try {
    //
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    console.log(decoded);

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
