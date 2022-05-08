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
        //let temp = `${data.current.temp_f}`; <-- general format
        document.getElementById("temperature").innerHTML = `${data.current.temp_f}&deg`;
        document.getElementById("weather").innerHTML = `${data.current.condition.text}`;
        document.getElementById("state").innerHTML = `${data.location.name}` + ", " + `${data.location.region}`;
        let date = `${data.current.last_updated}`
        console.log(data);
        // console.log(date);

        //Dynamically change background according to weather
        if(`${data.current.condition.text.includes('ist')}`) {
            document.getElementById("background").style.backgroundImage = "url('images/misty-background.jpg')";
        
        } else if(`${data.current.condition.text.includes('rain')}`) {
            document.getElementById("background").style.backgroundImage = "url('images/raining.jpeg')";
        
        } else if(`${data.current.condition.text.includes('snow')}`) {
            document.getElementById("background").style.backgroundImage = "url('images/snowing.webp')";
        
        } else if(`${data.current.condition.text.includes('torrential')}`) {
            document.getElementById("background").style.backgroundImage = "url('images/torrentialrain.webp')";
        
        } else if(`${data.current.condition.text.includes('Sunny')}`) {
            document.getElementById("background").style.backgroundImage = "url('images/sunnyday.jpg')";
        
        } else if(`${data.current.condition.text.includes('cast')}`) {
            document.getElementById("background").style.backgroundImage = "url('images/overcastpicture.jpg')";
        }

        //Scenarios of weather along with their respective icon assignments
        if(`${data.current.condition.text}` === "Sunny") {
            //if condition matches string, then change the icon to what's provided
            document.getElementById("icon").innerHTML = "<img src=images/sunny.png>";
        
        } else if(`${data.current.condition.text}` === 'Partly cloudy') {
            document.getElementById("icon").innerHTML = "<img src=images/partly_cloudy.png>"

        } else if (`${data.current.condition.text}` === 'Overcast') {
            document.getElementById("icon").innerHTML = "<img src=images/overcast.png>"
        
        } else if (`${data.current.condition.text}` === 'Mist') {
            document.getElementById("icon").innerHTML = "<img src=images/mist.png>"
        
        } else if(`${data.current.condition.text}` === 'Patchy rain possible') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_rain_possible.png>"
        
        } else if(`${data.current.condition.text}` === 'Patchy snow possible') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_snow_possible.png>"
        
        } else if (`${data.current.condition.text}` === 'Patchy sleet possible') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_sleet_possible.png>"
        
        } else if (`${data.current.condition.text}` === 'Thundery outbreaks possible') {
            document.getElementById("icon").innerHTML = "<img src=imagthundery_outbreaks_possible.png>"
        
        } else if(`${data.current.condition.text}` === 'Blowing snow') {
            document.getElementById("icon").innerHTML = "<img src=images/blowing_snow.png>"
        
        } else if(`${data.current.condition.text}` === 'Blizzard') {
            document.getElementById("icon").innerHTML = "<img src=images/partly_cloudy.png>"
        
        } else if (`${data.current.condition.text}` === 'Fog') {
            document.getElementById("icon").innerHTML = "<img src=images/fog.png>"
        
        } else if (`${data.current.condition.text}` === 'Freezing fog') {
            document.getElementById("icon").innerHTML = "<img src=images/freezing_fog.png>"
        
        } else if(`${data.current.condition.text}` === 'Patchy light drizzle') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_light_drizzle.png>"
        
        } else if(`${data.current.condition.text}` === 'light drizzle') {
            document.getElementById("icon").innerHTML = "<img src=images/light_drizzle.png>"
        
        } else if (`${data.current.condition.text}` == 'Freezing drizzle') {
            document.getElementById("icon").innerHTML = "<img src=images/freezing_drizzle.png>"
        
        } else if (`${data.current.condition.text}` === 'Heavy freezing drizzle') {
            document.getElementById("icon").innerHTML = "<img src=images/heavy_freezing_drizzle.png>"
        
        } else if(`${data.current.condition.text}` === 'Patchy light rain') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_light_rain.png>"
        
        } else if(`${data.current.condition.text}` === 'Light rain') {
            document.getElementById("icon").innerHTML = "<img src=images/light_rain.png>"
        
        } else if (`${data.current.condition.text}` === 'Moderate rain at times') {
            document.getElementById("icon").innerHTML = "<img src=images/light_rain.png>"
        
        } else if (`${data.current.condition.text}` === 'Moderate rain') {
            document.getElementById("icon").innerHTML = "<img src=images/light_rain.png>"
        
        } else if(`${data.current.condition.text}` === 'Heavy rain at times') {
            document.getElementById("icon").innerHTML = "<img src=images/heavy_rain_at_times.png>"
        
        } else if(`${data.current.condition.text}` === 'Heavy rain') {
            document.getElementById("icon").innerHTML = "<img src=images/heavy_rain.png>"
        
        } else if (`${data.current.condition.text}` === 'Light freezing rain') {
            document.getElementById("icon").innerHTML = "<img src=images/light_freezing_rain.png>"
        
        } else if (`${data.current.condition.text}` === 'Moderate or heavy freezing rain') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_freezing_rain.png>"
        
        } else if(`${data.current.condition.text}` === 'Light sleet') {
            document.getElementById("icon").innerHTML = "<img src=images/light_sleet.png>"
        
        } else if(`${data.current.condition.text}` === 'Moderate or heavy sleet') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_sleet.png>"
        
        } else if (`${data.current.condition.text}` === 'Patchy light snow') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_light_snow.png>"
        
        } else if (`${data.current.condition.text}` === 'Light snow') {
            document.getElementById("icon").innerHTML = "<img src=images/light_snow.png>"
        
        } else if(`${data.current.condition.text}` === 'Patchy moderate snow') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_moderate_snow.png>"
        
        } else if(`${data.current.condition.text}` === 'Moderate snow') {
            document.getElementById("icon").innerHTML = "<img src=images/blizzard.png>"
        
        } else if (`${data.current.condition.text}` === 'Patchy heavy snow') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_heavy_snow.png>"
        
        } else if (`${data.current.condition.text}` === 'Heavy snow') {
            document.getElementById("icon").innerHTML = "<img src=images/blizzard.png>"
        
        } else if(`${data.current.condition.text}` === 'Ice pellets') {
            document.getElementById("icon").innerHTML = "<img src=images/light_sleet.png>"
        
        } else if(`${data.current.condition.text}` === 'Light rain shower') {
            document.getElementById("icon").innerHTML = "<img src=images/light_drizzle.png>"
        
        } else if (`${data.current.condition.text}` === 'Moderate or heavy rain shower') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_rain_shower.png>"
        
        } else if (`${data.current.condition.text}` === 'Torrential rain shower') {
            document.getElementById("icon").innerHTML = "<img src=images/torrential_rain_shower.png>"
        
        } else if(`${data.current.condition.text}` === 'Light sleet showers') {
            document.getElementById("icon").innerHTML = "<img src=images/light_sleet.png>"
        
        } else if(`${data.current.condition.text}` === 'Moderate or heavy sleet showers') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_freezing_rain.png>"
        
        } else if (`${data.current.condition.text}` === 'Light snow showers') {
            document.getElementById("icon").innerHTML = "<img src=images/light_snow_showers.png>"
        
        } else if (`${data.current.condition.text}` === 'Moderate or heavy snow showers') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_snow_showers.png>"
        
        } else if(`${data.current.condition.text}` === 'Patchy light rain with thunder') {
            document.getElementById("icon").innerHTML = "<img src=images/thundery_outbreaks_possible.png>"
        
        } else if(`${data.current.condition.text}` === 'Light showers of ice pellets') {
            document.getElementById("icon").innerHTML = "<img src=images/light_showers_of_ice_pellets.png>"
        
        } else if (`${data.current.condition.text}` === 'Moderate or heavy showers of ice pellets') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_showers_of_ice_pellets.png>"
        
        } else if (`${data.current.condition.text}` === 'Moderate or heavy rain with thunder') {
            document.getElementById("icon").innerHTML = "<img src=images/thundery_outbreaks_possible.png>"
        
        } else if(`${data.current.condition.text}` === 'Patchy light snow with thunder') {
            document.getElementById("icon").innerHTML = "<img src=images/patchy_light_snow_with_thunder.png>"
        
        } else if(`${data.current.condition.text}` === 'Moderate or heavy snow with thunder') {
            document.getElementById("icon").innerHTML = "<img src=images/moderate_or_heavy_snow_with_thunder.png>"
        }
    });
}