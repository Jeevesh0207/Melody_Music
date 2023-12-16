const express=require('express')
const InternationalTopHits=express.Router()

InternationalTopHits.get('/',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Calm Down",
            Singer:"Rema, Selena Gomez",
            ID:"CQLsdm1ZYAw"   
        },
        {
            id:2,
            Name:"Unstoppable",
            Singer:"Sia",
            ID:"jJvDnYdD8JQ"   
        },
        {
            id:3,
            Name:"Gasolina",
            Singer:"Daddy Yankee",
            ID:"4CTBznuwV4w"   
        },
        {
            id:4,
            Name:"Perfect",
            Singer:"Ed Sheeran",
            ID:"2Vv-BfVoq4g"   
        },
        {
            id:5,
            Name:"Bones",
            Singer:"Imagine Dragons",
            ID:"ZNsPYmkSPeI"   
        },
        {
            id:6,
            Name:"Love Me Like You Do",
            Singer:"Ellie Goulding",
            ID:"bgjUzhdmmF0"   
        },
        {
            id:7,
            Name:"Let Me Love You",
            Singer:"DJ Snake",
            ID:"SMs0GnYze34"   
        },
        {
            id:8,
            Name:"Believer",
            Singer:"Imagine Dragons",
            ID:"W0DM5lcj6mw"   
        },
        {
            id:9,
            Name:"People",
            Singer:"Libianca",
            ID:"MBF1mTW4kFY"   
        },
        {
            id:10,
            Name:"Señorita",
            Singer:"Shawn Mendes, Camila Cabello",
            ID:"ow1QqW0jzTo"   
        },


    ]
    res.send(array)
})

module.exports=InternationalTopHits