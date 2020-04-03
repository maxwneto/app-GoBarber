import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// rota para cadastro de usuário
routes.post('/users/', UserController.store);

// rota para validação de usuário
routes.post('/sessions', SessionController.store);

export default routes;
