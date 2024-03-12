const { errorResponse, successResponse } = require("../utils/responses")
const { sendMail } = require("../utils/mail_controller");

const sendEmail = async (email,subject,message) => {
    try {
      var response = await sendMail(email, subject, message);
      return response;
    } catch (error) {
      errorResponse(res, error);
    }
}

module.exports = { sendEmail };