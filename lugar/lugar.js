const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDLmE_lQ4xT0TUWD_LPfhjX5iYIek5nU0o`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`Sin resultados para la ciudad ${direccion}`);
    }

    // let location = JSON.stringify(resp.data.results[0], undefined, 2);
    let results = resp.data.results[0];
    let location = results.geometry.location;

    // console.log("Direccion: " + results.formatted_address);
    // console.log("lat: " + location.lat);
    // console.log("lng: " + location.lng);

    return {
        direccion: results.formatted_address,
        lat: location.lat,
        lgn: location.lng
    }
}

module.exports = {
    getLugarLatLong

}