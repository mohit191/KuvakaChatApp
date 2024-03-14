Purpose:
We are creating Real-Time Chat Application using Socket for Kuvaka Tech


Tech Stack Used:
1) Node.js, Socket.io
2) HTML, CSS, Javascript


Prerequisite:

We are using Node.js as runtime environment. So, Make sure you have Node.js is installed.
Go to Node.js(https://nodejs.org/en) and download the LTS vesion of Node.js.
If everything installed fine,  you can type 
node -v (to check if is correct installed!)

In our case, we have used 20.11.1 LTS(Node.js) :-)


Steps to run backend(Chat Server):
1) Clone the project
2) Go inside "backend" folder
3) type "npm i" to download the dependency
4) Optional: We can customize the port on which we want to run the application:
By updating "CHAT_SERVER_PORT" in .env of the backend folder
5) To run the project, run "node index.js"

Hurry! The backend is up now.

For deployment:
We can use pm2 to deploy our backend on any cloud server.
Could you make sure to open those port publicly?



Steps to run Frontend(Chat Client):
1) Go inside the frontend folder
2) Run our index.html file(Rest it will take care itself)
Note: When we deploy the chat server on live, don't forget to update the backend socket URL in index.html and js/client.js file![Screen1](https://github.com/mohit191/KuvakaChatApp/assets/20399351/aa44040e-7c1a-4a70-9e5b-f1aac5febe07)![chatScreen](https://github.com/mohit191/KuvakaChatApp/assets/20399351/ce9ce591-c36a-41e7-9802-2a6504b54a68)




Working:
1) The user will open the client page.
2) Fill in his/her name.
3) Hurray! Users have joined the chat room.
(Internally, we are mapping user instances with socket ID, so duplicate names will not cause an issue)
4) When a new user joins, all users are notified (except himself/herself), same with when a new messages comes,
and when someone left the chat room.





