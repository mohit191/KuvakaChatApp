const socket = io('http://localhost:8000');

const loginForm = document.getElementById('loginForm');
const loginName = document.getElementById('loginName');

const messageContainer = document.querySelector(".container") 

const inputMsg = document.getElementById('inputMsg');
const chatForm = document.getElementById('chatForm');

const append = (message, position) =>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("loginName=:::", loginName.value);
    socket.emit('new-user-joined-msg-to-sever', loginName.value);
    document.getElementById('joinChat').style.display = 'none';
}) 

socket.on('new-user-welcomed-msg-to-client',(loginName)=>{
    console.log(`new-user-welcomed-msg-to-client ${loginName}`);
    append(`${loginName} joined the chat!`, 'center');
})

chatForm.addEventListener('submit', (e) => {
    console.log("chatForm===");
    e.preventDefault();
    const message = inputMsg.value;
    console.log("message = ", message);
    //append(`You: ${message}`, 'right');
    append(`You: ${message}`, 'right');
    
    socket.emit('client-msg-to-server', message);
    inputMsg.value = '';
})

socket.on('server-msg-to-client',(data)=>{
    append(`${data.name}:${data.message}`, 'left');
})

socket.on('disconnect-msg-to-client',(data)=>{
    if(data && data.name)
    {
        append(`${data.name} left the chat`, 'center');
    }
})

