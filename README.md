# Description

This is simple app that enables user to create bugs, edit them and delete them (basic CRUD operations). Admin can create bug, while regular user can't.

All users can edit, delete and mark as complete or active all tasks in the system.

There is small dashboard that shows number of low, medium and high level bugs stored in the system. If admin clicks on any of displayed divs on dashboard he will be redirected to view 
bugs page, while regular user will not.

Create, edit, delete is done in modal windows (MUI Dialogue components)

## Important notes
In order to use the app you shound change in server/config/config.js url for Atlas Mongo DB database and in client/.env file you should store following data:

DATABASE=YOUR MONGODB DATABASE
<br />
PASSWORD=YOUR MONGODB PASSWORD

Default port for connection to the express server is 5000 and default proxy set in package.json in client folder is http://localhost:5000. In case you are using Mac change default port to 3001 as 5000 is not allowed on Mac. Also don't forget to change on proxy last part of the string (5000 to 3001)

Redux toolkit
For state management Redux toolkit is used. For fetching API data redux is used.

## Server and database
For server express is used and all server logic is stored in server folder.

## UI
For UI Material UI (MUI) library is used.
