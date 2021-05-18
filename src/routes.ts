import { Router } from 'express'
import CepController from './controllers/CepController'
const routes = Router();

routes
    .get('/', (req, res) => {
        res.send('Rodando')
    })
    .get('/cep', CepController.Cep)

export default routes;