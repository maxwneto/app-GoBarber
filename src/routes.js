import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// rota para validação de usuário
routes.post('/sessions', SessionController.store);
// rota para cadastro de usuário
routes.post('/users/', UserController.store);

/*
middleware global  utilizado antes das rotas que
necessitam validação de perifl de acesso
*/
routes.use(authMiddleware);

// rota para update de usuário
routes.put('/users/', UserController.update);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: 'true' });
});

export default routes;

// middleware para validar se o usuário está logado
