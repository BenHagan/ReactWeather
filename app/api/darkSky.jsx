var axios = require('axios');

// const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e7bbb8ee3a003d51d633218cfa037e5c&units=imperial';
const DARK_SKY_URL = "https://crossorigin.me/https://api.darksky.net/forecast/e1c682544c5382ed5afc591e032fc618";
const GOOGLE_MAPS_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
module.exports = {

  getTemp: function (location) {
    var googleMapsUrl = `${GOOGLE_MAPS_URL}${location}`;

    return axios.get(googleMapsUrl).then(function (res) {

      if (res.data.status == "ZERO_RESULTS") {
        throw new Error("Zero Results");
      } else {
      var {lat, lng} = res.data.results[0].geometry.location;
      var darkSkyUrl = `${DARK_SKY_URL}/${lat},${lng}`;

      return axios.get(darkSkyUrl);
      }
    }, function(err) {
      throw new Error(err)
    }).then(function (res) {
      debugger;
      return res.data.currently.temperature;
    }, function(err) {
      throw new Error(err)
    });
  }
}
