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
        // for(var i=0;i<addParticipant.name.length;i++){}

        var addParticipant = new Participant(req.body);
        console.log("body",req.body)
        console.log("add",addParticipant)
        var participantArray = []
        for(var i=1;i<req.body.repeatation+1;i++){
          participantArray.push({name:addParticipant.name,repeatation:i,_id:addParticipant._id})
        }
  console.log("kxnsxnsxnx",participantArray)
        // addParticipant.save(function (err) {
        //     if (err) return handleError(err);
        //     // saved!
        // })
        // console.log("final",addParticipant)
        res.status(201).json({participantArray})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      case 'DELETE':
      try {
 
        Participant.deleteOne({ _id: req.body },function (err) {
            if (err) return handleError(err);
            // saved!
        })
        res.status(201).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}