const service = require('../../domain/Services/OngService')
module.exports = {    
    async index(request, response){
        const ongs = await service.getAllOngs()
        
        return response.json(ongs)
    },
    async create(request, response){        
        const id = await service.createOng(request.body) 

        return response.json({id})
    }
}