# Instructions to Run the Fleet Intern Interview Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This project is deployed and published:
Open [https://sauravl3010.github.io/fleet-saurav-gurhale/](https://sauravl3010.github.io/fleet-saurav-gurhale/) to view it in your browser.

## Available Scripts

In the project directory, you can run:

### `npm install` to install all the dependencies
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How was API created:
Traditionally to creact a REST API for any application, I would use standard tools such as Node.js or Django. But since this project requires limited data points, I have hosted the provided Response Data on my github repo and have used this as my API end-point. 
Open [https://my-json-server.typicode.com/SauravL3010/fleet-saurav-gurhale/data](https://my-json-server.typicode.com/SauravL3010/fleet-saurav-gurhale/data) to view JSON API in your browser.

## NOTES:
This API does not support update and delete functions. Therefore, the app only comsumes API data, and does not update it in any way. 
The Update button on the app, simply closes the Modal window that appears on top. 

## Known Bugs:
The search bar in the app searches through entire db and is not only limited to "name" and "modeType". But, as stated in the requirement of the app:
`* A user should be able to search by mode type and/or name.`
`* A user should only see unique services but should be able to view all the mode types a service offers.`
  `* E.g. If Scoot returns with mode types scootershare, bikeshare, escootershare. You should only show one instance of Scoot and show all the three mode types in the sub heading.`

The above requirement is satisfied.

## Comments:
Due to limited time, I was not able to the bonus function, but the following is how I would approch it:
 - Have an API endpoint which supports Create and Delete functions
 - In React, I would target with providers name and update its description and website as an event on update button. 
 - Below, is the approch I would have taken to satisfy the above

## Approach (To create a complete application, including backend)
DataBase:
 - I would have created the database with unique id's, so its easy to fetch target id's and modify, and combine multiple modeTypes of single provider with single array of modeTypes.
API:
 - create with node.js that allows CRUD applications such as Create or Modify