const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', function (req, res) {
 return res.send('Express up and running...');
});


app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
})
