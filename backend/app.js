const express = require('express');
const app = express();
const sequelize = require('./config/database');
const models = require('./models');
const applicationRoutes = require('./routes/applications');
const userRoute = require('./routes/user');
const jobOfferRoute = require('./routes/jobOffer');
const companyRoute = require('./routes/company');
const nodemailer = require('nodemailer');
const cors = require('cors')


app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/applications', applicationRoutes);
app.use('/user', userRoute);
app.use('/jobOffer', jobOfferRoute);
app.use('/company', companyRoute);

// Envoie des mails sur Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADRESSE,
    pass: process.env.GMAIL_PASSWORD
  },
});

// Route pour gérer l'envoi du formulaire
app.post('/send-email', (req, res) => {
  const { poste,
  email,
  name,
  tel,
  meeting,
  preference} = req.body;

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_ADRESSE,
    subject: 'Vous avez un nouveau potentiel candidat',
    text: `Vous avez un nouveau message de ${name}, pour un poste de ${poste}
    Il souhaiterait être recontacté via ${preference}, le ${meeting}.
    Ses coordonnées téléphoniques sont ${tel} et email ${email}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Synchroniser les modèles et démarrer le serveur
sequelize.sync({ force: true }).then(() => {  // force: true réinitialise les tables
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
