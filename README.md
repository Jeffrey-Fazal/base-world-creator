# Readme

## Installation
Clone repo and npm install

### Libraries
* React Router
    * Made by Remix which also a UI library that makes things faster

### Documentation

[React Router Guide](https://blog.webdevsimplified.com/2022-07/react-router/)

## Pages

```mermaid
mindmap
    root((pages))
        Public
            Home (/)
            Story (/story)
        User
            CreatorHome (/creator)
            PlayerHome (/player)
            Profile (/profile)
        Auth
            Login (/login)
            SignUp (/signup)

```

### Routes
Routed are located at src > app.js

## Components 

StoryBoard - used to display story from db


#### Todos
* Decide on default export (e.g sign out) or namespaced export (most things)