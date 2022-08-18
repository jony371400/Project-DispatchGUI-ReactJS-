import { ServerIP } from './Config.js'
console.log(ServerIP)

function UpdateUI(msg) {
    startpos.style.background = "#ff0000"

    store1.style.background = "#ff0000"
    store2.style.background = "#ff0000"
    store3.style.background = "#ff0000"

    P11.style.background = "#000000"
    P12.style.background = "#000000"
    P13.style.background = "#000000"
    P14.style.background = "#000000"
    P15.style.background = "#000000"
    P16.style.background = "#000000"
    P17.style.background = "#000000"
    P21.style.background = "#000000"
    P22.style.background = "#000000"
    P23.style.background = "#000000"
    P24.style.background = "#000000"
    P25.style.background = "#000000"
    P26.style.background = "#000000"
    P31.style.background = "#000000"
    P32.style.background = "#000000"
    P33.style.background = "#000000"
    P34.style.background = "#000000"
    P35.style.background = "#000000"
    P41.style.background = "#000000"
    P42.style.background = "#000000"
    P43.style.background = "#000000"
    P44.style.background = "#000000"
    P45.style.background = "#000000"
    // #endregion

    if (msg.vehicleID === "I001MR") {
        console.log(msg.vehicleID)
        console.log(msg.vertexName)

        if (msg.vertexName === startpos.id) {
            startpos.style.background = "#ffff00"
        }
        else if (msg.vertexName === store1.id) {
            store1.style.background = "#ffff00"
        }
        else if (msg.vertexName === store2.id) {
            store2.style.background = "#ffff00"
        }
        else if (msg.vertexName === store3.id) {
            store3.style.background = "#ffff00"
        }
        else if (msg.vertexName === P11.id) {
            P11.style.background = "#ffff00"
        }
        else if (msg.vertexName === P12.id) {
            P12.style.background = "#ffff00"
        }
        else if (msg.vertexName === P13.id) {
            P13.style.background = "#ffff00"
        }
        else if (msg.vertexName === P14.id) {
            P14.style.background = "#ffff00"
        }
        else if (msg.vertexName === P15.id) {
            P15.style.background = "#ffff00"
        }
        else if (msg.vertexName === P16.id) {
            P16.style.background = "#ffff00"
        }
        else if (msg.vertexName === P21.id) {
            P21.style.background = "#ffff00"
        }
        else if (msg.vertexName === P22.id) {
            P22.style.background = "#ffff00"
        }
        else if (msg.vertexName === P23.id) {
            P23.style.background = "#ffff00"
        }
        else if (msg.vertexName === P24.id) {
            P24.style.background = "#ffff00"
        }
        else if (msg.vertexName === P25.id) {
            P25.style.background = "#ffff00"
        }
        else if (msg.vertexName === P26.id) {
            P26.style.background = "#ffff00"
        }
        else if (msg.vertexName === P31.id) {
            P31.style.background = "#ffff00"
        }
        else if (msg.vertexName === P32.id) {
            P32.style.background = "#ffff00"
        }
        else if (msg.vertexName === P33.id) {
            P33.style.background = "#ffff00"
        }
        else if (msg.vertexName === P34.id) {
            P34.style.background = "#ffff00"
        }
        else if (msg.vertexName === P35.id) {
            P35.style.background = "#ffff00"
        }
        else if (msg.vertexName === P41.id) {
            P41.style.background = "#ffff00"
        }
        else if (msg.vertexName === P42.id) {
            P42.style.background = "#ffff00"
        }
        else if (msg.vertexName === P43.id) {
            P43.style.background = "#ffff00"
        }
        else if (msg.vertexName === P44.id) {
            P44.style.background = "#ffff00"
        }
        else if (msg.vertexName === P45.id) {
            P45.style.background = "#ffff00"
        }
    }
}

// SocketIO
var socket = io.connect(ServerIP);
var socket = io.connect('http://127.0.0.1:3000');
var socket = io.connect('http://10.10.0.76:3000');

socket.on('connect', () => {
    socket.send('Socket Connected!')
})

socket.on('message', (msg) => {
    console.log('Recive Message : ', msg)
    UpdateUI(msg)
});