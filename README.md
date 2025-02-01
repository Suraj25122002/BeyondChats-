Registration Flow Application

This project is a multi-step registration flow built using React. It provides an intuitive user experience for registering users, setting up their organization, and integrating a chatbot.

Features

Step 1: User Registration

Input fields for user details like full name, email, and password.

Option to continue registration using Google.

Step 2: Setup Organization

Input fields for company details such as name, website URL, and description.

Displays the status of website scraping for different pages.

Allows users to view the scraped content of individual pages.

Step 3: Chatbot Integration and Testing

Provides options to test the chatbot and integrate it on a website.

Supports copying the integration code and emailing it to developers.

Simulates testing the chatbot integration with success and error feedback.

Step Indicator

A step indicator shows the current step in the registration flow.

Highlights active and completed steps for better user navigation.

Technologies Used

React: For building the user interface.

CSS: For styling and creating a visually appealing layout.

Lucide Icons: For adding modern icons to the UI.

Folder Structure

src/
|-- components/
|   |-- Step1.js           # User registration step
|   |-- Step2.js           # Organization setup step
|   |-- Step3.js           # Chatbot integration step
|   |-- StepIndicator.js   # Component for the step indicator
|-- App.js                 # Main app component
|-- index.js               # Entry point of the application
|-- styles/
|   |-- step1.css          # CSS for Step 1
|   |-- step2.css          # CSS for Step 2
|   |-- step3.css          # CSS for Step 3
|   |-- stepIndicator.css  # CSS for the step indicator
|   |-- app.css            # General styling for the app

Setup Instructions

1. Clone the Repository

git clone : https://github.com/Suraj25122002/BeyondChats-
cd BeyondChats

live link : https://beyond-chats-suraj-kumars-projects-d8ff6dbc.vercel.app/

2. Install Dependencies

npm install

3. Start the Development Server

npm start

The application will run at http://localhost:3000/.
