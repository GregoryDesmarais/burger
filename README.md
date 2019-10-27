# Burger

## Description

A simple full-stack application, deployed to Heroku, which utilizes a custom ORM and MYSQL to Store, list, and update the end-user's input.  In this case, to track names of Burgers they may have or already have eaten.  The page is dynamically created using Express and Handlebars.

### Requirements

- node.js
- MYSQL database (local or remote)

### Node Packages Used

- express.js
- express-handlebars.js
- path.js
- mysql


## Local Installation

	git clone https://github.com/GregoryDesmarais/burger.git
	cd burger
	npm install

You will need to run the SQL database locally, using the schema and seed files to create and initally populate the database.  Please update the connection information in config/connection.js to your SQL server's settings.

## Deployed Site
[Heroku](https://whispering-escarpment-19131.herokuapp.com/)