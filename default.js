const defaultWeather = () => {
    fetch('http://api.weatherapi.com/v1/current.json?key=ab742bd6c230495d9be133233220305&q=charlotte&aqi=no')
    .then(res => res.json())
    .then((data) => {
        

        //Setting variables within the object to be applied to HTML
        document.getElementById("temperature").innerHTML = `${data.current.temp_f}&degF`;
        document.getElementById("weather").innerHTML = `${data.current.condition.text}`;
        document.getElementById("state").innerHTML = `${data.location.name}` + ", " + `${data.location.region}`;
        document.getElementById("humidity").innerHTML = `${data.current.humidity} g/m3`;
        document.getElementById("wind-dr").innerHTML = `${data.current.wind_dir}`;
        document.getElementById("wind-mph").innerHTML = `${data.current.wind_mph}`;
        document.getElementById("precip").innerHTML = `${data.current.precip_in}`;
        document.getElementById("celsius").innerHTML = `${data.current.temp_c}&degC`;
        document.getElementById("feelslike").innerHTML = `${data.current.feelslike_f}&degF`;
        document.getElementById("pressure").innerHTML = `${data.current.pressure_in}`
        //When the user inputs a City/Zip, load the appropriate icon
        //for that locations weather
        let imageUrl = `https:${data.current.condition.icon}`
            document.getElementById("icon").innerHTML = `<img src="${imageUrl}">`
    })
}