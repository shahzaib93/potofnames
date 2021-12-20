import mongoose from 'mongoose'

const ParticipantSchema = new mongoose.Schema({
  name: String,
})

module.exports = mongoose.models.Participant || mongoose.model('Participant', ParticipantSchema)
