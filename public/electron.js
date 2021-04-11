const { app, BrowserWindow } = require('electron')

require("../app");

const path = require('path');

const isDev = require('electron-is-dev');


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
       nodeIntegration: true,
    }
    
  })


    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

    if(isDev){
      win.webContents.openDevTools();
    }
    // Será exibido a tela assim que o conteúdo for carregado
    win.once('ready-to-show', ()=>{
      win.show()
    })
}



app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})