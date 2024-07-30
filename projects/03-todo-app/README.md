# ToDo Application

- Anyone can create, get todos and also update completion status of todos

### Steps one should follow while creating a project

- **Backend**:
  - Do the backend part first (preferred)
  - create a `backend` folder
  - Initialize a node project 
    - **package.json** (have all the info about **external dependencies** and stuff)
    - We never share `node_modules` as it is containing bunch of libraries and is heavy
    - We share `package.json`, `package-lock.json` and with `npm install` anyone can download required dependencies.
    - `package-lock.json` file locks the current versions so all team members can have the same version and brings symmetry to project.
    - Now, to Initialize node project: `npm init` or `npm init -y`
  - Endpoints and payloads:
    - POST request on `/todo` to create todos
    - GET request on `/todos` to get all todos
    - PUT request on `/completed` to update todo completion status
  - input validation using zod, expects body from user:
    - for `/todo` endpoint body: `{ title: string, description: string }`
    - for `/completed` endpoint body: `{ id: string }`
  - create `.env` file and put all links like DB_URL and stuff and add `.env` in .gitignore (so that links are not exposed to public)

- **Database**:
  - Create `db` folder and define schema and model
  - Mongoose schema for todo data
      ```
      {
        title: String,
        description: String,
        completed: Boolean
      }
      ```
- **Frontend**:
  - use `npm create vite@latest` in outside `backend` folder and setup `frontend` folder
  - `devDependencies` are what *vite* adds for developer while developing to help, not needed in prod dist (distribution)