📝 Task Manager API

My first project built with Node.js, Express, and MongoDB! 🎉

This is a simple RESTful API for managing tasks (create, read, update, delete) — built while learning the fundamentals of backend development: routing, middleware, async error handling, and connecting to a real database.

🌐 Live Preview 

The API is deployed and live on Render:

🔗 https://node-express-to-do-project.onrender.com

⚠️ Note: this is hosted on Render's free tier, so if the app hasn't been visited in a while, the first request may take 30–60 seconds to respond while the server wakes back up. Subsequent requests will be fast.

✨ Features 

➕ Create a new task

📋 Get all tasks

🔍 Get a single task by ID

✏️ Update an existing task

🗑️ Delete a task

🛡️ Centralized error handling with custom error classes

☁️ Data persisted in MongoDB Atlas

🛠️ Tech Stack

Node.js — JavaScript runtime

Express.js — web framework for routing and middleware

MongoDB Atlas — cloud-hosted database

Mongoose — MongoDB object modeling for Node.js

Nodemon — auto-restarts the server during development

Render — deployment/hosting platform

📂 Project Structure

       Node-express-to-do-project/
      ├── db/          
      ├── errors/    
      ├── logic/        
      ├── middleware/   
      ├── models/  
      ├── public/     
      ├── router/       
      ├── app.js       
      ├── package.json
      └── package-lock.json

⚙️ Installation

1. Clone the repository:

           git clone https://github.com/mansityagi548/Node-express-to-do-project.git
           cd Node-express-to-do-project

2.Install dependencies:

             npm install

3. Set up environment variables : 

    Create a .env file in the root of the project and add:

                            PORT=3000
                            MONGO_URI=your_mongodb_atlas_connection_string

🔒 .env is git-ignored — never commit real credentials to GitHub. Get your MONGO_URI from your MongoDB Atlas dashboard under Connect → Connect your application


▶️ Running the Server

You can start the server in two ways:

Option 1 — using plain Node:

      node app.js

Option 2 — using nodemon (recommended for development)

    npm start 

Once running, the server will be available locally at:

          http://localhost:3000  (or whatever port you set in .env)


🙋 About This Project

This was built as a learning project to understand:

How Express routing and middleware actually work

How to structure a backend project cleanly

How to handle async errors properly (using a reusable async wrapper + custom error classes)

How to connect to and query a real database

How to deploy a Node/Express app and manage environment variables safely


