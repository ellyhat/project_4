#Purpose

Faux scheduling management application, creating users and schedule recorded in SQL databases. Main app found in app.js, with subsidiary router files. Written as a project submission for a developer bootcamp. 

#Set-up

##1 - connect db - package JSON:
Jane (Example Mac User commands):
"create-database": "createdb project_4",
"create-tables": "psql jane -h localhost -d project_4 -f sql/create_users_table.sql",
"seed-tables": "psql jane -h localhost -d project_4 -f sql/seed_users_table.sql",
Elle (Example Ubuntu app on Windows User):
"create-database": "sudo -u postgres psql postgres -h localhost -f sql/create_database.sql",
"create-tables": "sudo -u postgres psql postgres -h localhost -d project_4 -f sql/create_users_table.sql",
"seed-tables": "sudo -u postgres psql postgres -h localhost -d project_4 -f sql/seed_users_table.sql",

##2 - In addition to this, you must create your own .env file specifying DB_CONNECTION (terminal commands to to enter postgreSQL) and PORT variable (any number can be chosen)

Run commands in console in folder:
dropdb project_4
npm run create-database
npm run create-tables
npm run seed-tables

##2 - Install all packages outlined in package.json under "dependencies" by running the following command:
```npm install -s <insert package name>
