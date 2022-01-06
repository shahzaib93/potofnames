import mongoose from 'mongoose'

const WheelSpinTimesSchema = new mongoose.Schema({
  times:{type:Number}

})

module.exports = mongoose.models.WheelSpinTimes || mongoose.model('WheelSpinTimes', WheelSpinTimesSchema)
