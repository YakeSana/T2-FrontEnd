const axios = require("axios");
const appid = "2ee4b693541b4f7435cfc1e4beca5cd4";
const q = "Londres";
const cnt = "5";
const lang = "pt_BR";
const m = "metric";
const urlconsulta = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=${cnt}&appid=${appid}&lang=${lang}&units=${m}`;





axios.get(urlconsulta).then((res) => {
    for (const consulta of res.data) {
        console.log
            (`
            ${`Latitude e Longitude de ` + q + `,` + consulta.state + `:`}
            ${`Lat = ` + consulta.lat}
            ${`Lon = ` + consulta.lon}`
            );
        const urlconsulta2 = `https://api.openweathermap.org/data/2.5/weather?lat=${consulta.lat}&lon=${consulta.lon}&appid=${appid}&lang=${lang}&units=${m}`
        axios.get(urlconsulta2).then((ret) => {
            console.log(`${`Temperatura Aparente e Descrição de ` + q + `,` + consulta.state + `:`}`)
            console.log("TA = " + ret.data.main["feels_like"] + "ºC")
            for (const consultaweather of ret.data.weather) {
                console.log("Descrição = " + consultaweather.description)
            }



        })

    }

})











