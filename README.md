# CodeLeap Network – Frontend Challenge
![site](https://github.com/katianne23/codeleap-test/blob/main/public/preeview.png)

> 💻 This project is a frontend application built with React that allows users to create, view, and edit posts in a simple social network environment..

The application was developed as part of a technical challenge, focusing on clean architecture, component organization, API integration, and good user experience practices.

[Clique aqui para acessar](https://codeleap-test-lac.vercel.app/)


## 🎯 Technologies Used

- React
- JavaScript (ES6+)
- Axios
- CSS
- LocalStorage

## Features

The application provides the following features:
### User Registration
Users must enter a username to access the application.
- The username is stored in LocalStorage
- After submitting the username, the user is redirected to the posts page

### Create Post
Users can create a new post containing:
- Title
- Content

Rules implemented:
- Both fields are required
- The submit button is disabled when fields are empty
- The post is sent to the API

###  Edit Post
Users can edit an existing post.
Features:
- Modal editing interface
- Post update using PATCH request
- Automatic refresh of the post list after editing

## Components
### Signup
Responsible for user registration.
Responsibilities
- Capture the username
- Store the username in localStorage
- Redirect the user to the posts page

### State
- username

### Flow
- User enters a username
- Username is stored in LocalStorage
- User is redirected to the posts page

### CreatePost
- Component responsible for creating new posts.
- 
#### State
- title
- content
- username
  
#### Responsibilities
- Retrieve username from LocalStorage
- Send post data to the API
- Clear the form after submission
- Refresh the post list

#### Request Body
{
  username: string,
  title: string,
  content: string
}

#### API Request
POST /

### EditPost
Component responsible for editing existing posts.
-  State
- title
- content

####  Responsibilities
- Display an edit modal
- Allow editing of title and content
- Update the post through the API
- Reload the posts list after updating

#### API Request
- PATCH /:id

### Delete Post
Users can delete their posts.

#### Features:
- Delete button available in each post
- Confirmation modal before deletion
- Removes the post using an API request
- Refreshes the list after deletion

#### API request:
DELETE /:id
  
### Application Flow
Signup
   ↓
Posts Page
   ↓
Create Post
   ↓
Posts List
   ↓
Edit Post
   ↓
Delet Post



### Implemented Validations
- Required fields
- Disabled buttons when inputs are empty
- Basic error handling for API requests
- Username persistence with LocalStorage

### Running the Project
```
1 Clone the repository
git clone https://github.com/katianne23/codeleap-test.git

2 Navigate to the project folder
cd codeleap-test

3 Install dependencies
npm install
or
yarn install

4 Start the application
npm start
or
npm run dev
```

###Possible Improvements
- If more time were available, the following improvements could be implemented:
- Post deletion feature
- Pagination for posts
- Improved API error handling
- Loading states
- Unit tests
- Custom React hooks
- Migration to TypeScript
- Better responsive design

## :memo: Licença

Esse projeto está sob a licença MIT.

Katianne Araújo

---
