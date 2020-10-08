const app = require('./server');

/* Setup Server */
const port = 3000;
const server = app.listen(port, listening);

function listening(){
	console.log(`Server is running on localhost:${port}`);
}