const express=require('express')
const Home=express.Router()

const Devotion=require('../routes/Devotion')
const Lofi=require('../routes/Lofi')
const Old=require('../routes/Old')
const Romantic=require('../routes/Romantic')
const Sad=require('../routes/Sad')
const TopHits=require('../routes/TopHits')
const Otp=require('../routes/Otp')
const UserData = require('../routes/UserData')
const VerifyfillData = require('../routes/VerifyFillData')
const OtpVerify=require('../routes/OtpVerify')
const LoginVerify=require('../routes/LoginVerify')
const Forgot=require('../routes/Forgot')
const Slider=require('../routes/Slider')
const SongFetch=require('../routes/SongFetch')
const InternationalTopHits=require('../routes/InternationalTopHits')
const Dance = require('../routes/Dance')
const SingerPlaylist=require('../routes/SingerPlaylist')
const Search = require('../routes/Search')
const ProfileData = require('../routes/ProfileData')
const AddToFavourite = require('../routes/AddToFavourite')

Home.use('/devotion',Devotion)
Home.use('/lofi',Lofi)
Home.use('/old',Old)
Home.use('/romantic',Romantic)
Home.use('/sad',Sad)
Home.use('/tophits',TopHits)
Home.use('/otp',Otp)
Home.use('/userdata',UserData)
Home.use('/verifyfilldata',VerifyfillData)
Home.use('/verifyotp',OtpVerify)
Home.use('/loginverify',LoginVerify)
Home.use('/forgot',Forgot)
Home.use('/slider',Slider)
Home.use('/songfetch',SongFetch)
Home.use('/internationaltophits',InternationalTopHits)
Home.use('/dance',Dance)
Home.use('/singerplaylist',SingerPlaylist)
Home.use('/search',Search)
Home.use('/profiledata',ProfileData)
Home.use('/addtofavourite',AddToFavourite)

Home.use('/sliderimages', express.static('../public/image/Slider'));
Home.use('/singerplaylist', express.static('../public/image/Playlist'));
Home.use('/uploads',express.static('../uploads'))

Home.use('/tophitsimages', express.static('../public/image/TopHits'));
Home.use('/internationaltophits', express.static('../public/image/InternationalTopHits'));
Home.use('/romantic', express.static('../public/image/Romantic'));

Home.get('/',(req,res)=>{
    res.send("<h1>I am Home</h1>")
})

module.exports = Home