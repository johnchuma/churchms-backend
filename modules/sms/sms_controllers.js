const { errorResponse, successResponse } = require("../../utils/responses")
const sendSMS = require("../../utils/send_sms");


const sendMessage = async(req,res)=>{
    try {
        const {
            number,message
        } = req.body;
        const response = await sendSMS([number],message)
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}


module.exports = {
    sendMessage    
}