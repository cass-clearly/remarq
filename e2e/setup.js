import { spawn } from 'child_process';
import { promisify } from 'util';
import { exec as execCb } from 'child_process';
const exec = promisify(execCb);

let serverProcess = null;

export async function setup() {
  console.log('Starting test database...');
  await exec('docker-compose -f docker-compose.test.yml up -d');
  
  // Wait for database to be ready
  console.log('Waiting for database...');
  await new Promise(r => setTimeout(r, 3000));
  
  // Start server on test port with test database
  console.log('Starting server...');
  process.env.DATABASE_URL = 'postgresql://postgres:testpassword@localhost:5433/postgres';
  process.env.PORT = 3001;
  
  serverProcess = spawn('node', ['server/index.js'], {
    stdio: 'inherit',
    env: process.env
  });
  
  // Wait for server to be ready
  await new Promise(r => setTimeout(r, 2000));
  
  console.log('Test environment ready!');
  return { serverProcess };
}

export async function teardown() {
  console.log('Cleaning up...');
  if (serverProcess) {
    serverProcess.kill();
  }
  await exec('docker-compose -f docker-compose.test.yml down');
  console.log('Cleanup complete');
}

// Handle cleanup on exit
process.on('exit', () => teardown());
process.on('SIGINT', async () => {
  await teardown();
  process.exit();
});
