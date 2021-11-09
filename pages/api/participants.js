import dbConnect from '../../utils/dbConnect'

import Participant from '../../models/Participant'


export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

// var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
// var user1 = new User({name: "Ahmed", email: "ahmad@abc.com"});
// user1.save(function (err, user) {
//   if (err) return handleError(err);
//   console.log(user.name + "Is saved well");
//   // saved!
// });


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
        // var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
        // var user1 = new User({name: "Ahmed", email: "ahmad@abc.com"});
        // user1.save(function (err, user) {
        //   if (err) return handleError(err);
        //   console.log(user.name + "Is saved well");
        //   // saved!
        // });
        const participant = await Participant.create(req.body)
        const participants = await Participant.find({})
        res.status(201).json({ success: true, data: participants })

        // if (res.status < 300) {
        //   refreshData();
        // }
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}