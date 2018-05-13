let Restaurant = mongoose.model('Restaurant');

let RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter Restaurant Name'],
    minlength: [3, 'Restuarant Name has to be at least three characters long'],
    trim: true
  },
  cuisine: {
    type: String,
    required: [true, 'Please enter Restaurant Cuisine'],
    minlength: [3, 'Restuarant Cuisine has to be at least three characters long'],
    trim: true
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
}, {timestamps: true})

module.exports = mongoose.model('Restaurant', RestaurantSchema);
