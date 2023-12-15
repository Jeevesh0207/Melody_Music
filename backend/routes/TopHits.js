const express=require('express')
const TopHits=express.Router()

TopHits.get('/',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Pehle Bhi Main",
            Singer:"Vishal Mishra",
            ID:"QKMTreKTpug"   
        },
        {
            id:2,
            Name:"Jaan Denge Tumhe",
            Singer:"Laqshay Kapoor",
            ID:"D9fbtKjJ8rQ"   
        },
        {
            id:3,
            Name:"Yaad Ban Gaye",
            Singer:"Tulsi Kumar & Manan Bhardwaj",
            ID:"oaUwdKG2UQs"   
        },
        {
            id:4,
            Name:"Heeriye",
            Singer:"Arijit Singh & Jasleen Royal",
            ID:"RLzC55ai0eo"   
        },
        {
            id:5,
            Name:"Aisi Teri Yaadein",
            Singer:"Jubin Nautiyal",
            ID:"ly4moi2plX4"   
        },
        {
            id:6,
            Name:"Baby ft. Ludacris",
            Singer:"Justin Bieber",
            ID:"kffacxfA7G4"   
        },
        {
            id:7,
            Name:"Suraj Hua Maddham",
            Singer:"Alka Yagnik, Sonu Nigam",
            ID:"D0V8S0elRyA"   
        },
        {
            id:8,
            Name:"Chaand Baaliyan",
            Singer:"Aditya A.",
            ID:"7c3-Gei5j4w"   
        },
        {
            id:9,
            Name:"Tera Zikr",
            Singer:"Darshan Raval",
            ID:"HscrSwilshM"   
        },
        {
            id:10,
            Name:"Kali Kali Zulfon Ke",
            Singer:"Jubin Nautiyal, Rochak Kohli",
            ID:"224EFEddxMk"   
        },
        {
            id:11,
            Name:"Satranga",
            Singer:"Arjit Singh",
            ID:"HrnrqYxYrbk"   
        },


    ]
    res.send(array)
})

module.exports = TopHits