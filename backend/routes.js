// routes.js

const express = require('express');
const Devotion = require('./Devotion');
const Lofi = require('./Lofi');
const Old = require('./Old');
const Romantic = require('./Romantic');
const Sad = require('./Sad');
const TopHits = require('./TopHits');
const Otp = require('./Otp');
const UserData = require('./UserData');
const VerifyfillData = require('./VerifyFillData');
const OtpVerify = require('./OtpVerify');
const LoginVerify = require('./LoginVerify');
const Forgot = require('./Forgot');
const Slider = require('./Slider');
const SongFetch = require('./SongFetch');
const InternationalTopHits = require('./InternationalTopHits');
const Dance = require('./Dance');
const SingerPlaylist = require('./SingerPlaylist');
const Search = require('./Search');
const ProfileData = require('./ProfileData');
const AddToFavourite = require('./AddToFavourite');
const Home=require('/Home')

const Home = express.Router();

Home.use('/',Home)
Home.use('/devotion', Devotion);
Home.use('/lofi', Lofi);
Home.use('/old', Old);
Home.use('/romantic', Romantic);
Home.use('/sad', Sad);
Home.use('/tophits', TopHits);
Home.use('/otp', Otp);
Home.use('/userdata', UserData);
Home.use('/verifyfilldata', VerifyfillData);
Home.use('/verifyotp', OtpVerify);
Home.use('/loginverify', LoginVerify);
Home.use('/forgot', Forgot);
Home.use('/slider', Slider);
Home.use('/songfetch', SongFetch);
Home.use('/internationaltophits', InternationalTopHits);
Home.use('/dance', Dance);
Home.use('/singerplaylist', SingerPlaylist);
Home.use('/search', Search);
Home.use('/profiledata', ProfileData);
Home.use('/addtofavourite', AddToFavourite);

Home.use('/sliderimages', express.static('../public/image/Slider'));
Home.use('/singerplaylist', express.static('../public/image/Playlist'));
Home.use('/uploads', express.static('../uploads'))
Home.use('/tophitsimages', express.static('../public/image/TopHits'));
Home.use('/internationaltophits', express.static('../public/image/InternationalTopHits'));
Home.use('/romantic', express.static('../public/image/Romantic'));

Home.get('/', (req, res) => {
  res.send("<h1>I am Home</h1>")
});

module.exports = Home;
