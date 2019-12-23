# DevConnect

## Backend file structure

```
.
├── app.js
├── bin
│   └── www
├── config
│   ├── db.js
│   └── default.json
├── middleware
│   └── auth.js
├── models
│   ├── Post.js
│   ├── Profile.js
│   └── User.js
├── package.json
├── package-lock.json
├── production.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── README.md
└── routes
    └── api
        ├── auth.js
        ├── posts.js
        ├── profile.js
        └── users.js

```

## Frontend file structure

```
.
.
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.css
│   ├── App.js
│   ├── components
│   │   ├── auth
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── dashboard
│   │   │   ├── DashboardActions.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Education.js
│   │   │   └── Experience.js
│   │   ├── layout
│   │   │   ├── Alart.js
│   │   │   ├── Landing.js
│   │   │   ├── Navbar.js
│   │   │   ├── NotFound.js
│   │   │   └── Spinner.js
│   │   ├── post
│   │   │   ├── CommentForm.js
│   │   │   ├── CommentItem.js
│   │   │   └── Post.js
│   │   ├── posts
│   │   │   ├── PostForm.js
│   │   │   ├── PostItem.js
│   │   │   └── Posts.js
│   │   ├── profile
│   │   │   ├── ProfileAbout.js
│   │   │   ├── profileEducatioin.js
│   │   │   ├── ProfileExperience.js
│   │   │   ├── ProfileGithub.js
│   │   │   ├── Profile.js
│   │   │   └── ProfileTop.js
│   │   ├── profile-forms
│   │   │   ├── AddEducation.js
│   │   │   ├── AddExperience.js
│   │   │   ├── CreateProfile.js
│   │   │   └── EditProfile.js
│   │   ├── profiles
│   │   │   ├── ProfileItem.js
│   │   │   └── Profiles.js
│   │   └── routing
│   │       ├── PrivateRoute.js
│   │       └── Routes.js
│   ├── img
│   │   └── showcase.jpg
│   ├── index.js
│   ├── setupProxy.js
│   ├── setupTests.js
│   ├── spinner1.gif
│   ├── states
│   │   ├── actions
│   │   │   ├── alert.js
│   │   │   ├── auth.js
│   │   │   ├── post.js
│   │   │   ├── profile.js
│   │   │   └── types.js
│   │   ├── reducers
│   │   │   ├── alart.js
│   │   │   ├── auth.js
│   │   │   ├── index.js
│   │   │   ├── post.js
│   │   │   └── profile.js
│   │   └── store.js
│   └── utils
│       └── setAuthToken.js
└── yarn.lock

```