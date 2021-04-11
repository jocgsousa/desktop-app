//import { MSICreator } from 'electron-wix-msi';
var MSICreator = require("electron-wix-msi").MSICreator;
const path = require("path");

async function start() {
    
// Step 1: Instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: path.resolve(__dirname,'dist','electronapp-win32-ia32'),
    description: 'One Aplication using Electron and ReactJs',
    exe: 'electronapp',
    name: 'Electron App',
    manufacturer: 'React Technologies',
    version: '1.0.0',
    appIconPath: path.resolve(__dirname,'build','favicon.ico'),
    outputDirectory: path.resolve(__dirname,'dist','windows-installer'),
    // Configure installer User Interface
        ui: {
          chooseDirectory: true
      },
  });
  
  // Step 2: Create a .wxs template file
  await msiCreator.create();
  
  // Step 3: Compile the template to a .msi file
  await msiCreator.compile();
}

start();
