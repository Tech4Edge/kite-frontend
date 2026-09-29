import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const distPath = 't:\\Kite Project\\kite-frontend\\dist';
const zipPath = 't:\\Kite Project\\cpanel-public_html-deploy.zip';

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

console.log('Zipping dist folder into cpanel-public_html-deploy.zip...');
execSync(`powershell -NoProfile -Command "Compress-Archive -Path '${distPath}\\*' -DestinationPath '${zipPath}' -Force"`, {
  stdio: 'inherit'
});

const sizeMB = (fs.statSync(zipPath).size / (1024 * 1024)).toFixed(2);
console.log(`✅ Success! Created ${zipPath} (${sizeMB} MB)`);
