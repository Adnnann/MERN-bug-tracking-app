# Description

This is simple app that enables user to create bugs, edit them and delete them (basic CRUD operations). In case if user is admin (status = 1 in database) then he can create bug, while regular user can't.

All users can edit, delete and mark as complete or active all tasks in the system.

There is small dashboard that shows number of low, medium and high level bugs stored in the system. If admin clicks on any of displayed divs on dashboard he will be redirected to view 
bugs page, while regular user will not.

Create, edit, delete is done in modal windows (MUI Dialogue components)

## Important notes
In order to use the app you shound change in server/config/config.js url for Atlas Mongo DB database and in client/.env file you should store following data:

DATABASE=bugTracker (I will delete this after grading is done) 
PASSWORD=yroaLvViZ6Hz9lSt (I will delete this after grading is done)

There are two users created for checking how app behaves when admin is logged in compared to regular user being logged in.

username: admin       
password: admin123    

username:user
password: user123

I have also added few more users in the system for testing assigned to field in the app

Default port for connection to the express server is 5000 and default proxy set in package.json in client folder is http://localhost:5000. In case you are using Mac change default port to 3001 as 5000 is not allowed on Mac. Also don't forget to change on proxy last part of the string (5000 to 3001)

Redux toolkit
For state management Redux toolkit is used. For fetching API data redux thunk middleware is used.

## Server and database
For server express is used and all server logic is stored in server folder.

## UI
For UI Material UI (MUI) library is used.
