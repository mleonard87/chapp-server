import express from 'express';
import graphqlHTTP from 'express-graphql';
import ChappSchema from './schema';

var app = express();

// Requests to /graphql redirect to /
// app.all('/graphql', (req, res) => res.redirect('/'));

app.use('/graphql', graphqlHTTP({
  schema: ChappSchema,
  graphiql: true
}));

// Listen for incoming HTTP requests
const listener = app.listen(3000, 'localhost', () => {
  var host = listener.address().address;
  if (host === '::') {
    host = 'localhost';
  }
  var port = listener.address().port;
  console.log('Listening at http://%s%s', host, port === 80 ? '' : ':' + port);
  console.log('GraphiQL at http://%s%s/graphql', host, port === 80 ? '' : ':' + port);
});
