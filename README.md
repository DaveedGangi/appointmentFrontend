

### if you want to run my code on your local system you can use the following command

you need to install Visual Studio 

on terminal you can use the following command

git clone https://github.com/DaveedGangi/appointmentFrontend.git 

cd appointment  

npm i install // nessasary packages installed on your machine

npm start  

### How to use this application 

initially you will navigate to the home page 

there is button book session on cliking on that you will navigate to the book sessions page 

and there are several buttons available , that will help you book sessions 

initally you will need to add the mentor by clicking on add mentor button 

once mentor is added you will add students by clicking on add students button 

once you are added students and mentors to their respected fileds 

then you will need to fill the book appoint by clicking on book appointment button 

this application will help you to know the number fo appointments and number of payments 

you can use this application in different screens 

### my backend url 

i have deployed the backend on render platform 

repository: https://github.com/DaveedGangi/appointmentsBackend.git

url : https://appointmentsbackend.onrender.com 

### backend code explanation  


### 1. **Basic Setup**
   - **Modules Imported**:
     - `express`: A web framework for Node.js used to create the server and manage routes.
     - `sqlite3`: A library for interacting with SQLite databases.
     - `bodyParser`: Middleware for parsing incoming request bodies in JSON format.
     - `path`: A core Node.js module for handling and transforming file paths.
     - `cors`: A middleware that allows Cross-Origin Resource Sharing, enabling the server to accept requests from different origins.

   - **App Initialization**:
     - The `app` variable is created using `express()`.
     - `cors()` and `bodyParser.json()` are used as middleware to handle CORS and JSON request bodies, respectively.

### 2. **Database Connection and Initialization**
   - **Connecting to SQLite**:
     - The `sessions.db` file is used to store the database. A connection is established using `sqlite3.Database`.
     - If the connection is successful, a message is logged.

   - **Tables Setup**:
     - **Mentors Table**: Stores mentors with fields for `name`, `expertise` (as a JSON string), and `premium` status.
     - **Appointments Table**: Stores appointments, linking a mentor to a student, with fields for `date`, `start_time`, `end_time`, and `duration`.
     - **Students Table**: Stores students with a `name` and `area_of_interest`.
     - **Payments Table**: Stores payment information related to appointments.

### 3. **Helper Functions**
   - **`checkAvailability`**:
     - Checks if a mentor is available at a specific time on a given date. It queries the `Appointments` table to see if any existing appointments overlap with the requested time slot.
  
   - **`updateMentorAvailability`**:
     - A placeholder function that logs a mentor's updated availability after booking an appointment. This can be extended to update actual availability data if needed.

### 4. **API Routes**
   - **Booking an Appointment with Payment** (`/book-appointment`):
     - The request body should include `student_id`, `mentor_id`, `date`, `start_time`, `duration`, and `amount`.
     - The server first checks if the mentor has the expertise matching the student's area of interest.
     - It then checks if the mentor is available at the requested time.
     - If available, the appointment is booked, and the payment is recorded.
     - The mentor's availability is updated.

   - **Add Mentor** (`/add-mentor`):
     - Adds a new mentor to the `Mentors` table. The expertise is stored as a JSON string.

   - **Add Student** (`/add-student`):
     - Adds a new student to the `Students` table.

   - **Get All Appointments** (`/appointments`):
     - Retrieves and returns all rows from the `Appointments` table.

   - **Get All Payments** (`/payments`):
     - Retrieves and returns all rows from the `Payments` table.

   - **Get All Mentors** (`/mentors`):
     - Retrieves and returns all rows from the `Mentors` table.

   - **Get All Students** (`/students`):
     - Retrieves and returns all rows from the `Students` table.

   - **Delete All Students** (`/students`):
     - Deletes all entries in the `Students` table.

   - **Delete All Mentors** (`/mentors`):
     - Deletes all entries in the `Mentors` table.

   - **Delete All Appointments** (`/appointments`):
     - Deletes all entries in the `Appointments` table.

   - **Delete All Payments** (`/payments`):
     - Deletes all entries in the `Payments` table.

   - **Delete a Specific Mentor** (`/mentors/:id`):
     - Deletes a specific mentor by their ID.

   - **Delete a Specific Student** (`/students/:id`):
     - Deletes a specific student by their ID.

### 5. **Server Startup**
   - The server is started on port `3000` or an environment-defined port. A message logs the port on which the server is running.

### 6. **Test HTTP Requests**
   - The `index.http` file contains example HTTP requests to test the various routes:
     - Adding mentors and students.
     - Booking an appointment.
     - Fetching, deleting mentors, students, appointments, and payments.

### Summary
This server is designed to manage a scheduling system where students can book appointments with mentors based on their expertise and availability. The system also supports payments for these appointments. Various endpoints are provided to manage mentors, students, appointments, and payments.



























































































































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
