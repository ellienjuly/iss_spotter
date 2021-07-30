const request = require('request');


const nextISSTimesForMyLocation = (callback) => {

  fetchMyIP = function(callback) {

    request('https://api.ipify.org?format=json', (error, response) => {
      if (error) {
        callback(error, null);
        return;
      }
      const ip = JSON.parse(response.body).ip;
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${ip}`;
        callback(Error(msg), null);
        return;
      }
    });
  };


  const fetchCoordsByIP = function(ip, callback) {

    request(`https://freegeoip.app/json/`, (error, response) => {
      if (error) {
        callback(error, null);
        return;
      }
      
      const data = JSON.parse(response.body);

      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching geolocation. Response: ${ip}`;
        callback(Error(msg), null);
        return;
      }
    });
  };

  const fetchISSFlyOverTimes = function(coords, callback) {

    const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

    request(url, (error, response) => {
      if (error) {
        callback(error, null);
        return;
      }

      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching geolocation. Response`;
        callback(Error(msg), null);
        return;
      }
      const passes = JSON.parse(response.body).response;
    });
  };
  callback('Next pass at ');
  
};




module.exports = { nextISSTimesForMyLocation, fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
