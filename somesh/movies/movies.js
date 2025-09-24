const express = require('express');
const app = express();
const port = 3000;
const version = "v1"
const cors = require('cors');
const corsoptions = {
    origin: '*'
}
app.use(cors(corsoptions));
app.use(express.json());




