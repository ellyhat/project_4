#DEAR FRIEND! To make our lovely project work, we need to implement all that!

#Settings
##1 - connect db - package JSON:
Jane:
"create-database": "createdb project_4",
"create-tables": "psql jane -h localhost -d project_4 -f sql/create_users_table.sql",
"seed-tables": "psql jane -h localhost -d project_4 -f sql/seed_users_table.sql",
Elle:
"create-database": "sudo -u postgres psql postgres -h localhost -f sql/create_database.sql",
"create-tables": "sudo -u postgres psql postgres -h localhost -d project_4 -f sql/create_users_table.sql",
"seed-tables": "sudo -u postgres psql postgres -h localhost -d project_4 -f sql/seed_users_table.sql",

##2 - packages to see ejs
npm install -s ejs

##3 - packages to read css and layouts
npm install -s express-ejs-layouts
npm install -s ejs-layouts

##4 - packages to see http requests and errors
npm install -s morgan

##5 - packages to read .env files and ignore it after in gitignore (DUH)
npm install -s dotenv
Write to gingnore after node modules: .env

##6 - express packages if not installed
npm install -s express

##7 - promise package for databases
npm install -s pg-promise