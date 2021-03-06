import dbConnect from '../../utils/dbConnect'
import Participant from '../../models/Participant'

export default async function handler (req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const participants = await Participant.find({})
        res.status(200).json(participants)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        // const participant = await Participant.create(req.body)
        var addParticipant = new Participant(req.body);
        addParticipant.save(function (err) {
            if (err) return handleError(err);
            // saved!
        })
        res.status(201).json({addParticipant})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}