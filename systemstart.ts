// watcher.ts
import * as fs from 'fs';
import { spawn } from 'child_process';

let childProcess: any;

function startApp() {
  console.log('Starting the application...');
  childProcess = spawn('node', ['dist/app.js']);

  if (childProcess) {
    childProcess.stdout.on('data', (data:any) => {
      console.log(`App output: ${data}`);
    });

    childProcess.stderr.on('data', (data:any) => {
      console.error(`App error: ${data}`);
    });

    childProcess.on('close', (code:any) => {
      console.log(`App exited with code ${code}`);
      startApp(); // Restart the application
    });
  }
}

startApp();

// Watch for changes in the app.ts file
fs.watch('./commands.ts', (event:any, filename:any) => {
  if (event === 'change') {
    console.log(`File ${filename} has changed. Restarting the application...`);
    if (childProcess) {
      setTimeout(()=>{
      childProcess.kill(); // Kill the current process
      startApp(); // Restart the application
      }, 2000)
    }
  }
});
