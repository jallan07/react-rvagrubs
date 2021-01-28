const express = require('express');

const {
  getAllOffers,
  createOffer,
  getOfferById,
  updateOffer,
  deleteOffer
} = require('../controllers/offers');

const router = express.Router();

// the routes below access the route of /api/v1/offers and then use a GET and POST request with the cooresponding methods defined from the controllers file
router.route('/').get(getAllOffers).post(createOffer);

// the routes below access the route of /api/v1/offers/:id and then use a GET, PUT, and DELETE request with the cooresponding methods defined from the controllers file
router.route('/:id').get(getOfferById).put(updateOffer).delete(deleteOffer);

module.exports = router;
