const middy = require('middy');
const { httpHeaderNormalizer } = require('middy/middlewares');
const helper = require('./lambda-integration-helper');
const { version } = require('../package');

// eslint-disable-next-line no-unused-vars
const processEvent = async (event = {}, context) => {

  const { orderId } = JSON.parse(event.body);
  console.log(JSON.stringify(event));
  try {
    const value = await helper.getDynamoDBEntry(process.env.DYNAMODB_TABLE, orderId);
    console.log(JSON.stringify(value))
    if (!value.Item) {
      return helper.createLambdaResponse(404, { message: 'Order Not Found' });
    }
    return helper.createLambdaResponse(200, value.Item);
  } catch (e) {
    return helper.createLambdaResponse(500, { message: `Internal Server Error: ${e}` });
  }
};

module.exports.handler = middy(processEvent)
  .use(httpHeaderNormalizer());

