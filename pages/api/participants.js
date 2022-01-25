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
        // var b = "waj,ahat"
        // if(b.includes(",")){
        //   console.log(b.split(","))
        // }
        // console.log("aaaaa",typeof(JSON.parse(req.body)))
        console.log("aaa",req.body.SimpleList)
        if(req.body.lst){
          for(var i=0;i<req.body.lst.length;i++){
            console.log("BBB",Object.values(req.body.lst[i]))
            var addParticipant = new Participant({name:Object.values(req.body.lst[i])[0],repeatation:Object.values(req.body.lst[i])[1]});
            addParticipant.save()
          }
        }
        if(req.body.SimpleList){
          const ListArray = []
          for(var i=0;i<req.body.SimpleList.length;i++){
            console.log("BBB",req.body.SimpleList[i])
            var addParticipant = new Participant({name:req.body.SimpleList[i],repeatation:1});
            addParticipant.save()
            ListArray.push(addParticipant)
          }
          const response  = ListArray
          console.log("MyPPPPP",response)
          res.status(201).json({response})
          

        }
        
        var addParticipant = new Participant(req.body);
        console.log("body",req.body)

        console.log("add",addParticipant)

        var participantArray = []
        if(req.body.name.includes(",")){
          console.log("SPLITTED")
          var SPLIT = addParticipant.name.split(",")
          for (var i=1;i<SPLIT.length+1;i++){
            participantArray.push({name:SPLIT[i-1],repeatation:addParticipant.repeatation,_id:addParticipant._id})
          }
          console.log("pppp",participantArray)
        }
        else{
        for(var i=1;i<req.body.repeatation+1;i++){
          participantArray.push({name:addParticipant.name,repeatation:i,_id:addParticipant._id})
        }}
  console.log("kxnsxnsxnx",participantArray)
  // for (var i=0;i<participantArray.length;i++){
  //       participantArray[i].save(function (err) {
  //           if (err) return handleError(err);
  //           // saved!
  //       })}
  addParticipant.save()
        console.log("final",addParticipant)
        res.status(201).json({participantArray})
        // console.log("SPlit",addParticipant.split(","))

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