const express=require('express')
const InternationalTopHits=express.Router()

InternationalTopHits.get('/',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Calm Down",
            Singer:"Rema, Selena Gomez",
            ID:"WcIcVapfqXw"   
        },
        {
            id:2,
            Name:"Unstoppable",
            Singer:"Sia",
            ID:"xi6yEz1dAMY"   
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
            ID:"TO-_3tck2tg"   
        },
        {
            id:6,
            Name:"Love Me Like You Do",
            Singer:"Ellie Goulding",
            ID:"AJtDXIazrMo"   
        },
        {
            id:7,
            Name:"Let Me Love You",
            Singer:"DJ Snake",
            ID:"euCqAq6BRa4"   
        },
        {
            id:8,
            Name:"Believer",
            Singer:"Imagine Dragons",
            ID:"7wtfhZwyrcc"   
        },
        {
            id:9,
            Name:"People",
            Singer:"Libianca",
            ID:"rJWdfDPZ9Ck"   
        },
        {
            id:10,
            Name:"Señorita",
            Singer:"Shawn Mendes, Camila Cabello",
            ID:"Pkh8UtuejGw"   
        },


    ]
    res.send(array)
})

module.exports=InternationalTopHits