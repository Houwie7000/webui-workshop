import { InvalidInputError, updateAndSendExpressResponseFromNativeError } from "@aliceo2/web-ui"

export class InformationController {
    constructor(informationService){
        this._informationService = informationService
    }

    retrieveInformationHandler(req,res){
        const name = req.params.name
        
        if(!name) updateAndSendExpressResponseFromNativeError(res,new InvalidInputError());

        try {
            const information = this._informationService.getInformationByUsername(name)
            res.json(information)
        } catch (error) {
            updateAndSendExpressResponseFromNativeError(res,error);
        }

    }
}