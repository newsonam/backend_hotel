// productschema of products
const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({
  
    name: {
        type: String

    },
    code:
    {
        type: String

    },
    status:
    {
        type: String

    },
    address:
    {
      type:String
    },
    hotelpicture:
    {
        type: String

    },
    rooms:
    {
        type: Array

    },
    totalrooms:
    {
    type:Number
    },
       availablerooms:
    {
    type:Number
    },

    active: Boolean,

    date:
    {
        type: Date,
        default: Date.now

    }


});



const Hotel = new mongoose.model("HotelDetails", hotelSchema);


// insert records
const insertDocument =  () => {
    const result =  Hotel.insertMany([
    {
         "name": "Hotel 1",
  "code": "H1",
  "status": true,
  "address":"114B,Dwarka Mor,New Delhi",
  "hotelpicture": "images/hotel1.jpg",
  "rooms":["H1R1","H1R2","H1R3"],
  "totalrooms":"3",
  "availablerooms":"3"
},
{
  "name": "Hotel 2",
  "code": "H2",
  "status": false,
   "address":"12,C5D,Tilak nagar,New Delhi",
  "hotelpicture": "images/hotel2.jpg",
  "rooms":["H2R1","H2R2"],
    "totalrooms":"2",
  "availablerooms":"2"
},
{
  "name": "Hotel 3",
  "code": "H3",
  "status": true,
   "address":"112,Block-B,Rajouri Garden,New Delhi",
  "hotelpicture": "images/hotel3.jpeg",
   "rooms":["H3R1","H3R2","H3R3"],
     "totalrooms":"3",
  "availablerooms":"3"
},
{
 
  "name": "Hotel 4",
  "code": "H4",
  "status": true,
   "address":"11A,block-A,Pitampura,New Delhi",
  "hotelpicture": "images/hotel4.jpeg",
   "rooms":["H4R1","H4R2"],
     "totalrooms":"2",
  "availablerooms":"2"
}
       
    ]);
}

//  insertDocument();



module.exports = Hotel;
