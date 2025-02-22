import { exec } from 'child_process';

const migrationName: string | undefined = process.argv[2];

if (!migrationName) {
  console.error('Migration name is required');
  process.exit(1);
}

exec(`npx sequelize-cli migration:create --name ${migrationName}`, (error: Error | null, stdout: string, stderr: string) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});