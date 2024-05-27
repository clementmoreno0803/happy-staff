const express = require('express');
const app = express();
const sequelize = require('./config/database');
const models = require('./models');
const applicationRoutes = require('./routes/applications');
const userRoute = require('./routes/user')

// Configurer les middlewares
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Utiliser les routes
app.use('/applications', applicationRoutes);
app.use('/user', userRoute)

// Synchroniser les modèles et démarrer le serveur
sequelize.sync({ force: true }).then(() => {  // force: true réinitialise les tables
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
