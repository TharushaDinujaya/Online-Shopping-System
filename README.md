# Online-Shopping-System
This is the submitted project for the IJSE Final assignment CMJD90 Batch.

## Used Frameworks & Database Technology

- *Angular*
- *Node Js + Express Js*
- *Mongo DB*

### 1. Installing Node Js
[Download and install Node.js](https://nodejs.org/) (includes npm)

### 2. Installing Mongo DB
[Download and install MongoDB](https://www.mongodb.com/try/download/community)

### 3. Installing Angular CLI
[Install Angular CLI using Node](https://v17.angular.io/guide/setup-local)

## Download and run

### Clone the Repository to your local machine
```bash
git clone https://github.com/TharushaDinujaya/Online-Shopping-System
cd Online-Shopping-System
```

### Install the required npm packages for the backend.
```bash
cd backend
npm install
```

### Install the required npm packages for the frontend.
```bash
cd frontend
npm install
```

### Import sample data into mongoDB
- Open Mongo DB and connect
- Create abcshopping and import items.json file

Update backend/.env file PORT for backend running port
Update backend/index.js "mongodb://localhost:27017/abcshopping" with your local Monog DB database.

### Run the backend
```bash
cd backend
nodemon
```

### Run the frontend
```bash
cd frontend
ng serve
```

The frontend running frontend is displayed in the terminal.

## Screenshots
### Home page
![Home Page](https://github.com/TharushaDinujaya/Online-Shopping-System/blob/main/docs/Home.jpeg)
### About Us page
![About Us Page](https://github.com/TharushaDinujaya/Online-Shopping-System/blob/main/docs/AboutUs.jpeg)
### Admin Page
![Admin Page](https://github.com/TharushaDinujaya/Online-Shopping-System/blob/main/docs/Admin.jpeg)
### Contact Us
![Contact Us Page](https://github.com/TharushaDinujaya/Online-Shopping-System/blob/main/docs/ContactUs.jpeg)
### Order Page
![Order Page](https://github.com/TharushaDinujaya/Online-Shopping-System/blob/main/docs/Order.jpeg)

### Licence
Apache 2.0 licence
