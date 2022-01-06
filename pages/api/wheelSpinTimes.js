import dbConnect from '../../utils/dbConnect'
import WheelSpinTimes from '../../models/WheelSpinTimes'

export default async function handler (req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
        try {
          // console.log("knsklnslnsn",req.body)
          const Times = await WheelSpinTimes.find({})
          res.status(200).json(Times)
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          // const participant = await Participant.create(req.body)
          var addWheelSpinTimes = await WheelSpinTimes.findOne({"times":req.body.times-1})
          addWheelSpinTimes.times = req.body.times
          addWheelSpinTimes.save(function (err) {
            if (err) return handleError(err);
            // saved!
        })
          res.status(201).json({addWheelSpinTimes})
        } catch (error) {
          res.status(400).json({ success: false })
        }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}