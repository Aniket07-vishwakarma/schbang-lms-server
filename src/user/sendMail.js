const nodemailer = require('nodemailer');

async function sentMail(orderData) { 
    console.log("orderData.....", orderData); 
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "anivishwakarma85@gmail.com",
            pass: "Poco@1455",
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'anivishwakarma85@gmail.com',
        to: orderData.emailAdd,
        subject: "Your eComm order confirmed",
        text: "",
        html: `<h3>Dear ${orderData.userName},</h3>
               <p>Thank you for your order. We’ll send a confirmation when your order ships. Your order deatils is given below.</p>
               <hr>
               <p>Total cost: <b>Rs.${orderData.totalOrderCost}</b></p>
               <p>Shipping Address: ${orderData.shippingAdd}</p>
               <p>Estimated Delivery day: <b>4 days</b></p>
               <hr>
               <p>Thank you</p><br>
               <h8>Note: This is a system generated email, do not reply to this email id.</h8>
        ` 

    });
    console.log("Message sent: %s", info.messageId);    
}

module.exports = sentMail;