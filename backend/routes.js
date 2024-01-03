const express = require('express');
const router = express.Router();

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


router.use('/',Home)
router.use('/devotion', Devotion);
router.use('/lofi', Lofi);
router.use('/old', Old);
router.use('/romantic', Romantic);
router.use('/sad', Sad);
router.use('/tophits', TopHits);
router.use('/otp', Otp);
router.use('/userdata', UserData);
router.use('/verifyfilldata', VerifyfillData);
router.use('/verifyotp', OtpVerify);
router.use('/loginverify', LoginVerify);
router.use('/forgot', Forgot);
router.use('/slider', Slider);
router.use('/songfetch', SongFetch);
router.use('/internationaltophits', InternationalTopHits);
router.use('/dance', Dance);
router.use('/singerplaylist', SingerPlaylist);
router.use('/search', Search);
router.use('/profiledata', ProfileData);
router.use('/addtofavourite', AddToFavourite);

router.use('/sliderimages', express.static('../public/image/Slider'));
router.use('/singerplaylist', express.static('../public/image/Playlist'));
router.use('/uploads', express.static('../uploads'))
router.use('/tophitsimages', express.static('../public/image/TopHits'));
router.use('/internationaltophits', express.static('../public/image/InternationalTopHits'));
router.use('/romantic', express.static('../public/image/Romantic'));

router.get('/', (req, res) => {
  res.send("<h1>I am Home</h1>")
});

module.exports = router;
