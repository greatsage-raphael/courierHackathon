const { CourierClient } = require("@trycourier/courier");

//const apikey = process.env["API_KEY"];
const courier = CourierClient({ authorizationToken: "pk_prod_9CSG6MXGAGM2Y8GA4NJH4187KDPM" });

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const { requestId } = await courier.send({
  message: {
    to: {
      email: "bizzicole87@gmail.com",
    },
    content: {
      title: "Welcome!",
      body: "Thanks for signing up, {{name}}",
    },
    data: {
      name: "Peter Parker",
    },
    routing: {
      method: "single",
      channels: ["email"],
    },
  },
});

    
    const responseMessage = "The http trigger ran sucessfully"
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}