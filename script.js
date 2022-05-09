//Validation Script

function myZipCode() {

    let str = document.getElementById("zip").value;
    let zipCodeAlert = document.getElementById("zipcode-alert");
    
    if(str.length < 5) {
        //If str.length < 5, display an alert on doc that says below
        zipCodeAlert.style.display="block";
        zipCodeAlert.innerHTML="Zip Code must be 5 digits";
        zipCodeFlag = false;
    }else {
        zipCodeAlert.style.display="none";
        zipCodeFlag = true;
    }
}

let prevVal = "";
document.querySelector('input').addEventListener('input', function(e) {
    if(this.checkValidity()) {
        //prevVal = true;
    } else {
        this.value = prevVal;
        // alert("You may only enter numbers into this field. Please try again.")
    }
})

//Validation for enter key to be used
document.addEventListener('keypress', function (e) {
    // If Enter is Pressed, 
        //If the length is equal to 5, then send API request
        //otherwise don't do anything

    let str = document.getElementById("zip").value;
    if(e.key == 'Enter'){
        e.preventDefault();
        if(str.length == 5){
            getWeatherData(str);
            console.log(Object)
        }
        else {
            return false;
        }   
    }
});

//Retrieve Weather Data
//Set city to whatever the user inputs
const getWeatherData = (zip) => {

    fetch(`http://api.weatherapi.com/v1/current.json?key=ab742bd6c230495d9be133233220305&q=${zip}&aqi=no`)
    .then(res => res.json())
    .then((data) => {
        //Setting variables within the object to be applied to HTML
        document.getElementById("temperature").innerHTML = `${data.current.temp_f}&deg`;
        document.getElementById("weather").innerHTML = `${data.current.condition.text}`;
        document.getElementById("state").innerHTML = `${data.location.name}` + ", " + `${data.location.region}`;
        document.getElementById("humidity").innerHTML = `${data.current.humidity} g/m3`;
        document.getElementById("wind-dr").innerHTML = `${data.current.wind_dir}`;
        document.getElementById("wind-mph").innerHTML = `${data.current.wind_mph}`;
        document.getElementById("precip").innerHTML = `${data.current.precip_in}`
        console.log(data);

        //Dynamically change background according to weather and
        //scenarios of weather along with their respective icon assignments
        //Sunny
        if(`${data.current.condition.text}` === "Sunny") {
            //if condition matches string, then change the icon/background image to what's provided
            document.getElementById("icon").innerHTML = "<img src=images/sunny.png>";
            document.getElementById("background").style.backgroundImage = "url('images/sunnyday.jpeg')"

        //Partly Cloudy
        } else if(`${data.current.condition.text}` === 'Partly cloudy') {
            document.getElementById("icon").innerHTML = "<img src=images/partly_cloudy.png>"
            document.getElementById("background").style.backgroundImage = "url('images/partlycloudy.jpg')"

        //Overcast
        } else if (`${data.current.condition.text}` === 'Overcast') {
            document.getElementById("icon").innerHTML = "<img src=images/overcast.png>"
            document.getElementById("background").style.backgroundImage = "url('images/overcastpicture.jpg')"
            
        //Mist
        } else if (`${data.current.condition.text}` === 'Mist') {
            document.getElementById("icon").innerHTML = "<img src=images/mist.png>"
            document.getElementById("background").style.backgroundImage = "url('misty-background.jpg')"

        //Patchy rain possible
        } else if(`${data.current.condition.text}` === 'Patchy rain possible') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_rain_possible.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Patchy snow possible
        } else if(`${data.current.condition.text}` === 'Patchy snow possible') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_snow_possible.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Patchy sleet possible
        } else if (`${data.current.condition.text}` === 'Patchy sleet possible') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_sleet_possible.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Thundery outbreaks possible
        } else if (`${data.current.condition.text}` === 'Thundery outbreaks possible') {
            document.getElementById("icon").innerHTML = "<img src=imagthundery_outbreaks_possible.png>"
            document.getElementById("background").style.backgroundImage = "url('images/thundercloud.jpeg')"

        //Blowing snow
        } else if(`${data.current.condition.text}` === 'Blowing snow') {
            document.getElementById("icon").innerHTML = "<img src=images/blowing_snow.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Blizzard
        } else if(`${data.current.condition.text}` === 'Blizzard') {
            document.getElementById("icon").innerHTML = "<img src=images/partly_cloudy.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Fog
        } else if (`${data.current.condition.text}` === 'Fog') {
            document.getElementById("icon").innerHTML = "<img src=images/fog.png>"
            document.getElementById("background").style.backgroundImage = "url('images/foggy.jpg')"

        //Freezing fog
        } else if (`${data.current.condition.text}` === 'Freezing fog') {
            document.getElementById("icon").innerHTML = "<img src=images/freezing_fog.png>"
            document.getElementById("background").style.backgroundImage = "url('images/thundercloud.jpeg')"

        //Patchy light drizzle
        } else if(`${data.current.condition.text}` === 'Patchy light drizzle') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_light_drizzle.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Light drizzle
        } else if(`${data.current.condition.text}` === 'light drizzle') {
            document.getElementById("icon").innerHTML = "<img src=images/light_drizzle.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Freezing drizzle
        } else if (`${data.current.condition.text}` == 'Freezing drizzle') {
            document.getElementById("icon").innerHTML = "<img src=images/freezing_drizzle.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Heavy freezing drizzle
        } else if (`${data.current.condition.text}` === 'Heavy freezing drizzle') {
            document.getElementById("icon").innerHTML = "<img src=images/heavy_freezing_drizzle.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Patchy light rain
        } else if(`${data.current.condition.text}` === 'Patchy light rain') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_light_rain.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Light rain
        } else if(`${data.current.condition.text}` === 'Light rain') {
            document.getElementById("icon").innerHTML = "<img src=images/light_rain.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Moderate rain at times
        } else if (`${data.current.condition.text}` === 'Moderate rain at times') {
            document.getElementById("icon").innerHTML = "<img src=images/light_rain.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Moderate rain
        } else if (`${data.current.condition.text}` === 'Moderate rain') {
            document.getElementById("icon").innerHTML = "<img src=images/light_rain.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Heavy rain at times
        } else if(`${data.current.condition.text}` === 'Heavy rain at times') {
            document.getElementById("icon").innerHTML = "<img src=images/heavy_rain_at_times.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Heavy rain
        } else if(`${data.current.condition.text}` === 'Heavy rain') {
            document.getElementById("icon").innerHTML = "<img src=images/heavy_rain.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Light freezing rain
        } else if (`${data.current.condition.text}` === 'Light freezing rain') {
            document.getElementById("icon").innerHTML = "<img src=images/light_freezing_rain.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Moderate or heavy freezing rain
        } else if (`${data.current.condition.text}` === 'Moderate or heavy freezing rain') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_freezing_rain.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Light sleet
        } else if(`${data.current.condition.text}` === 'Light sleet') {
            document.getElementById("icon").innerHTML = "<img src=images/light_sleet.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Moderate or heavy sleet
        } else if(`${data.current.condition.text}` === 'Moderate or heavy sleet') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_sleet.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Patchy light snow
        } else if (`${data.current.condition.text}` === 'Patchy light snow') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_light_snow.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Light snow
        } else if (`${data.current.condition.text}` === 'Light snow') {
            document.getElementById("icon").innerHTML = "<img src=images/light_snow.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Patchy moderate snow
        } else if(`${data.current.condition.text}` === 'Patchy moderate snow') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_moderate_snow.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Moderate snow
        } else if(`${data.current.condition.text}` === 'Moderate snow') {
            document.getElementById("icon").innerHTML = "<img src=images/blizzard.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Patchy heavy snow
        } else if (`${data.current.condition.text}` === 'Patchy heavy snow') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_heavy_snow.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Heavy snow
        } else if (`${data.current.condition.text}` === 'Heavy snow') {
            document.getElementById("icon").innerHTML = "<img src=images/blizzard.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Ice pellets
        } else if(`${data.current.condition.text}` === 'Ice pellets') {
            document.getElementById("icon").innerHTML = "<img src=images/light_sleet.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Light rain shower
        } else if(`${data.current.condition.text}` === 'Light rain shower') {
            document.getElementById("icon").innerHTML = "<img src=images/light_drizzle.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Moderate or heavy rain shower
        } else if (`${data.current.condition.text}` === 'Moderate or heavy rain shower') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_rain_shower.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Torrential rain shower
        } else if (`${data.current.condition.text}` === 'Torrential rain shower') {
            document.getElementById("icon").innerHTML = "<img src=images/torrential_rain_shower.png>"
            document.getElementById("background").style.backgroundImage = "url('images/torrentialrain.webp')"

        //Light sleet showers
        } else if(`${data.current.condition.text}` === 'Light sleet showers') {
            document.getElementById("icon").innerHTML = "<img src=images/light_sleet.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Moderate or heavy sleet showers
        } else if(`${data.current.condition.text}` === 'Moderate or heavy sleet showers') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_freezing_rain.png>"
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')"

        //Light snow showers
        } else if (`${data.current.condition.text}` === 'Light snow showers') {
            document.getElementById("icon").innerHTML = "<img src=images/light_snow_showers.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Moderate or heavy snow showers
        } else if (`${data.current.condition.text}` === 'Moderate or heavy snow showers') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_snow_showers.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Patchy light rain with thunder
        } else if(`${data.current.condition.text}` === 'Patchy light rain with thunder') {
            document.getElementById("icon").innerHTML = "<img src=images/thundery_outbreaks_possible.png>"
            document.getElementById("background").style.backgroundImage = "url('images/thundercloud.jpeg')"

        //Light showers of ice pellets
        } else if(`${data.current.condition.text}` === 'Light showers of ice pellets') {
            document.getElementById("icon").innerHTML = "<img src=images/light_showers_of_ice_pellets.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Moderate or heavy showers of ice pellets
        } else if (`${data.current.condition.text}` === 'Moderate or heavy showers of ice pellets') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_showers_of_ice_pellets.png>"
            document.getElementById("background").style.backgroundImage = "url('images/snowy.jpg')"

        //Moderate or heavy rain with thunder
        } else if (`${data.current.condition.text}` === 'Moderate or heavy rain with thunder') {
            document.getElementById("icon").innerHTML = "<img src=images/thundery_outbreaks_possible.png>"
            document.getElementById("background").style.backgroundImage = "url('images/thundercloud.jpeg')"

        //Patchy light snow with thunder
        } else if(`${data.current.condition.text}` === 'Patchy light snow with thunder') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_light_snow_with_thunder.png>"
            document.getElementById("background").style.backgroundImage = "url('images/thundercloud.jpeg')"

        //Moderate or heavy snow with thunder
        } else if(`${data.current.condition.text}` === 'Moderate or heavy snow with thunder') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_snow_with_thunder.png>"
            document.getElementById("background").style.backgroundImage = "url('images/thundercloud.jpeg')"

        }
    });
}