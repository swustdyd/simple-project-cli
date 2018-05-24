import DemoModel from '../models/demo'

export default class DemoService{
    async getDemos(pageIndex = 0, pageSize = 20){
        return await DemoModel.find().skip(pageIndex * pageSize).limit(pageSize).exec();
    }
}