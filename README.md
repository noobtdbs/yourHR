
# YourHR - Job Search Signup Application

YourHR is a job search service application that allows job seekers to sign up and submit their resumes. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and features a responsive design for both the signup form and the thank you page. Resumes are securely uploaded to and stored in Cloudinary, a cloud-based media management service.

## Features

- **Signup Form**: Users can enter their personal information and upload their resume.
- **Responsive Design**: The application is fully responsive and works well on mobile devices.
- **Cloudinary Integration**: Resumes are uploaded to Cloudinary, ensuring secure and scalable storage.
- **Thank You Page**: After successful submission, users are redirected to a thank you page confirming their submission.

## Project Structure

```
YourHR/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Signup.js
│   │   ├── pages/
│   │   │   └── ThankYou.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
├── backend/
│   ├── config/
│   │   └── cloudinaryConfig.js
│   ├── models/
│   │   └── JobSeeker.js
│   ├── routes/
│   │   └── jobSeeker.js
│   ├── server.js
│   ├── .env
│   ├── package.json
├── README.md
```

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Cloud Storage**: Cloudinary
- **Deployment**: Vercel (Frontend), Render (Backend)

## Installation and Setup

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)
- Cloudinary account (for storing resumes)

### Backend Setup

1. **Navigate to the `backend` directory**:

   ```bash
   cd backend
   ```

2. **Install backend dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables** in a `.env` file:

   ```plaintext
   MONGO_URI=your_mongo_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the backend server**:

   ```bash
   node server.js
   ```

### Frontend Setup

1. **Navigate to the `frontend` directory**:

   ```bash
   cd ../client
   ```

2. **Install frontend dependencies**:

   ```bash
   npm install
   ```

3. **Run the frontend development server**:

   ```bash
   npm start
   ```

### Running the Application

- **Backend**: Ensure the backend server is running by executing `node server.js` in the `backend` directory.
- **Frontend**: Start the React development server by running `npm start` in the `frontend` directory.
- **Access the application**: Open your browser and navigate to `http://localhost:3000` to view the signup form.

## Usage

1. **Signup**: Enter your name, email, phone number, and upload your resume.
2. **Submit**: After clicking submit, the data is stored in MongoDB, and the resume is uploaded to Cloudinary.
3. **Thank You Page**: You will be redirected to a thank you page confirming the successful submission.

## Cloudinary Integration

This project uses [Cloudinary](https://cloudinary.com/) to store resumes securely in the cloud. Cloudinary provides scalable and reliable media management, ensuring that resumes are stored safely and are easily accessible via a secure URL.

### How It Works

- **File Upload**: When a user submits the signup form, the resume is uploaded to Cloudinary using the Cloudinary Node.js SDK.
- **URL Storage**: The secure URL returned by Cloudinary is stored in MongoDB along with the user's details.
- **File Management**: The uploaded resume can be managed directly from the Cloudinary dashboard, where you can view, download, or delete files as needed.

## Deployment

- **Frontend**: Deployed using Vercel.
- **Backend**: Deployed using Render.


## Contributing

Feel free to fork this project and submit pull requests. For major changes, please open an issue to discuss what you would like to change.




