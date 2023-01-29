const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bannerSchema = new Schema(
  {
    titleName: String,
    url: String,
    titleImage: String,
    titleText: String,
    color: String,
    Bcolor: String,
  },
  { collection: 'banners' },
);

const Banner = mongoose.model('Banner', bannerSchema);
module.exports = Banner;
