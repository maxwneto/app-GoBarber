import Router from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();
/* utilizar async afim de poder usar o wait,
 uma vez que o sequelize realiza o CRUD de modo assincrono
 */
routes.post('/users/', UserController.store);
export default routes;
