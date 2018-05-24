import mongooes from 'mongoose'
import DemoSchema from '../schemas/demo'

const DemoModel = mongooes.model('Demo', DemoSchema);

export default DemoModel;