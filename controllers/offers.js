// =====================
// PUBLIC ROUTES
// =====================

// @desc        get all offers
// @method      GET
// @route       /api/v1/offers
exports.getAllOffers = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all special offers data listed on the RVA GRUBS API'
  });
};

// @desc        Get a single offer
// @method      GET
// @route       /api/v1/offers/:id
exports.getOfferById = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Get a special offer by ID' });
};

// =====================
// PRIVATE ROUTES
// =====================

// @desc        Create a new offer
// @method      POST
// @route       /api/v1/offers
exports.createOffer = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create a new special offer' });
};

// @desc        Update a single offer
// @method      PUT
// @route       /api/v1/offers/:id
exports.updateOffer = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Update a special offer by ID' });
};

// @desc        delete a single offer
// @method      DELETE
// @route       /api/v1/offers/:id
exports.deleteOffer = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Delete a special offer by ID' });
};
