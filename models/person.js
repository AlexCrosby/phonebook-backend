const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const url = process.env.MONGODB_URI
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
const uniqueValidator=require('mongoose-unique-validator')




const personSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength:3, unique:true},
    number: {type:String, required:true,minlength:8}
})
personSchema.plugin(uniqueValidator)


personSchema.set('toJSON',
    {
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject._id.toString()
            delete returnedObject._id
            delete returnedObject.__v
        }
    })


const Person = mongoose.model('Person', personSchema)

module.exports = Person