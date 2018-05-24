import DemoService from '../services/demo'

export default class DemoController{

    constructor(){
        this._demoService = new DemoService();
    }

    /**
     * index show message from mongodb
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    index(req, res, next){
        try {
            // const data = this._demoService.getDemos();
            res.send('Hello');
        } catch (error) {
            next(error);
        }
    }
}