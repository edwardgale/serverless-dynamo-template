# Serverless Dynamo project template

This is a sample project for Serverless Dynamo call.

## Getting started
Install node if not already done so see [Installing Node](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)
```bash
npm install -g serverless
```

## Deploying the sample project
```bash
# cd into your folder

npm install # Installs the project dependencies 
sls deploy -s test

# Now add a value to the dynamo database.
aws dynamodb put-item --table-name serverless-dynamo-test --item '{"pk": {"S":"00120303-on"}}'
```

## Cleaning up
This removes all the resources associated with the project.
```bash
sls remove
```






