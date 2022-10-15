const express = require('express');
const app = express();
app.use(express.json());
const port = 9000;

const cors = require('cors');

app.use(cors());
    
//Config (Import from config folder required)
require ('./config/mongoose.config')


//routes 
require('./routes/items.routes')(app)



app.listen( port, () => console.log(`Its Over ${port}!!!!!`) );