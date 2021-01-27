const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  // this connects the user with the profile
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  // the more restaurants you visit, the more badges you earn
  badges: [
    {
      badge: {
        type: String
      }
    }
  ],
  // users can add a short bio to their profile
  bio: {
    type: String
  },
  // users can showcase a few of their favorite dishes from restaurants on their profile
  favorites: [
    {
      restaurant: {
        type: String,
        required: true
      },
      dish: {
        type: String,
        required: true
      },
      description: {
        type: String
      }
    }
  ],
  // users can add their social account information to display on their profiles
  social: {
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    youtube: {
      type: String
    },
    blog: {
      type: String
    }
  },
  // date field required for mongoDB
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
