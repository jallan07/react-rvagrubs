const functions = require('firebase-functions');
const app = require('express')();

const { getAllDeals } = require('./APIs/deals');

app.get('/deals', getAllDeals);
exports.api = functions.https.onRequest(app);
