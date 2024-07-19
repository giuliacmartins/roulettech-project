# Simple Blog Project

Demo Video: https://drive.google.com/file/d/1_g_ZBJRmRXj8znxtcVusk3k3AxbGDuEX/view?usp=sharing

## Overview

This project is a simple blog application featuring a frontend built with React.js and a backend powered by Django. It allows users to view, create, and manage blog posts. The project is deployed on AWS, utilizing S3 for frontend hosting, EC2 for backend hosting.

## Tech Stack

Frontend: React.js 

-JavaScript library for building user interfaces.

Backend: Django 

-Python web framework for building robust backend APIs.

Deployment: 

-Frontend: AWS S3 

-Backend: AWS EC2

## Architecture

Frontend: 

-React.js application served as static files from an AWS S3 bucket.

Backend:

-Django application hosted on an AWS EC2 instance.

## Deployment

### Running the React Frontend

1. Navigate to the frontend directory

`cd blog-project-frontend`

2. Install dependencies (if needed)

`npm install`

3. Start the development server

`npm start`

- The React application should now be running at `http://localhost:3000`

### Running the Django Backend

1. Navigate to the backend directory

`cd blog-backend`

2. Run database migrations

`python manage.py migrate`

-You would have to install any packages needed such as rest framework and corsheaders prior along with python and pip 

3. Start the Django development server

`python manage.py runserver`

The Django application should now be running at `http://localhost:8000`