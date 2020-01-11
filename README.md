# Developers-Protfolio

[![Current Version](https://img.shields.io/badge/version-1.0.7-green.svg)](https://github.com/soumanpaul/Developers-Profile-web-app)
[![build status](https://img.shields.io/travis/reduxjs/react-redux/master.svg?style=flat-square)](https://travis-ci.org/reduxjs/react-redux) [![npm version](https://img.shields.io/npm/v/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![GitHub Stars](https://img.shields.io/github/stars/soumanpaul/node-chat.svg)](https://github.com/soumanpaul/Developers-Profile-web-app/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/soumanpaul/node-chat.svg)](https://github.com/IgorAntun/node-chat/issues)  




## About the project
 
 This is a node.js web application powered by  Express and Reactjs that allows developer to create protfolio where they can share Education, Work experience, Skill sets, write a post, like and comment on a post.  
 

 ## Index
+ [Demo](#demo)
+ [Features](#features)
+ [Built With](#Built-With)
+ [Installation](#installation)
+ [How It Works](#how-it-works)
+ [Support](#support)
+ [Contribute](#contribute)
+ [License](#license)

---
## Demo 
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://developersprofile.herokuapp.com/)


API Documentatioin [https://github.com/soumanpaul/Developers-profile-fullstack-app/blob/master/API%20Docs/doc.md](https://github.com/soumanpaul/Developers-profile-fullstack-app/blob/master/API%20Docs/doc.md)

Extensive API documentation with examples [here](https://documenter.getpostman.com/view/5731747/SWLYDBiQ?version=latest#bb9e7694-8e53-4f33-b833-6dbab3727a3f)


![](/public/images/output.gif)

---

## Features

---
## Built With
+ Uses Express as the application Framework.
+ Manages Sessions using [express-session](https://github.com/expressjs/session) package.
+ Authenticates via username and password using [JsonwebToken](https://jwt.io/) and  [Passport](https://github.com/jaredhanson/passport).
+ Passwords are hashed using [bcrypt-nodejs](https://github.com/shaneGirish/bcrypt-nodejs) package.
+ Social Authentication via Facebook and Twitter using [Passport](https://github.com/jaredhanson/passport).
+ Uses [MongoDB](https://github.com/mongodb/mongo), [Mongoose](https://github.com/Automattic/mongoose) and [Mongodb Atles](https://mlab.com/) for storing and querying data.
+ Uses [Gravatar]() to retrive profile image from Gamil.

+ Uses [Reactjs](https://reactjs.com) to generate UI and [Redux]() for State management.
+ [UUID]() to generate unique user ID

<!-- + Stores session in a [MongoDB](https://github.com/mongodb/mongo) using [connect-mongo](https://github.com/kcbanner/connect-mongo); a MongoDB-based session store. -->
<!-- + Uses [Redis](https://github.com/antirez/redis) as an Adapter for [Socket.io](https://github.com/socketio/socket.io).
+ Logging Errors and Exceptions using [Winston](https://github.com/winstonjs/winston). -->







## Usage

**Clone the repo**
```
git clone https://github.com/soumanpaul/Developers-Profile-web-app
```

**Install dependencies**
```
npm i 
```
or with [yarn](https://yarnpkg.com/), which I highly recommend
```
yarn install
```

**Run project**
```
npm run server
npm run client
```
or both tasks in parallel in a single terminal
```
npm run dev
```

Access `localhost:3000` to see the magic.

Running the tests
```
npm run test
```

Running eslint
```
npm run linter
```


- Version: 1.0.0
- License: MIT
- Author: Souman Paul

