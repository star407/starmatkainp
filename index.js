const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");

const cors = require('cors')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'.')))

// cors
// app.use(cors)
// const corsOptions ={
//   origin:'http://localhost:8080', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,
// }

app.use(cors())

// initializing port
let port = 3001

// setting headers


// // swagger config
// const swaggerUi = require('swagger-ui-express')
// const swaggerDoc = require('./swagger.json');


// route
app.get('/', (req, res) => {
    res.sendFile("index.html")
  })


const initServer =
    async () => {
  try {
    // listening to the server
    app.listen(
           port, () => {console.log(`Example app listening on port ${port}`)})

    //     // connecting to the database
    //     await mongoose.connect(process.env.MONGO_URI)
    // console.log('Connected to Stackruit database.')
  } catch (error) {
    // exit server on error
    console.error(error);
    process.exit(1);
  }
}

// setting up swagger
// endpoint = http://localhost:<port>/api-docs/
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

initServer()

module.exports = {
    app
};