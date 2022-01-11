import mongoose from 'mongoose'

const ParticipantSchema = new mongoose.Schema({
  name: {type:String},
repeatation:{type:Number,default:1},
lst:{type:Array}

})

module.exports = mongoose.models.Participant || mongoose.model('Participant', ParticipantSchema)
