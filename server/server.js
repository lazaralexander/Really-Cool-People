const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
<<<<<<< HEAD
const { typeDefs, resolvers } = require('./schemas');

=======
>>>>>>> 7b8f495 (rebase 5)

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res) => {
  console.log("hittin index path")
  console.log(req);
=======
app.get('/', (req, res) => {
>>>>>>> 7b8f495 (rebase 5)
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
<<<<<<< HEAD
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
=======
>>>>>>> 7b8f495 (rebase 5)
