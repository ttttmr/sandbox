version.innerHTML = "version: " + eval5.Interpreter.version;
var interpreter = new eval5.Interpreter({});
function run() {
	try {
		var result = interpreter.evaluate(code.value);
		results.innerText = result;
		console.log(result);
	} catch (e) {
		console.log(e);
		results.innerText = e.message;
	}
	runBtn.disabled = false;
}

function startRun() {
	runBtn.disabled = true;
	results.in = "parsing...";
	setTimeout(run, 10);
}
main();
function main() {
	code.value = `
// eval without window
// console is not defined
1+1`;

	startRun();
}
