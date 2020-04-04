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

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    console.log(decoded);

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
