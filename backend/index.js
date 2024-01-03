const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()

const routes=require('./routes/routes')

require('dotenv/config')



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
app.use('/', routes);



app.use('/sliderimages', express.static('./public/image/Slider'));
app.use('/singerplaylist', express.static('./public/image/Playlist'));
app.use('/uploads',express.static('./uploads'))
app.use('/tophitsimages', express.static('./public/image/TopHits'));
app.use('/internationaltophits', express.static('./public/image/InternationalTopHits'));
app.use('/romantic', express.static('./public/image/Romantic'));

const port=4000
mongoose.connect(process.env.DB_URL).then(()=>{
  console.log('DB Connect Succesfully..')
  
}).catch((err)=>{
    console.log(err)
})

const server=app.listen(port,()=>{
    console.log(`Server has been started on this ${port}`)
})