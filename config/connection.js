let connection;
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host     : 'localhost',
		port     : 3306,
		user     : 'root',
		password : 'avengers878',
		database : 'burgers_db'
	});
}

connection.js;
