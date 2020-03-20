const AWS = require('aws-sdk');

const createLambdaResponse = function createProxyLambdaResponse(statusCode, responseBody, responseHeaders) {
  return {
    statusCode,
    headers: responseHeaders,
    body: JSON.stringify(responseBody),
  };
};

const getDynamoDBEntry = (tableName, id) => {
  const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

  const params = {
    TableName: tableName,
    Key: { pk: id },
  };

  return docClient.get(params).promise();

  // const params = {
  //   TableName: tableName,
  //   KeyConditionExpression: 'pk = :a',
  //   ExpressionAttributeValues: {
  //     ':a': id,
  //   },
  // };

  // return docClient.query(params).promise();
};

module.exports = {
  createLambdaResponse,
  getDynamoDBEntry,
};
