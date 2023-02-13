require('../db/connection.js');
const Hotel=require('../model/hotelSchema.js');
const Booking=require('../model/bookingSchema.js');
const express=require('express');
const router=express.Router();


// getHotel data api


router.get('/displayhoteldata',function(req,res){

    Hotel.find(function(err,data){
        if(err){
            console.log(err);
        }
        else{
           
            console.log({data:data},data);
            res.status(200).json({data:data});
        }
        });
    
});

    // show data by Id
    router.get('/showdata/:id',function(req,res){
        console.log(req.params.id);
        Hotel.findById(req.params.id,function(err,data){
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
                res.status(200).json({data:data});
        }
    });
});


router.post('/booking/:roomcode/:bookingfrom/:bookingto',async(req,res)=>{
    // console.log(req.body);
    // res.json({message:req.body});
    // below schema names are mentioned in request body
    const roomcode=req.params.roomcode;
    const bookingfrom=req.params.bookingfrom;
    const bookingto=req.params.bookingto;
    const {pname,mobile,email}=req.body;
    if(!pname|| !mobile || !email ){
        return res.status(422).json({error:"plz fill all filled"});
    }

    const user=new Booking({pname,mobile,email,roomcode,bookingfrom,bookingto})
    const userbooking=await user.save();
    if(userbooking){
        return res.status(201).json({message:"room booked"});
    }
});

module.exports=router;
