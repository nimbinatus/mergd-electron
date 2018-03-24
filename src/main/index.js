const { ipcMain, app, BrowserWindow, remote } = require(electron);

let mainWindow;

app.on(ready, () => {
  console.log("Hello, world. Application ready.");

  mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 1000
  });

  mainWindow.loadURL('file://${__dirname}/../renderer/index.html');

  remote.getCurrentWindow().show();

  ipcMain.on('ping-pong', (event, data) => {
    console.log("Received " + data);
  });

  setTimeout(() => {
    mainWindow.webContents.send('ping-pong', {
      ping: true
    }, 1000);
  });

});