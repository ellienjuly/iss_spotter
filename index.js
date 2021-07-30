const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

let coords = { latitude: '43.64', longitude: '-79.4331' };

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log('Error fetch details: ', error);
    return;
  } else {
  //   fetchMyIP((error, ip) => {
  //     if (error) {
  //       console.log('Error fetch details: ', error);
  //       return;
  //     } else {
  //       console.log('Returned IP: ', ip);
  //     }
  //   });

  //   fetchCoordsByIP('198.58.210.14', (error, coordinates) => {
  //     if (error) {
  //       console.log("It didn't work!", error);
  //       return;
  //     } else {
        
  //       console.log(coordinates);
  //       return coordinates;
  //     }
  //   });

  //   fetchISSFlyOverTimes(coords, (error, data) => {
  //     if (error) {
  //       console.log("It didn't work", error);
  //       return;
  //     } else {
  //       console.log(data);
  //     }
  //   });
    console.log(passTime);
  }
  
});
