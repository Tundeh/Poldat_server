const Member = require("../models/member");
const keys = require("../config/keys");

const credentials = {
  apiKey: keys.talkingApiKey, 
  username: keys.talkingApiUsername,
}

const africastalking = require("africastalking")(credentials);

const sms = africastalking.SMS;

module.exports.sendAll =  async (req, res) => {

 let recipients = [];

 Member.find({}, {"mobile_number": 1, "_id": 0 }).then(members => {
   for(i=0; i<members.length(); i++){
    recipients.push(members[i].mobile_number)
   }
 }).catch(error => {
   res.status(500).json("database error");
 })

 const options = {
  to: recipients,
  message: req.message,
  from: req.sender,
}

try{
  const response = await sms.send(options);
  if(response){
    res.status(200).json({message: "Message sent successfully"});
  }
} catch(e){
  res.status(500).json({message: "Messages wasn't sent"});
}

}

module.sendTo = (res, res) => {
  const phoneNumbers = [req.body.mobile_number];
  const options = {
    to: phoneNumbers,
    message: phoneNumbers
  }
sms.send(options).then(info => {
  res.json(info);
}).catch(error => {
  res.status(500).json({message: "Message Not Sent"});
})
}