
# DevConnector

A Protfol web application for Developers.

## Indices

* [Users & Auth](#users-&-auth)

  * [Regiusers user](#1--regiusers-user)
  * [Login User](#2-login-user)
  * [Get Auth Users](#3-get-auth-users)

* [Profiles](#profiles)

  * [Create and Update Profile](#1-create-and-update-profile)
  * [Get Logged in Priofile](#2-get-logged-in-priofile)
  * [Get all profiles](#3-get-all-profiles)
  * [Get profile by user ID](#4-get-profile-by-user-id)
  * [Delete profile and User](#5-delete-profile-and-user)
  * [Add Experience](#6-add-experience)
  * [Add Education](#7-add-education)
  * [Delete Education](#8-delete-education)
  * [Get Github Repos](#9-get-github-repos)

* [Posts](#posts)

  * [Add new Post](#1-add-new-post)
  * [Get All Posts](#2-get-all-posts)
  * [Get Single Post](#3-get-single-post)
  * [Delete Post By Post ID](#4-delete-post-by-post-id)
  * [Like Post](#5-like-post)
  * [Unlike Post](#6-unlike-post)
  * [Comment On Post](#7-comment-on-post)
  * [Delete Comment](#8-delete-comment)


--------


## Users & Auth



### 1. Regiusers user


Register User in our database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"name": "Souman Paul",
	"email": "souman1729@gmail.com",
	"password": "123456"
}
```



### 2. Login User


Logged in user using gmail and password


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/auth
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjA0YTMwNjBmYjMzNDBhOTA0ZGIzIn0sImlhdCI6MTU3NzE5MDU2MywiZXhwIjoxNTc3MTk0MTYzfQ.5x-eWdoill0VFk_aDMG9bp-rRN7Z6rkTWwF7APSlp34 | john token |



***Body:***

```js        
{
	"email": "souman1729@gmail.com",
	"password": "123456"
	
}

```



### 3. Get Auth Users


Get authoriged user Information


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/auth
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



## Profiles



### 1. Create and Update Profile


This endpoints creates and update profile .


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/profile/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



***Body:***

```js        
{
	"company": "Microsoft",
	"status": "Software Engineer",
	"website": "https://soumanpaul.github.io",
	"skills": "HTML, CSS, Python, C++, Reactjs, Nodejs, AWS, React Native",
	"location": "Bengalore, KA",
	"bio": "Software Engineer Working at Microsoft, Open source contributor, Love writting code",
	"githubusername": "soumanpaul",
	"twitter": "https://twitter.com/_souman",
	"facebook": "https://www.facebook.com/souman.paul.77985",
	"youtube": "https://www.youtube.com/channel/UC66pQlvNkwc-Rxf_jT0vq-g?view_as=subscriber"
}
```



### 2. Get Logged in Priofile


Get current user profile.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/profile/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



### 3. Get all profiles


Gei all registered user.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/profile/
```



### 4. Get profile by user ID


Get a single user by ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/profile/user/5e02147e060fb3340a904dbe
```



### 5. Delete profile and User


This endpoint Deletes user profile and account.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/profile/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjA0YTMwNjBmYjMzNDBhOTA0ZGIzIn0sImlhdCI6MTU3NzE5MDY2NiwiZXhwIjoxNTc3MTk0MjY2fQ._Gi-h2OGcjnCpRUhu0GqOCwQ4YOjYz067wPn3zTgj2M | Sam token |



### 6. Add Experience


Add new Enperience


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/profile/experience
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



***Body:***

```js        
{
	"title": "Nodejs Developer",
	"company": "GeekAnts",
	"location": "bengaluru , KA",
	"from": "8-10-2013",
	"to": "3-7-2016",
	"current": false,
	"description": "Worked as a Nodejs developer at GeekAnts"
}
```



### 7. Add Education


Add new Education.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/profile/education/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



***Body:***

```js        
{
	"school": "Techno India University",
	"degree": "B.Tech",
	"fieldofstudy": "Computer Science",
	"from": "8-10-2014",
	"to": "2-12-2018",
	"description": "Graduated from TIU in 2018"
}
```



### 8. Delete Education


This endpoints Deletes education.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/profile/education/5e021600060fb3340a904dc1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



### 9. Get Github Repos


This endpoints fetch user github informations


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/profile/github/soumanpaul
```



## Posts



### 1. Add new Post


This endpoint addes new post to database.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/posts
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



***Body:***

```js        
{
	
	"text": "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded."
}
```



### 2. Get All Posts


Get all posts 


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/posts/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



***Body:***

```js        
{
	
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
```



### 3. Get Single Post


This endpoints fetch single post from database based on post ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/posts/5e021652060fb3340a904dc2
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



### 4. Delete Post By Post ID


This endpoint deletes particular post By post ID


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/posts/5e021652060fb3340a904dc2
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



***Body:***

```js        
{
	
}
```



### 5. Like Post


This endpoint lokes a post.


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/posts/like/5e0216e2060fb3340a904dc3
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



### 6. Unlike Post


This endpoints Unlike post.


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/posts/unlike/5e0216e2060fb3340a904dc3
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



### 7. Comment On Post


Comment on post with post ID and comment ID


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/posts/comment/5e0216e2060fb3340a904dc3
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



***Body:***

```js        
{
	"text": "Thank you great post"
}
```



### 8. Delete Comment


Delete comment by comment ID


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/posts/comment/5e0216e2060fb3340a904dc3/5e021722060fb3340a904dc5
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-auth-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUwMjE0N2UwNjBmYjMzNDBhOTA0ZGJlIn0sImlhdCI6MTU3NzE5NDgyMSwiZXhwIjoxNTc3MTk4NDIxfQ.fgYznRV7Ba5jxg-l-Ckx2qJiJcumuhpGO523qL9QZus | Sam token |



---
[Back to top](#devconnector)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2019-12-24 19:33:57 by [docgen](https://github.com/thedevsaddam/docgen)
