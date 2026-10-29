// Development only: Create React App loads this file into the `npm start` server (it is not part of
// the production build). It runs the same handlers Vercel deploys from client/api, so the Razorpay
// flow works locally. Keys come from client/.env.local, which CRA loads into the server's
// environment; only REACT_APP_* variables ever reach the browser, so the secret stays server-side.
const express = require('express');
const createOrder = require('../api/create-order');
const verifyPayment = require('../api/verify-payment');

module.exports = function setupApi(app) {
  app.use('/api', express.json({ limit: '20kb' }));
  app.all('/api/create-order', (req, res) => createOrder(req, res));
  app.all('/api/verify-payment', (req, res) => verifyPayment(req, res));
};
