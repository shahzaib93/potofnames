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
        // console.log("aaa",req.body.UpdateArray)
        var UpdatedArray = []
        if(req.body.UpdateArray){
        // console.log("BBB",req.body.UserId)
          console.log("ARRAY",req.body.UpdateArray)
          for(var i=0;i<req.body.UpdateArray.length;i++){
            if(req.body.UpdateArray[i] != ""){
            var UpdatedaddParticipant = new Participant({UserId:req.body.UserId,name:req.body.UpdateArray[i],repeatation:1});
           await UpdatedaddParticipant.save(function(err,result){
              if (err){
                  console.log("ERR",err);
              }
              else{
          UpdatedArray.push(result)
                  console.log("RESULT",result)
              }
          })
            // console.log("LOOP")
          } }
          res.status(201).json({ success: true })
        }
        const ListArray = []
        if(req.body.SimpleList){
          for(var i=0;i<req.body.SimpleList.length;i++){
            console.log("BBB",req.body.SimpleList[i])
            var SimpleaddParticipant = new Participant({UserId:req.body.UserId,name:req.body.SimpleList[i],repeatation:1});
            SimpleaddParticipant.save()
            ListArray.push(SimpleaddParticipant)
          }
          const response  = ListArray
          // console.log("MyPPPPP",response)
          res.status(201).json({response})
          

        }
        else{
        var addParticipant = new Participant(req.body);
        var participantArray = []
        // if(req.body.name.includes(",")){
        //   // console.log("SPLITTED")
        //   var SPLIT = addParticipant.name.split(",")
        //   for (var i=1;i<SPLIT.length+1;i++){
        //     participantArray.push({UserId:req.body.UserId,name:SPLIT[i-1],repeatation:addParticipant.repeatation,_id:addParticipant._id})
        //   }
        //   console.log("pppp",participantArray)
        // }
        // else{
        // for(var i=1;i<req.body.repeatation+1;i++){
        //   participantArray.push({UserId:req.body.UserId,name:addParticipant.name,repeatation:i,_id:addParticipant._id})
        // }}
        participantArray.push(addParticipant)
  addParticipant.save()
        console.log("final",addParticipant)
        res.status(201).json({participantArray})}
        // console.log("SPlit",addParticipant.split(","))

      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      case 'DELETE':
      try {
        if(req.body.UpdateArray){
          console.log("BBB",req.body.UserId)
            console.log("ARRAY",req.body.UpdateArray)
            await Participant.deleteMany({UserId:req.body.UserId}).then(function(){
              console.log("Data deleted"); // Success
              
        res.status(201).json({ success: true })

          }).catch(function(error){
              console.log(error); // Failure
          })}
else{
        Participant.deleteOne({ _id: req.body },function (err) {
            if (err) return handleError(err);
            // saved!
        })
        res.status(201).json({ success: true })
      }} catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}