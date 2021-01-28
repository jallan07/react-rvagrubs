const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/rvagrubs',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );

  console.log(
    'MongoDB connected: ' + `${conn.connection.host}`.cyan.bold.underline
  );
};

module.exports = connectDB;
