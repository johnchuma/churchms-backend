const axios = require('axios');
const circularJSON = require('circular-json');
require('dotenv').config(); 

const removeHtmlTags = (input) => {
  return input.replace(/<\/?[^>]+(>|$)/g, '');
};

const sendSMS = async (numbers, message) => {
  try {
    const data = JSON.stringify({
      "from": "RMNDR",
      "to": numbers,
      "text": message  // Use the cleaned message
    });
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://messaging-service.co.tz/api/sms/v1/text/single',
      headers: { 
        'Authorization': process.env.SMS_AUTH, 
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      data: data
    };
    const response = await axios(config);
    const jsonString = circularJSON.stringify(response.data);
    return jsonString;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = sendSMS;
