const { ipcRenderer } = require(electron);

console.log("hello, world");

ipcRenderer.on('ping-pong', (event, data) => {
  console.log('Received ping: ' + data);

  ipcRenderer.send('ping-pong', {
    ping: true
  }, 1000);
});

const headerBar = document.getElementById("mainBar");
const bodyBar = document.getElementById("bodyBar");

headerBar.insert("<h1>Mergd</h1>");

bodyBar.insert("<p>Hello, world. My name is Mergd.</p>");
