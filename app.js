const Sequelize = require('sequelize');

const connection = new Sequelize('links','root','',{
	host:'localhost',
	dialect:'mariadb'
});

var Hook = connection.define('hooks',{
	title:Sequelize.STRING,
	body:Sequelize.TEXT
});

connection.sync();
/*
	const connection = new Sequelize('links','root','',{
		dialect:'sqlite'
	});
*/
// в случае база данной отличной от mysql and mariadb