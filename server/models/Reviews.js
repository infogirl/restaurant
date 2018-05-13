let Review = mongoose.model('Review');

let ReviewSchema = new mongoose.Schema({
  _restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  name: {
    type: String,
    required: [true, 'Please enter name'],
    minlength: [3, 'Name should be at least three characters long'],
    trim: true
  },
  star: {
    type: Number,
    default: 1,
    min: [1, 'Every Restaurant deserves at least one star'],
    max: [5, 'Unfortunately, we cannot give a restaurant more than five stars']
  },
  content: {
    type: String,
    required: [true, 'Please enter review'],
    minlength: [3, 'Review should be at least three characters long'],
    trim: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Review', ReviewSchema);
