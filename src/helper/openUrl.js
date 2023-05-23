import { exec } from 'node:child_process';

export default (url) => {
  switch (process.platform) {
    case 'darwin':
      exec(`open ${url}`);
      break;
    case 'win32':
      exec(`start ${url}`);
      break;
    default:
      console.log("can't open on this OS");
  }
};
