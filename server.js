const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function run(cmd, cwd) {
	const { stdout, stderr } = await exec(cmd, {cwd: cwd});
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
	return {stdout, stderr};
}

run("npm install");