import mongoose from 'mongoose'

const DemoSchema = new mongoose.Schema({
    test: String,
    meta: {
        createAt:{
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

export default DemoSchema;