### Name: Branden Murphy
### Date: 1/15/2023
### Coruse: WDV339-O

# Project Overview

This is the week 2 Project Overview. (1/15/2023)

This is my Spotify API application Project. The overall goal for this project is to allow users to browse the search bar once authorized via Sign-in. Once the user is validated via JSON web AUTH tokens. The user then can search throughout Spotifys song list using Spotifys web-api ([Spotify Web API](https://developer.spotify.com/documentation/web-api/)). This search can be done via Artists, Songs, and Albumns.

# Prerequisites

- NodeJS = v18.12.0
- NPM = v8.2.0
- Dotenv =  v16.0.3
- Express = v4.18.2
- spotify-web-api-node = v5.0.2
- axios = v1.2.2


### Dev Dependencies

- Nodemon

 All test were done using Postman
- Postman

# Getting Started

To get Started, start off by running >= npm i inside the SPOTIFYAPI folder,
Then head cd into the server ( cd server ), then run >= npm i.
This will initialize the dependencies needed to run the application inside the front-end react application, and also the server.

Then configure the .env file to connect important spotify links to the server. You can use the .env.example file to relate to the issue.

(if using Localhost PORTs)
Make sure there are no other servers running on PORTs 3001, and also 3002 for backups. (If there are other servers running on these ports, the applications server will not start.)

To start the applcations server, run >= npm start
The server will automatically stay updated using Nodemon when changes are made.


# Links

The links to the project are as follows: 
- [http://localhost:3001](http://localhost:3001) - Backend API Server URL

- More links will be added when there are more Routes added for the application
