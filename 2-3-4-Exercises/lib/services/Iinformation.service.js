const {NotFoundError} = require('@aliceo2/web-ui')

class InformationService {
    constructor(){
        this._information= {
            james: 'software enigneer here'
        }
    }


    getInformationByUser(name){
        if (!this._information[name]){
                
        }
    }
}

module.exports.InformationService = InformationService