const express=require('express')
const Romantic=express.Router()

Romantic.get('/',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Apna Bana Le",
            Singer:"Arijit Singh & Sachin-Jigar",
            ID:"u2NAuswnTKs"   
        },
        {
            id:2,
            Name:"Rabba Janda",
            Singer:"Jubin Nautiyal",
            ID:"GjfxDRRLXAQ"   
        },
        {
            id:3,
            Name:"Thoda Thoda Pyaar",
            Singer:"Stebin Ben",
            ID:"USccSZnS8MQ"   
        },
        {
            id:4,
            Name:"Channa Ve",
            Singer:"Akhil Sachdeva & Mansheel Gujral",
            ID:"se9DDAwwGQY"   
        },
        {
            id:5,
            Name:"Jogi",
            Singer:"Yasser Desai & Aakanksha Sharma",
            ID:"HexFqifusOk"   
        },
        {
            id:6,
            Name:"Zaalima",
            Singer:"Arijit Singh and Harshdeep Kaur",
            ID:"lpdRqn6xwiM"   
        },
        {
            id:7,
            Name:"Jaan Ban Gaye",
            Singer:"Mithoon, Vishal Mishra & Asees Kaur",
            ID:"a6cJAFFQn_I"   
        },
        {
            id:8,
            Name:"Yu Tere Hue Hum",
            Singer:"Jubin Nautiyal & Palak Muchhal",
            ID:"kOEs6Ggs5xA"   
        },
        {
            id:9,
            Name:"Maiyya Mainu",
            Singer:"Sachet Tandon",
            ID:"1pkcaeMRrns"   
        },
        {
            id:10,
            Name:"Ik Tu Hai",
            Singer:"Jubin Nautiyal & Shashwat Sachdev",
            ID:"h1hdxIV-03M"   
        },
    ]
    res.send(array)
})

module.exports = Romantic