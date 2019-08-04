module.exports = io => {
    io.on('connection', (socket) => {
        console.log('New user connected');

        socket.on('userCoordinates',coords =>{
            //console.log(coords); //Podria guardar en una base de datos
            //socket.emit('userConnected',coords)
            socket.broadcast.emit('newUserCoordinates',coords);
        });
    });
}