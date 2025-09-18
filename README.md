# Setup
To be use together with sg_property_datapipeline project

#### Installing node packages
a. Using repo package.json
```
npm install
```

b. Using fresh vite@latest package.json
```
npm install
npm install express mysql2 cors axios dotenv
npm install chart.js react-chartjs-2
npm install react-leaflet leaflet leaflet.heat
npm install react-tabs
```

#### Preparing .env file
Creating .env in root folder with the following field
```
DB_HOST = <to_fill_in_database_url>
DB_USER = <to_fill_in_database_username>
DB_PASSWORD = <to_fill_in_database_password>
DB_NAME = <to_fill_in_database_name>
PORT = <to_fill_in_database_port>
```

# Usage
#### Running server
To read from MySQL database and serves API request
```
node ./scripts/server.js
```

#### Running the react client
```
npm run dev
```

