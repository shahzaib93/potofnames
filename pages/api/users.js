import dbConnect from '../../utils/dbConnect'
import User from '../../models/User'

export default async function handler (req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        // console.log("knsklnslnsn",req.body)
        const user = await User.find({})
        res.status(200).json(user)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      case 'POST':
        try {
          // const participant = await Participant.create(req.body)
          var addUser = new User(req.body);
          addUser.save(function (err) {
              if (err) return handleError(err);
              // saved!
          })
          res.status(201).json({addUser})
        } catch (error) {
          res.status(400).json({ success: false })
        }
      break
      case 'DELETE':
      try {
 
        User.deleteOne({ _id: req.body },function (err) {
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