const express = require('express');
const app = express();
const PATH = process.cwd(); // get current working directory of the server script
const PORT = 3000;


// serve static files
app.use('/code', express.static(`${PATH}/public/code`));
app.use('/contact', express.static(`${PATH}/public/contact`));
app.use('/portfolio', express.static(`${PATH}/public/portfolio`));
app.use('/', express.static(`${PATH}/public/home`));


app.listen(PORT, () => console.log(`app listening on ${PORT}`));