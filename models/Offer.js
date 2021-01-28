const mongoose = require('mongoose');

const { Schema } = mongoose;

const OfferSchema = new Schema({
  // what is the offer?
  deal: {
    type: String,
    required: true
  },
  // offers must have a restaurant name, and may include contact info
  restaurant: {
    name: {
      type: String,
      required: true
    },
    contact: {
      website: {
        type: String
      },
      email: {
        type: String
      },
      phone: {
        type: String
      }
    },
    // offers can have likes
    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        }
      }
    ],
    // offers can have comments
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
        text: {
          type: String,
          required: true
        },
        name: {
          type: String
        },
        avatar: {
          type: String
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  // offers can expire
  expiration: {
    type: Date
  },
  // date field required for mongoDB
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Offer = mongoose.model('offer', OfferSchema);
