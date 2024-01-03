const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()
import "dotenv/config"
// require('dotenv/config')

const Home=require('./routes/Home')
// const Devotion=require('./routes/Devotion')
// const Lofi=require('./routes/Lofi')
// const Old=require('./routes/Old')
// const Romantic=require('./routes/Romantic')
// const Sad=require('./routes/Sad')
// const TopHits=require('./routes/TopHits')
// const Otp=require('./routes/Otp')
// const UserData = require('./routes/UserData')
// const VerifyfillData = require('./routes/VerifyFillData')
// const OtpVerify=require('./routes/OtpVerify')
// const LoginVerify=require('./routes/LoginVerify')
// const Forgot=require('./routes/Forgot')
// const Slider=require('./routes/Slider')
// const SongFetch=require('./routes/SongFetch')
// const InternationalTopHits=require('./routes/InternationalTopHits')
// const Dance = require('./routes/Dance')
// const SingerPlaylist=require('./routes/SingerPlaylist')
// const Search = require('./routes/Search')
// const ProfileData = require('./routes/ProfileData')
// const AddToFavourite = require('./routes/AddToFavourite')



const corsOption={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200
}

const dbOption={
    useNewUrlParser:true,
    useUnifiedTopology:true 
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors(corsOption))
app.use('/',Home)
// app.use('/devotion',Devotion)
// app.use('/lofi',Lofi)
// app.use('/old',Old)
// app.use('/romantic',Romantic)
// app.use('/sad',Sad)
// app.use('/tophits',TopHits)
// app.use('/otp',Otp)
// app.use('/userdata',UserData)
// app.use('/verifyfilldata',VerifyfillData)
// app.use('/verifyotp',OtpVerify)
// app.use('/loginverify',LoginVerify)
// app.use('/forgot',Forgot)
// app.use('/slider',Slider)
// app.use('/songfetch',SongFetch)
// app.use('/internationaltophits',InternationalTopHits)
// app.use('/dance',Dance)
// app.use('/singerplaylist',SingerPlaylist)
// app.use('/search',Search)
// app.use('/profiledata',ProfileData)
// app.use('/addtofavourite',AddToFavourite)

// app.use('/sliderimages', express.static('./public/image/Slider'));
// app.use('/singerplaylist', express.static('./public/image/Playlist'));
// app.use('/uploads',express.static('./uploads'))

// app.use('/tophitsimages', express.static('./public/image/TopHits'));
// app.use('/internationaltophits', express.static('./public/image/InternationalTopHits'));
// app.use('/romantic', express.static('./public/image/Romantic'));

const port=4000
mongoose.connect(process.env.DB_URL).then(()=>{
  console.log('DB Connect Succesfully..')
  
}).catch((err)=>{
    console.log(err)
})

const server=app.listen(port,()=>{
    console.log(`Server has been started on this ${port}`)
})