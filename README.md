### Starts the DB server on port 27017
1. start.toDoSample.cmd

### populate the DB server with sample data
2. startdbClient.toDoSample.cmd
>load ('createDB/createSampleData.js');
>exit

### populate mock datbase with 500 records.
> populateMockData.cmd

### Run the server in dev mode
> npm run dev

# Testing
# Refer to the routes defined in /src/routes/crmRoutes.ts

