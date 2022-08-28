const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    price: {
      type: String,
      required: true,
      trim: true
    },
    customerReview: {
      type: String,
    },
    manufaturer: {
      type: String,
    },
    thumbnailImage: {
      type: String,
    },
    categoryPath: {
      type: [String]
    }
  }
)

module.exports = productSchema
