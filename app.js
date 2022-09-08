require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan')
const logger = require('./modules/shared/libraries/Logger');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(helmet());

app.use(
  morgan('dev', {
      stream: {
          write: (log) =>
              logger.info(
                  log.substring(0, log.lastIndexOf('\n')),
                  'morgan-http'
              ),
      },
  })
);

const product = require('./routes/product');

app.use('/product', product);


app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});