import { Server } from "socket.io";

const io = new Server({ 
    cors:{
        origin:"http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    console.log('someone has connected to')
    io.emit("firstEvent", "hello this is a test!")

    socket.on("disconnect", () => {
        console.log('someone has left')
    })
});



io.listen(5000)