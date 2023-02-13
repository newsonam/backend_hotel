// productschema of products
const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({

    pname: {
        type: String

    },
    email:
    {
        type: String

    },
    mobile:
    {
        type: String

    },
    roomcode:
    {
        type: String
    },
    bookingfrom:
    {
        type: String

    },
    bookingto:
    {
        type: String

    },

    active: Boolean,

    date:
    {
        type: Date,
        default: Date.now

    }


});


const Booking = new mongoose.model("BookingDetails", bookingSchema);

module.exports = Booking;
