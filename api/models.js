const mongoose = require('mongoose')

const ParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isOnline: {
    type: Boolean,
    required: true,
  },
  paymentTerms: {
    type: Number,
    required: true,
  },
  warranty: {
    type: Number,
    required: true,
  },
  productionTime: {
    type: Number,
    required: true,
  },
  hasRaisingQualityEvents: {
    type: Boolean,
    required: true,
  },
})

const AuctionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startedAt: {
    type: Number,
    required: true,
  },
  participants: {
    type: [ParticipantSchema],
  },
})

const Auction = mongoose.model('Auction', AuctionSchema)

module.exports = { Auction }