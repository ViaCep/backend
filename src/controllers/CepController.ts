import { NextFunction, Request, Response } from 'express';
import api from '../services/api'

const CepController = module.exports = {

    async Cep(req: Request, res: Response){
        try{
            const {cep} = req.query;
            if(cep){
                const {data} = await api.get(`/${cep}/json`)
                return res.json(data);
            }else {
                res.json({erro: 'Não foi informado nenhum CEP'})
            }
            
        }catch(err){
            res.json({erro: 'Erro interno, tente novamente mais tarde.'})
        }
    }

}

export default CepController;