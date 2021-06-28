const socket=io("http://localhost:8000");

const form= document.getElementById("send-container");

const msgInp= document.getElementById("msgInp");

const messageContainer= document.querySelector(".container");

const append=(message, position)=>{
    const messageElement=document.createElement("div");
    messageElement.innerText("message");
    messageElement.classList.add("message");
    messageElement.classList.add("position");
    messageContainer.append(messageElement);
}


form.addEventListener("submit", (e)=>{
    e.preventDefault;
    const message= msgInp.value;;
    append(`You: ${message}`, right);  
    socket.emit("send-msg", message);
    msgInp.value="";
});


const name= prompt("enter your name to join");
socket.emit("new-user-joined");

socket.on("user-joined", name=>{
    append(`${name} joined the chat`, right);
})



socket.on("receive-msg", data=>{
    append(`${data.message}: ${data.users}`, left );
})