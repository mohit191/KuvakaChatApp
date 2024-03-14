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
By updating "CHAT_SERVER_PORT" in .env of backend folder
5) To run project, simply run "node index.js"

Hurry! Backend is up now.

For deployment:
We can use pm2 to deploy our backend on any cloud server.
Make sure to open those port publicly.



Steps to run Frontend(Chat Client):
1) Go inside the frontend folder
2) Run our index.html file(Rest it will take care itself)
Note: When we deployed the chat server on live, dont forget to update backend socket url in index.html and js/client.js file


Working:
1) User will open client page.
2) Fill his/her name.
3) Hurray! User have joined the chat room.
(Internally, we are mapping user instance with socket id, so duplicate name will not cause issue)
4) When new user joined, all user notified (except himself/herself), same with when new mxg comes,
and when someone left the chat room.





