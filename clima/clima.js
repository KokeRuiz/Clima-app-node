const axios = require('axios');

const getClima = async(lat, lng) => {

    let encodeUrl = encodeURI(lat);

    //console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=921e106f37a6a92fb900f089e8e5c795`);

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=40.4167754&lon=-3.7037902&units=metric&appid=921e106f37a6a92fb900f089e8e5c795`)

    if (resp.data.main == undefined) {
        throw new Error(`Sin resultados para la ciudad`);
    }

    //let temp = JSON.stringify(resp.data.main.temp, undefined, 2);
    let temp = resp.data.main.temp;
    //console.log(temp);

    return temp;
}

module.exports = {
    getClima

}