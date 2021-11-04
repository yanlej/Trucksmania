const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user');
const carteRoutes = require('./routes/carte');
const commandeRoutes = require('./routes/commande');
const evenementRoutes = require('./routes/evenement');
const foodtruckRoutes = require('./routes/foodtruck');
const foodtruckRouteTheme = require('./routes/foodtruck_theme');
const authRoutes = require('./routes/auth');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {

    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.setHeader(
        'Acces-Control-Allow-Methods',
        'GET, POST, PUT, DELETE'
    );
    res.setHeader(
        'Acces-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
})

app.use(cors());

app.use('/users', userRoutes);
app.use('/cartes', carteRoutes);
app.use('/commandes', commandeRoutes);
app.use('/evenements', evenementRoutes);
app.use('/foodtruck', foodtruckRoutes);
app.use('/foodtrucks', foodtruckRouteTheme);
app.use('/auth', authRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => console.log(`Connécté sur le port ${ports}`));