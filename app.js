const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Direccion de la ciudad para obtener el tiempo",
        deman: true
    }
}).argv;


const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async (direccion) => {
	
	let location = await lugar.getLugarLatLong(direccion);
	let temp = await clima.getClima(location.lat, location.lgn);
	
	return `El clima en la ciudad de ${location.direccion} es de ${temp}`;
}

getInfo(argv.direccion)
.then (mensaje => console.log(mensaje))
.catch ( e => console.log (`No hay clima para esta ciudad`));

// lugar.getLugarLatLong(argv.direccion)
    // .then(resp => {
        // console.log(resp);

        // clima.getClima(resp.lat, resp.lgn)
            // .then(resp => {
                // console.log(resp);
            // })

    // })
    // .catch(e => console.log(e));