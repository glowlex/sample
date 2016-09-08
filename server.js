let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();
let users = new Map();

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

app.post('/users', (req, res) => {
    console.log(req.body);
	let email = req.body.email;
	let counter = (users.get(email) || 0);
	users.set(email, counter+1);	
	res.send(counter.toString());

});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});